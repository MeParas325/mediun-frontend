import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id: string,
}

const BlogCard = ({ authorName, title, content, publishedDate, id} : BlogCardProps) => {
  return ( <Link to={"/blog/" + id}>
    <div className="min-w-96 mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-gray-800">P</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">{authorName || "Anonymous"}</p>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
      </div>

      <h2 className="mt-3 text-lg font-semibold text-gray-900 leading-tight">
        {title}
      </h2>

      <p className="mt-2 text-sm text-gray-600">
        {content.slice(0, 100) + "..."}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Side Hustle</span>
        <p className="text-xs text-gray-500">{Math.ceil(content.length/100)} minute(s) read</p>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;
