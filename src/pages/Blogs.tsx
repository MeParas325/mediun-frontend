import BlogCard from "../components/BlogCard"
import Appbar from "../components/Appbar"
import { useBlogs } from "../hooks"
import SkeletonBlogCard from "../components/Skeleton/SkeletonBlogs"

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  return (
    <>
      <Appbar />

      <div className="mx-auto grid gap-4 max-w-7xl px-6 mt-4">
        {loading
          ? // Shimmer loader while fetching data
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonBlogCard key={index} />
            ))
          : // Render blogs when data is available
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                authorName={blog.author.name}
                title={blog.title}
                content={blog.content}
                publishedDate={"2nd Feb 2024"}
              />
            ))}
      </div>
    </>
  );
};

export default Blogs;
