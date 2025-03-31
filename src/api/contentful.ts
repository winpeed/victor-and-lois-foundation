import { createClient } from "contentful";

const ORDER_BY_CREATED_AT = "-sys.createdAt" as const;

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const fetchBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      order: [ORDER_BY_CREATED_AT],
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};

export const getEntryById = async (id: string) => {
  try {
    const entry = await client.getEntry(id);
    return entry;
  } catch (error) {
    console.error("Error fetching blog post by id:", error);
    throw error;
  }
};

const getSinglePost = (slug: string) =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "blogPost",
    })
    .then((response) => response.items);

export { fetchBlogPosts, getSinglePost };
