import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { UserService } from './UserService';
import { UserProfile } from '../types';

export const createUser = async (userDetails: UserProfile) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password as string);
    await UserService.createUser(userDetails, user.uid);
    return { user: user, error: null };
  } catch (error) {
    console.error(error);
    return { user: null, error };
  }
}

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return { user: userCredential.user, error: null }
  } catch (error) {
    console.log(error);
    return { user: null, error };
  }
}

export const logOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    return { error };
  }
}
