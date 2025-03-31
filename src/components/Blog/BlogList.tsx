import { fetchBlogPosts } from "@/api/contentful";
import { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import defaultOptions from "@/api/richTextOptions";
import { BiLoaderCircle } from "react-icons/bi";
import { BlogPost } from "@/models/blog";

const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "3em 0em",
          justifyContent: "center",
        }}
      >
        <BiLoaderCircle fontSize={"5rem"} />
      </div>
    );
  if (error) return <div>Error loading blog posts.</div>;
  if (posts.length === 0)
    return (
      <div
        style={{
          display: "flex",
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "5em 0em",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "600" }}>
          No post(s) found.
        </h1>
      </div>
    );

  return (
    <main className="max-w-5xl mx-auto mt-16 mb-16 px-4">
      {posts.slice(0, 6).map((post) => {
        const { blogTitle, blogSummary, date, blogImage } = post.fields;
        const { id } = post.sys;

        return (
          <article
            className="flex flex-col lg:flex-row bg-white mb-14 mt-4 rounded overflow-hidden border border-gray-300"
            style={{ alignItems: "flex-start" }}
            key={id}
          >
            <div style={{ flex: "0 0 20%" }} className="w-full">
              {blogImage ? (
                <img
                  src={`https:${blogImage.fields.file.url}`}
                  alt={blogImage.fields.description}
                  height={250}
                  width={200}
                  className="w-full"
                  style={{ maxHeight: "250px", objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    background: "gray",
                    minWidth: "200px",
                    height: "250px",
                  }}
                  className="w-full lg:w-1/3"
                ></div>
              )}
            </div>

            <div
              className="pl-4 pt-4 pb-4 lg:pl-20"
              style={{ flex: "0 0 80%" }}
            >
              <h2 className="text-4xl font-semibold text-blue-700 mb-2 lg:text-left">
                <a href={`blog/details/${id}`} className="hover:underline">
                  {`${blogTitle.slice(0, 1).toUpperCase()}${blogTitle.slice(
                    1
                  )}`}
                </a>
              </h2>
              <p className="text-md text-gray-500 mb-2 lg:text-left">
                Posted on {new Date(date).toDateString()}
              </p>

              <div className="pr-6">
                {documentToReactComponents(blogSummary, defaultOptions)}
              </div>
            </div>
          </article>
        );
      })}
    </main>
  );
};

export default BlogList;
