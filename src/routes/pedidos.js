import { Router } from 'express';
import pedidosController from '../controllers/PedidosController';
import loginrequired from '../middleware/loginRequired';

const router = new Router();

router.post('/', pedidosController.store);
router.get('/', loginrequired, pedidosController.index);
export default router;
