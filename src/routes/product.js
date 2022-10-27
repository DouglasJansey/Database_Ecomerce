import { Router } from 'express';

import productController from '../controllers/ProductController';
import loginRequired from '../middleware/loginRequired';

const router = new Router();

router.post('/', loginRequired, productController.store);
router.delete('/:id', productController.delete);
router.get('/', productController.index);
export default router;
