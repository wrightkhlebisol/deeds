import { useState } from 'react';
import { DialogTitle } from '@headlessui/react'
import { Deed } from '../../types';
// import { useAuth } from '../contexts/AuthContext';
import DeedRating from './DeedRating';
import CommentCard from './CommentCard';
import { ChevronRight, LucideMessageSquareQuote, UserRoundCheck, UserX } from 'lucide-react';
import Modal from '../Modal';

interface DeedCardProps {
  deed: Deed;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function DeedDetailsModal({ deed, open, setOpen }: DeedCardProps) {
  const [commentOpen, setCommentOpen] = useState(false);
  return (
    <Modal open={open} setOpen={setOpen}>
      {/* Deed content */}
      <div className={`flex bg-deed-${deed.type}`}>
        {/* Title and description */}
        <div className='w-5/6 p-3'>
          <DialogTitle as="h3" className="text-base font-semibold text-gray-900 mb-3">{deed.title}</DialogTitle>
          <p className="text-sm">
            {deed.description}
          </p>

          {deed.evidence.length > 0 && (
            <div className="mt-2">
              <h4 className="text-sm font-semibold">Evidence:</h4>
              <ul className="text-sm">
                {deed.evidence.map((evidence, index) => (
                  <li key={index}>
                    <a 
                      href={evidence.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {evidence.description}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Metadata */}
        <div className={`flex flex-col w-1/6 text-white bg-gray-600 items-center gap-5 p-3`}>
          <div className='rounded-full border-white border-2 p-[4px]'>{deed.weight.toFixed(1)}</div>
          <div className='rounded-full border-white border-2 p-[4px]'>
            {deed.isAnonymous ? <UserX/> : <UserRoundCheck/>}
          </div>
        </div>
      </div>

      {/* Rating section */}
      <DeedRating deed={deed} />

      {/* Comments section */}
      <div>
        {/* Comments Metadata */}
        <div className="flex flex-row justify-between p-3">
          <div className='flex flex-row gap-1'>
            <LucideMessageSquareQuote />
            <h4 className="text-lg font-semibold">Comments [{deed.comments.length}]</h4>
          </div>
          <ChevronRight className="cursor-pointer" onClick={() => setCommentOpen(!commentOpen)} />
        </div>
        {/* Comment content */}
        {
          commentOpen &&
          <div className={`flex flex-col gap-3 p-3 text-white bg-deed-${deed.type} max-h-80 overflow-auto`}>
            {
              deed && deed.comments.length > 0 ? deed.comments.map((comment, index) => <CommentCard comment={comment} key={index}/>) : <p>No comments yet</p>    
            }
          </div>
        }
      </div>
    </Modal>
  )
}