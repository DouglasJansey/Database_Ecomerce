import { Router } from 'express';

import productController from '../controllers/ProductController';

const router = new Router();

router.post('/', productController.store);
router.get('/', productController.index);
export default router;
