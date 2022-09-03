import { Router } from 'express';

import photoProductsController from '../controllers/PhotoProductController';

const router = new Router();

router.post('/fotos', photoProductsController.store);

export default router;
