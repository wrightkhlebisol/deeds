export type DeedType = 'good' | 'bad' | 'meh';
export type DeedStatus = 'published' | 'unpublished' | 'hidden' | 'under_review';
export type DeedEvidence = {
  type: 'link' | 'image' | 'video' | 'document';
  url: string;
  description: string;
  timestamp: Date;
};

export interface DeedComment {
  id: string;
  userId: string;
  deedId: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Deed {
  id: string;
  name: string,
  title: string;
  description: string;
  type: DeedType;
  createdAt: Date;
  updatedAt: Date;
  creatorId: string;
  targetUserId: string;
  isAnonymous: boolean;
  publishAt?: Date;
  status: DeedStatus;
  evidence: DeedEvidence[];
  hash: string;
  provenance: string;
  weight: number;
  votes: {
    up: number;
    down: number;
  };
  source?: {
    type: string;
    url: string;
    automated: boolean;
  };
  comments: DeedComment[];
}

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  summary: string;
  email: string;
  dateOfBirth: Date;
  isVerified: boolean;
  rating: number;
  totalGreen: number;
  totalYellow: number;
  totalRed: number;
  claimedPages: string[];
  createdAt: Date;
  updatedAt: Date;
}