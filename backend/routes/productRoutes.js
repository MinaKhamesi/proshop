import express from 'express';
import { getAllProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();
// @ access Public
router.get('/', getAllProducts);

//@access Public
router.get('/:id', getProductById);

export default router;