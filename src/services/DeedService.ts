// import { db } from '../config/firebase';
// import {
//   collection,
//   addDoc,
//   updateDoc,
//   doc,
//   query,
//   where,
//   getDocs,
//   increment,
//   Timestamp
// } from 'firebase/firestore';
import { Deed, DeedEvidence } from '../types';
import { generateHash, generateProvenance } from '../utils/Crypto';
import { deeds } from '../data/DeedsData';

export class DeedService {
  private static calculateWeight(
    isAnonymous: boolean,
    isVerified: boolean,
    evidence: DeedEvidence[]
  ): number {
    let weight = 1.0;

    if (isAnonymous) weight *= 0.5;
    if (isVerified) weight *= 1.5;
    if (evidence.length > 0) weight *= (1 + (evidence.length * 0.2));

    return Math.min(weight, 2.0); // Cap at 2.0
  }

  static async createDeed(deedData: Partial<Deed>): Promise<Deed> {
    const hash = await generateHash(JSON.stringify(deedData));
    const provenance = await generateProvenance(deedData);
    const weight = this.calculateWeight(
      deedData.isAnonymous!,
      false, // TODO: Get from user profile
      deedData.evidence!
    );

    const deed: Partial<Deed> = {
      ...deedData,
      hash,
      provenance,
      weight,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: deedData.publishAt ? 'unpublished' : 'published',
      votes: { up: 0, down: 0 }
    };

    // For demo purposes, just return a dummy ID
    return deed.hash as unknown as Deed;
  }

  static async getDeedsForUser(userId: string): Promise<Deed[]> {
    // Return dummy data instead of querying Firestore
    // const id = Number(userId);
    return deeds.filter(deed => deed.targetUserId === userId);
  }

  static async voteOnDeed(deedId: string, isUpvote: boolean): Promise<void> {
    // For demo purposes, just log the vote
    console.log(`Vote recorded: ${isUpvote ? 'up' : 'down'} for deed ${deedId}`);
  }

  static async getAllDeeds(): Promise<Deed[]> {
    return deeds;
  }
} 