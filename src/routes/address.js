import { Router } from 'express';

import addressController from '../controllers/AddressController';
import loginrequired from '../middleware/loginRequired';

const router = new Router();

router.post('/', addressController.store);
router.put('/', loginrequired, addressController.update);

export default router;
