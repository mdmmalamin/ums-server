import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getOneProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const updateOneProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOneAndUpdate();
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getOneProductFromDB,
  updateOneProductFromDB,
};
