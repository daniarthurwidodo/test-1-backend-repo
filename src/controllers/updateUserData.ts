import { Request, Response } from 'express';
import { db } from '../config';
import { doc, updateDoc } from 'firebase/firestore';
import { User } from '../types/user';

export const updateUserData = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userData: Partial<User> = {
      ...req.body,
      updatedAt: new Date()
    };

    const userRef = doc(db, 'USERS', userId);
    await updateDoc(userRef, userData);
    
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
};