import { DeedService } from '../../services/DeedService';
import { Deed } from '../../types';
import {ThumbsUp, ThumbsDown} from 'lucide-react';

interface DeedRatingProps {
  deed: Deed;
}

export default function DeedRating({deed}: DeedRatingProps) {
  const handleVote = async (isUpvote: boolean) => {
    // if (!currentUser) return;
    await DeedService.voteOnDeed(deed.id, isUpvote);
  };

  return (
    <div className="flex justify-around bg-gray-50">
      <div className='flex bg-green-200 hover:bg-green-300 px-4 py-3 w-1/2 justify-center cursor-pointer'>
        <button 
          onClick={() => handleVote(true)}
          className="flex p-1 gap-2 rounded"
        >
          <ThumbsUp/> <span>{deed.votes.up}</span>
        </button>
      </div>
      <div className='flex bg-red-200 hover:bg-red-300  px-4 py-3 w-1/2 justify-center cursor-pointer'>
        <button 
          onClick={() => handleVote(false)}
          className="flex p-1 gap-2 rounded"
        >
          <ThumbsDown/> <span>{deed.votes.down}</span>
        </button>
      </div>
    </div>
  )
}