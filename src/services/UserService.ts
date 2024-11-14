import { db } from '../config/firebase';
import { addDoc, collection, doc, getDoc, getDocs, limit, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { UserProfile } from '../types';
import { Users } from '../data/UsersData';

export class UserService {
  static getPopularSearches() {
    try {
      const q = query(
        collection(db, 'users'),
        orderBy('hits', 'desc'),
        limit(20)
      )
      const popularUsers = getDocs(q);
      return Users //popularUsers;
    } catch (error) {
      console.error(error);
    }
  }

  static async createUser(userData: UserProfile, userId: string) {
    try {
      const data = {
        ...userData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }
      const userRef = await setDoc(doc(db, 'users', userId), data)
      return userRef;
    } catch (error) {
      console.error(error);
    }
  }

  static async getAllUsers() {
    try {
      const q = query(
        collection(db, 'users'),
        orderBy('updatedAt', 'desc'),
        limit(50)
      )
      const allUsers = await getDocs(q);
      return allUsers
    } catch (error) {
      console.error(error);
    }
  }

  static async getUser(userId: string): Promise<UserProfile | null | unknown> {
    try {
      const docSnap = await getDoc(doc(db, 'users', userId))
      if (!docSnap) return null

      return docSnap as unknown as UserProfile;
    } catch (error) {
      console.error(error)
    }
  }

  static async updateProfile(userId: string) {
    try {

    } catch (error) {
      console.error(error);
    }
  }

  static async deleteUser(userId: string) {
    try {

    } catch (error) {
      console.error(error);
    }
  }

}