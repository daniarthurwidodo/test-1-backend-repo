import { Request, Response } from 'express';
import { db } from '../config';
import { doc, getDoc } from 'firebase/firestore';

export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userDoc = await getDoc(doc(db, 'USERS', userId));
    if (userDoc.exists()) {
      res.status(200).json(userDoc.data());
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching user data');
  }
};