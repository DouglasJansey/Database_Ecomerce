import { Router } from 'express';

import addressController from '../controllers/AddressController.js';
import loginrequired from '../middleware/loginRequired.js';

const router = new Router();

router.post('/', addressController.store);
router.put('/', loginrequired, addressController.update);

export default router;
