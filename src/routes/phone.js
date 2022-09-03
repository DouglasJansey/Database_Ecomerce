import { Router } from 'express';

import phoneController from '../controllers/PhoneController';

const router = new Router();

router.post('/', phoneController.store);

export default router;
