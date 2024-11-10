import { Deed } from '../types';

export const deeds: Deed[] = [
  {
    id: '1',
    name: 'John Doe',
    title: 'Volunteered at Local Food Bank',
    description: 'Spent 5 hours helping sort and distribute food to families in needSpent 5 hours helping sort and distribute food to families in needSpent 5 hours helping sort and distribute food to families in needSpent 5 hours helping sort and distribute food to families in needSpent 5 hours helping sort and distribute food to families in needSpent 5 hours helping sort and distribute food to families in needSpent 5 hours helping sort and distribute food to families in need',
    type: 'good',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    creatorId: '1',
    targetUserId: 'demo-user',
    isAnonymous: false,
    status: 'published',
    evidence: [
      {
        type: 'image',
        url: 'https://example.com/foodbank.jpg',
        description: 'Photo from the food bank',
        timestamp: new Date('2024-01-15')
      }
    ],
    hash: 'abc123',
    provenance: 'xyz789',
    weight: 1.5,
    votes: {
      up: 25,
      down: 2
    },
    comments: [
      {
        id: '1',
        userId: '2',
        deedId: '1',
        description: 'Great job, John! Keep up the good work.',
        createdAt: new Date('2024-01-16'),
        updatedAt: new Date('2024-01-16')
      },
      {
        id: '2',
        userId: '3',
        deedId: '1',
        description: 'I was there too, and John was a huge help!',
        createdAt: new Date('2024-01-17'),
        updatedAt: new Date('2024-01-17')
      }
    ]
  },
  {
    id: '2',
    name: 'Jane Smith',
    title: 'Rude to Service Worker',
    description: 'Witnessed being unnecessarily rude to a cafe barista over a minor mistake',
    type: 'bad',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
    creatorId: '2',
    targetUserId: 'demo-user',
    isAnonymous: true,
    status: 'published',
    evidence: [],
    hash: 'def456',
    provenance: 'uvw123',
    weight: 0.5,
    votes: {
      up: 5,
      down: 15
    },
    comments: [
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding. Jane should learn to be more patient and understanding. Jane should learn to be more patient and understanding. Jane should learn to be more patient and understanding. Jane should learn to be more patient and understanding. Jane should learn to be more patient and understanding. Jane should learn to be more patient and understanding. Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      },
      {
        id: '3',
        userId: '4',
        deedId: '2',
        description: 'Jane should learn to be more patient and understanding.',
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-02')
      }
    ]
  },
  {
    id: '3',
    name: 'Alice Johnson',
    title: 'Donated to Children\'s Hospital',
    description: 'Made a significant donation to the children\'s hospital annual fundraiser',
    type: 'good',
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10'),
    creatorId: '3',
    targetUserId: 'demo-user',
    isAnonymous: false,
    status: 'published',
    evidence: [
      {
        type: 'document',
        url: 'https://example.com/donation-receipt.pdf',
        description: 'Donation receipt',
        timestamp: new Date('2024-02-10')
      }
    ],
    hash: 'ghi789',
    provenance: 'rst456',
    weight: 1.8,
    votes: {
      up: 42,
      down: 1
    },
    comments: [
      {
        id: '4',
        userId: '5',
        deedId: '3',
        description: 'Thank you for supporting the children\'s hospital!',
        createdAt: new Date('2024-02-11'),
        updatedAt: new Date('2024-02-11')
      }
    ]
  },
  {
    id: '4',
    name: 'Bob Brown',
    title: 'Helped Elderly Neighbor',
    description: 'Regularly helps elderly neighbor with grocery shopping and yard work',
    type: 'good',
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15'),
    creatorId: '4',
    targetUserId: 'demo-user',
    isAnonymous: false,
    status: 'published',
    evidence: [
      {
        type: 'video',
        url: 'https://example.com/helping-neighbor.mp4',
        description: 'Video testimonial from neighbor',
        timestamp: new Date('2024-02-15')
      }
    ],
    hash: 'jkl012',
    provenance: 'opq789',
    weight: 1.6,
    votes: {
      up: 33,
      down: 0
    },
    comments: [
      {
        id: '5',
        userId: '1',
        deedId: '4',
        description: 'Bob is a great example of a caring neighbor!',
        createdAt: new Date('2024-02-16'),
        updatedAt: new Date('2024-02-16')
      }
    ]
  },
  {
    id: '5',
    name: 'Charlie Davis',
    title: 'Missed Important Team Meeting',
    description: 'Failed to attend crucial team meeting without notice or explanation',
    type: 'meh',
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20'),
    creatorId: '5',
    targetUserId: 'demo-user',
    isAnonymous: true,
    status: 'published',
    evidence: [],
    hash: 'mno345',
    provenance: 'lmn012',
    weight: 0.7,
    votes: {
      up: 8,
      down: 12
    },
    comments: [
      {
        id: '6',
        userId: '2',
        deedId: '5',
        description: 'Charlie should communicate better with the team.',
        createdAt: new Date('2024-02-21'),
        updatedAt: new Date('2024-02-21')
      }
    ]
  }
]; 