import { Router } from 'express';
import { fetchUserData } from '../controllers/fetchUserData';
import { updateUserData } from '../controllers/updateUserData';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Both endpoints are protected by authMiddleware
router.get('/users/:id', authMiddleware, fetchUserData);
router.put('/users/:id', authMiddleware, updateUserData);

export default router;