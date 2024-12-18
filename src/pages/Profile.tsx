import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import DeedCard from '../components/deeds/DeedCard'
import CreateDeedModal from '../components/deeds/CreateDeedModal'
import { DeedService } from '../services'
import { Deed } from '../types'

export default function Profile() {
  const [deeds, setDeeds] = useState<Deed[]>([])
  const [isOpened, setIsOpened] = useState(false)
  const toggleModal = () => setIsOpened(!isOpened)

  useEffect( () => {
    async function getDeeds() { 
      const userDeeds = await DeedService.getDeedsForUser('demo-user');
      setDeeds(userDeeds)
    }
    getDeeds();
  }, [])
  
  return (
    <div className='flex gap-5'>
      {/* Profile Section */}
      <div className='flex flex-col items-center gap-1 w-1/5 text-center'>
        <LazyLoadImage src='https://randomuser.me/api/portraits/men/1.jpg' alt='Profile' width={32} height={32} className='w-32 h-32 bg-gray-200 rounded-full overflow-hidden' />
        <h1 className='text-2xl font-bold'>Demo User</h1>
        <p className='text-gray-600'>This is a demo user profile</p>
        <button className='px-4 py-2 font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-white rounded-full shadow-sm' onClick={toggleModal}>Add Deed</button>
        {isOpened && <CreateDeedModal open={isOpened} setOpen={setIsOpened} />}
      </div>

      {/* Deed Grid Cards */}
      <div className='flex w-4/5 flex-wrap rounded-lg border-transparent'>
        {
          deeds && deeds.length > 0 && deeds.map(deed =>
            <DeedCard deed={deed} key={deed.id} />)
        }
      </div>
    </div>
  )
}
