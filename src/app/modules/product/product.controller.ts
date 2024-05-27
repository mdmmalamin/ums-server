import { Request, Response } from 'express';
// import { StudentServices } from './student.service';
// import studentValidationSchema from './student.validation';
import productValidationSchema from './product.validation';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    // const student = req.body.student;
    const { product: productData } = req.body;
    const { error } = productValidationSchema.validate(productData);

    // will call service function to send this data
    const result = await ProductServices.createProductIntoDB(productData);

    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong.',
        error: error.details,
      });
    }

    // send response
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    // send response
    res.status(500).json({
      success: false,
      message: 'Something went wrong.',
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Products fetched successfully!',
      error: error,
    });
  }
};

const getOneProduct = async (req: Request, res: Response) => {
  try {
    // const studentId = req.params.studentId;
    const { productId } = req.params;
    const result = await ProductServices.getOneProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong.',
      error: error,
    });
  }
};

const updateOneProduct = async (req: Request, res: Response) => {
  try {
    // const studentId = req.params.studentId;
    const { productId } = req.params;
    const result = await ProductServices.getOneProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong.',
      error: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateOneProduct
};
