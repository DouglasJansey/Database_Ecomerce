import { Router } from 'express';

import photoProductsController from '../controllers/PhotoProductController.js';
import loginrequired from '../middleware/loginRequired.js';

const router = new Router();

router.post('/fotos', photoProductsController.store);
router.put('/fotos/:id', loginrequired, photoProductsController.update);

export default router;
