import { getEntryById } from "@/api/contentful";
import defaultOptions from "@/api/richTextOptions";
import { BlogPost } from "@/models/blog";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";

const BlogContent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    getEntryById(id)
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

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
        {" "}
        <BiLoaderCircle fontSize={"5rem"} />
      </div>
    );
  if (error) return <div>Error loading post.</div>;

  if (!post)
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
        No post found.
      </div>
    );

  const { blogTitle, blogContent, date, blogImage } = post.fields;

  return (
    <div>
      <main className="mx-auto mt-16 mb-16 max-w-5xl bg-white px-4">
        <button
          onClick={() => navigate("/blog")}
          style={{
            padding: "0.6em 1.5em",
            borderRadius: "1em",
            background: "#1d2671",
            color: "white",
          }}
        >
          Go Back
        </button>
        <article>
          <header className="py-4">
            <h2 className="text-5xl font-semibold mb-2 mt-2">
              {" "}
              {`${blogTitle.slice(0, 1).toUpperCase()}${blogTitle.slice(1)}`}
            </h2>
            <p className="text-sm text-gray-500">
              Posted on {new Date(date).toDateString()}
            </p>
          </header>

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

          <section className="p-4 leading-relaxed">
            {documentToReactComponents(blogContent, defaultOptions)}
          </section>
        </article>
      </main>

      {/* <aside className="mx-auto max-w-5xl mt-4 bg-white p-4 border border-gray-300 rounded">
        <h3 className="text-lg font-semibold mb-2">Related Articles</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            <a
              href="blog/details/448944894"
              className="text-blue-700 hover:underline"
            >
              Related Article 1
            </a>
          </li>
          <li>
            <a
              href="blog/details/448944894"
              className="text-blue-700 hover:underline"
            >
              Related Article 2
            </a>
          </li>
          <li>
            <a
              href="blog/details/448944894"
              className="text-blue-700 hover:underline"
            >
              Related Article 3
            </a>
          </li>
        </ul>
      </aside> */}
    </div>
  );
};

export default BlogContent;
