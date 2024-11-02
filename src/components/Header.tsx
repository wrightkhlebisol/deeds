import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"

export default function Header() {
  return (
      // Header with logo and profile image
      <div className="flex justify-between items-center py-3 px-10 border-b border-gray-200">
        {/* Logo */}
        <div className="w-40 h-16 bg-gray-100 rounded flex items-center justify-center">
          <Link to="/">
            <span className="text-gray-500 font-extrabold">Deeds</span>
          </Link>
        </div>
        
        {/* Profile Image */}
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
          <LazyLoadImage
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Profile"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
  )
}
