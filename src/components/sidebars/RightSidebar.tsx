import { Users, Hash } from "lucide-react";
import Footer from "../common/Footer";

// Mock data - replace with real data later
const topCreators = [
  {
    id: 1,
    name: "John Doe",
    username: "@johndoe",
    avatar: "https://via.placeholder.com/32",
    posts: 156,
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "@janesmith",
    avatar: "https://via.placeholder.com/32",
    posts: 129,
  },
  {
    id: 3,
    name: "Robert Johnson",
    username: "@robert",
    avatar: "https://via.placeholder.com/32",
    posts: 98,
  },
];

const topics = [
  { id: 1, name: "Technology", count: 2420 },
  { id: 2, name: "Programming", count: 1873 },
  { id: 3, name: "Design", count: 1567 },
  { id: 4, name: "Writing", count: 982 },
  { id: 5, name: "Productivity", count: 876 },
  { id: 6, name: "Life", count: 654 },
];

const RightSidebar = () => {
  return (
    <div className="flex flex-col h-full p-6 gap-8">
      {/* Top Creators Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-5 h-5 text-primary-blue" />
          <h2 className="text-base font-semibold text-gray-900">
            Top Creators
          </h2>
        </div>
        <div className="space-y-4">
          {topCreators.map((creator) => (
            <div
              key={creator.id}
              className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">
                  {creator.name}
                </h3>
                <p className="text-xs text-gray-500">{creator.username}</p>
              </div>
              <div className="text-xs text-gray-500">{creator.posts} posts</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Topics Section */}
      <div className="px-2">
        <div className="flex items-center gap-2 mb-4">
          <Hash className="w-5 h-5 text-primary-blue" />
          <h2 className="text-base font-semibold text-gray-900">
            Recommended Topics
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {topics.map((topic) => (
            <button
              key={topic.id}
              className="px-3 py-1.5 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              {topic.name}
              <span className="ml-1 text-xs text-gray-500">
                {topic.count.toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <Footer />
    </div>
  );
};

export default RightSidebar;
