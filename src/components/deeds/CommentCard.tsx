import { DeedComment } from "../../types";

interface CommentCardProps { 
  comment: DeedComment;
}

export default function CommentCard({ comment }: CommentCardProps) {
  return (
    <div className="my-1">
      {/* Comment content */}
      <div className="flex items-center gap-2">
        <img
          src={`https://randomuser.me/api/portraits/men/${comment.userId}.jpg`} alt="User" className="w-8 h-8 rounded-full" />
        
        <div>
          <div className="flex flex-row gap-2">
            <h5 className="text-sm font-semibold">{comment.userId}</h5>
            <span className="text-xs text-gray-600">{comment.createdAt.toUTCString()}</span>
          </div>
          <p className="text-sm">{comment.description}</p>
        </div>
      </div>
    </div>
  );
}
