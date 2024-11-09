import {useState} from 'react';
import { Deed } from '../../types';
// import { useAuth } from '../contexts/AuthContext';
import DeedDetailsModal from './DeedDetailsModal';

interface DeedCardProps {
  deed: Deed;
}

export default function DeedCard({ deed }: DeedCardProps) {
  // const { currentUser } = useAuth();
  const [isOpened, setIsOpened] = useState(false);
  const toggleModal = () => setIsOpened(!isOpened);

  return (
    <div className={`flex flex-col flex-wrap p-3 border-b-[1px] w-1/3 bg-deed-${deed.type} cursor-pointer`} onClick={toggleModal}>
      {/* Title and description */}
      <div>
        <div>
          <h3 className="text-lg font-semibold">{deed.title}</h3>
          <p className='text-sm line-clamp-2'>
            {deed.description}
          </p>
        </div>

        <div className="mt-2 text-xs text-gray-500">
          {deed.isAnonymous ? 'Anonymous' : 'Verified'} • 
          Weight: {deed.weight.toFixed(1)}
        </div>
      </div>
      {isOpened && <DeedDetailsModal deed={deed} open={isOpened} setOpen={setIsOpened} />}
    </div>
  );
} 