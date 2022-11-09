import { Router } from 'express';

import photoController from '../controllers/PhotoController';
import loginrequired from '../middleware/loginRequired';

const router = new Router();

router.post('/', photoController.store);
router.put('/', loginrequired, photoController.update);

export default router;
