import { Router } from 'express';
import pedidosController from '../controllers/PedidosController.js';
import loginrequired from '../middleware/loginRequired.js';

const router = new Router();

router.post('/', pedidosController.store);
router.get('/', loginrequired, pedidosController.index);
export default router;
