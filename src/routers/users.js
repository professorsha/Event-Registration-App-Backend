import { Router } from 'express';
import { createUserController } from '../controllers/users.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = Router();

router.post('/users', ctrlWrapper(createUserController));

export default router;
