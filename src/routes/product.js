import { Router } from 'express';

import productController from '../controllers/ProductController';
import loginRequired from '../middleware/loginRequired';
import search from '../middleware/searchendpoint';

const router = new Router();

router.post('/', loginRequired, productController.store);
router.delete('/:id', productController.delete);
router.get('/', search, productController.index);
export default router;
