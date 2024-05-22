import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { ProductRoutes } from './app/modules/product/product.route';
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1/students/', StudentRoutes);
app.use('/api/products/', ProductRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Welcome to student details!');
};

app.get('/', getAController);

export default app;
