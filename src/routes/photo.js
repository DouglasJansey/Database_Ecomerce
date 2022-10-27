import { Router } from 'express';

import photoController from '../controllers/PhotoController';
import loginrequired from '../middleware/loginRequired';

const router = new Router();

router.post('/', photoController.store);
router.post('/:id', loginrequired, photoController.update);

export default router;
