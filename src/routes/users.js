import { Router } from 'express';

import userController from '../controllers/UserController';
import loginRequired from '../middleware/loginRequired';

const router = new Router();

router.get('/', userController.index);
router.post('/', userController.store);
router.delete('/', loginRequired, userController.delete);

export default router;
