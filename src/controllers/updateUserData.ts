import { Request, Response } from 'express';
import { db } from '../config';
import { doc, updateDoc } from 'firebase/firestore';

export const updateUserData = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    await updateDoc(doc(db, 'USERS', userId), userData);
    res.status(200).send('User data updated successfully');
  } catch (error) {
    res.status(500).send('Error updating user data');
  }
};