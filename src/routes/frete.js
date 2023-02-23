import { Router } from 'express';
import freteController from '../controllers/FreteController.js';

const router = new Router();

router.post('/', freteController);
export default router;
