import { Request, Response } from 'express';
import { db } from '../config';
import { doc, getDoc } from 'firebase/firestore';
import { User } from '../types/user';

export const fetchUserData = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const userRef = doc(db, 'USERS', userId);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const userData = userDoc.data() as User;
    res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};