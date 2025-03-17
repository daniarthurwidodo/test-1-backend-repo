import { Router, Express } from 'express';
import { fetchUserData } from '../controllers/fetchUserData';
import { updateUserData } from '../controllers/updateUserData';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.get('/user/:id', authMiddleware, fetchUserData);
router.put('/user/:id', authMiddleware, updateUserData);

export const setUserRoutes = (app: Express) => {
    app.use('/api', router);
};