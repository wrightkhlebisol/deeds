import { UserProfile } from "../../types"
import { Star } from "lucide-react"

interface PopularProfileProps {
  user: UserProfile
}

export default function PopularProfile({
  user
}: PopularProfileProps) {
  return (
    <div className="max-w-52 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg bg-white mb-5">
      <div className="relative h-32">
        <img 
          src={user.imageUrl} 
          alt={`${user.firstName} ${user.lastName}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-2xl font-bold text-white inline-block mr-2">{user.firstName}</h1>
          <span className="text-xl text-white font-light">{user.lastName.toLowerCase()}</span>
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-3 w-3 ${i < Math.floor(user.rating) ? 'text-yellow-400' : 'text-gray-300'} mr-0.5`} 
              fill="currentColor"
            />
          ))}
          <span className="ml-2 text-gray-600 font-semibold">{user.rating.toFixed(1)}</span>
        </div>
        {/* Truncate container with ellipsis */}
        <p className="text-gray-600 mb-3 h-[73px] overflow-hidden overflow-ellipsis line-clamp-3 whitespace-normal">{user.summary.slice(0, 73)}</p>

        <div className="flex flex-wrap gap-2">
          <span 
              className="ring ring-offset-1 px-3 py-1 bg-deed-good text-gray-600 text-sm rounded-full"
            >
              {user.totalGreen}
          </span>
          <span 
              className="ring ring-offset-1 px-3 py-1 bg-deed-meh text-gray-600 text-sm rounded-full"
            >
              {user.totalYellow}
          </span>
          <span 
              className="ring ring-offset-1 px-3 py-1 bg-deed-bad text-gray-600 text-sm rounded-full"
            >
              {user.totalRed}
            </span>
        </div>
      </div>
    </div>
  )
}