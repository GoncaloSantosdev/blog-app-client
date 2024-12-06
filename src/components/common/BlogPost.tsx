// Icons
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface BlogPostProps {
  title: string;
  description: string;
  comments: { user: string; comment: string }[];
  likes: number;
  user: string;
  image: string;
}

const BlogPost = ({
  title,
  description,
  comments,
  likes,
  user,
  image,
}: BlogPostProps) => {
  return (
    <article className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Post Image */}
      <div className="aspect-[3/1] w-full relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-5">
        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src="https://via.placeholder.com/32"
            alt={user}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-sm font-medium text-gray-900">{user}</h3>
            <p className="text-xs text-gray-500">Posted 2 hours ago</p>
          </div>
        </div>

        {/* Post Content */}
        <div className="space-y-3 mb-4">
          <h2 className="text-base md:text-xl font-semibold text-gray-900">
            {title}
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
          <button className="flex items-center gap-2 text-gray-500 hover:text-primary-blue">
            <Heart className="w-5 h-5" />
            <span className="text-sm">{likes}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-primary-blue">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{comments.length}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-primary-blue ml-auto">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
