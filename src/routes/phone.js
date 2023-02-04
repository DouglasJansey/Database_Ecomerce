import { Router } from 'express';

import phoneController from '../controllers/PhoneController.js';
import loginrequired from '../middleware/loginRequired.js';

const router = new Router();

router.post('/', phoneController.store);
router.put('/', loginrequired, phoneController.update);

export default router;
