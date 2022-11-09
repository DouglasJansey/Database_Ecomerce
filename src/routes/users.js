import { Router } from 'express';

import userController from '../controllers/UserController';
import loginRequired from '../middleware/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
