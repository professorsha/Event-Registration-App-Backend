import { Router } from 'express';
import {
  createUserController,
  getUserByIdController,
} from '../controllers/users.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = Router();

router.post('/users', ctrlWrapper(createUserController));
router.get('/users/eventId', ctrlWrapper(getUserByIdController));
export default router;
