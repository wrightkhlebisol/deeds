import { useState } from 'react';
import clsx from 'clsx';
import { DialogTitle, Fieldset, Field, Label, Textarea, Button } from '@headlessui/react'
import { Deed } from '../../types';
// import { useAuth } from '../contexts/AuthContext';
import DeedRating from './DeedRating';
import CommentCard from './CommentCard';
import { ChevronDown, ChevronRight, LucideMessageSquareQuote, PlusSquareIcon, UserRoundCheck, UserX } from 'lucide-react';
import Modal from '../Modal';

interface DeedCardProps {
  deed: Deed;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function DeedDetailsModal({ deed, open, setOpen }: DeedCardProps) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [toggleCreateComment, setToggleCreateComment] = useState(false);

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
          <div className='flex flex-row gap-1 justify-center align-bottom bg-center content-center cursor-pointer' onClick={() => setCommentOpen(!commentOpen)} >
            <LucideMessageSquareQuote />
            <h4 className="text-lg font-semibold">Comments [{deed.comments.length}]</h4>
            {commentOpen ? <ChevronDown /> : <ChevronRight />}
          </div>
          <PlusSquareIcon className="cursor-pointer" onClick={() => setToggleCreateComment(!toggleCreateComment)} />
        </div>
        {/* Create Comment Section */}
        {toggleCreateComment && <form action="">
          <Fieldset className="space-y-3 rounded-xl p-3 sm:p-3">
            <Field>
              <Label className="text-sm/6 font-medium">Comment</Label>
              <Textarea
                className={clsx(
                  'mt-3 block w-full resize-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                )}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Field>
            <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white rounded-full shadow-sm" type="submit">Submit</Button>
          </Fieldset>
        </form>}
        <div>

        </div>
        {/* Comment content dropdown */}
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