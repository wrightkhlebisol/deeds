import { TrendingUp } from 'lucide-react';
import { UserService } from '../../services';
import PopularProfile from './PopularProfile';
import { Link } from 'react-router-dom';

export default function PopularGrid() {
  const popularSearches = UserService.getPopularSearches();

  return (
    <>
      <div className="flex items-center gap-2">
        <TrendingUp className="w-5 h-5" />
        <h1 className="text-lg font-semibold my-4">Popular Searches</h1>
      </div>
      <div className="flex flex-wrap justify-around">
        {popularSearches.map((user) => (
          <Link to={`/profile/${user.id}`} reloadDocument={false} key={user.id}>
            <PopularProfile key={user.id} user={user} />
          </Link>
        ))}
      </div>
    </>
  )
}
