import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Deed } from '../../types';
// import { useAuth } from '../contexts/AuthContext';
import DeedRating from './DeedRating';
import { UserRoundCheck, UserX } from 'lucide-react';

interface DeedCardProps {
  deed: Deed;
}

export default function DeedDetailsModal({ deed }: DeedCardProps) {
  // const { currentUser } = useAuth();
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
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
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}