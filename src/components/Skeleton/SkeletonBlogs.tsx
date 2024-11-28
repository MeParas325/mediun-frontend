const SkeletonBlogCard = () => {
    return (
      <div className="p-4 bg-gray-100 rounded-lg shadow-md animate-pulse">
        {/* Simulated author */}
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-3"></div>
        {/* Simulated title */}
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        {/* Simulated content */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>
    );
  };

  export default SkeletonBlogCard