import { Router } from 'express';

import productController from '../controllers/ProductController.js';
import loginRequired from '../middleware/loginRequired.js';
import search from '../middleware/searchendpoint.js';
import frete from '../middleware/frete';

const router = new Router();

router.post('/', loginRequired, productController.store);
router.post('/frete', frete);
router.delete('/:id', productController.delete);
router.get('/', search, productController.index);
export default router;
