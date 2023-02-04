import { Router } from 'express';

import photoController from '../controllers/PhotoController.js';
import loginrequired from '../middleware/loginRequired.js';

const router = new Router();

router.post('/', photoController.store);
router.get('/',loginrequired, photoController.index);
router.put('/', loginrequired, photoController.update);

export default router;
