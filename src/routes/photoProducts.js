import { Router } from 'express';

import photoProductsController from '../controllers/PhotoProductController';
import loginrequired from '../middleware/loginRequired';

const router = new Router();

router.post('/fotos', photoProductsController.store);
router.post('/fotos/:id', loginrequired, photoProductsController.update);

export default router;
