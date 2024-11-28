import { useBlog } from "../hooks"
import { useParams } from "react-router-dom"
import Appbar from "../components/Appbar.tsx"

// Shimmer Component for Blog Page
const ShimmerBlog = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen animate-pulse">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          <div className="h-4 bg-gray-300 rounded w-3/5"></div>
        </div>

        {/* Author Section */}
        <div className="flex items-center px-6 py-4 bg-gray-100 border-t border-gray-200">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="ml-3 w-2/3">
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog(id || "");

  return <>
    <Appbar />
    {loading ? <ShimmerBlog /> : <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">{blog?.title}</h1>
          <p className="text-sm text-gray-500 mt-1">Posted on February, 2024</p>
        </div>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed p-6">{blog?.content}</p>

        {/* Author Section */}
        <div className="flex items-center px-6 py-4 bg-gray-100 border-t border-gray-200">
          <div className="h-10 w-10 rounded-full bg-gray-300 flex-shrink-0"></div>
          <div className="ml-3">
            <h2 className="text-gray-800 font-bold">{blog?.author.name || "Anonymous"}</h2>
            <p className="text-sm text-gray-600">
              Master of mirth, purveyor of puns, and the funniest person in the kingdom.
            </p>
          </div>
        </div>
      </div>
    </div>}


  </>
}

export default Blog;
