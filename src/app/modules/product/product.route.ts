import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// will call controller function
router.post('/', ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProducts);
router.get('/:productId', ProductControllers.getOneProduct);
router.put('/:productId', ProductControllers.updateOneProduct);
// router.get('/get-all-students', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getOneStudent);

export const ProductRoutes = router;
