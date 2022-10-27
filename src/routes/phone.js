import { Router } from 'express';

import phoneController from '../controllers/PhoneController';
import loginrequired from '../middleware/loginRequired';

const router = new Router();

router.post('/', phoneController.store);
router.post('/:id', loginrequired, phoneController.update);

export default router;
