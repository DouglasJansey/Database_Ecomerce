import { Router } from 'express';

import addressController from '../controllers/AddressController';

const router = new Router();

router.post('/', addressController.store);

export default router;
