import BlogPost from "../components/common/BlogPost";
import posts from "../data/posts";

const HomePage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-6">
        {/* Page Title */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Home Feed
          </h1>
          <button className="px-4 py-2 text-sm font-medium text-white bg-primary-blue rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Create Post
          </button>
        </div>

        {/* Posts Feed */}
        <div className="space-y-8">
          {posts.map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              description={post.description}
              comments={post.comments}
              likes={post.likes}
              user={post.user}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
