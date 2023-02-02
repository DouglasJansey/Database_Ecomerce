import { Router } from 'express';

import userController from '../controllers/UserController.js';
import loginRequired from '../middleware/loginRequired.js';

const router = new Router();

router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
