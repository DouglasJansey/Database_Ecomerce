import { Router } from 'express';

import productController from '../controllers/ProductController.js';
import loginRequired from '../middleware/loginRequired.js';
import search from '../middleware/searchendpoint.js';

const router = new Router();

router.post('/', loginRequired, productController.store);
router.delete('/:id', productController.delete);
router.get('/', search, productController.index);
export default router;
