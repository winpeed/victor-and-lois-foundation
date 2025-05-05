import DynamicHero from "@/components/About/DynamicHero";
import BlogList from "@/components/Blog/BlogList";
import BreakFree from "@/components/Contact/BreakFree";

const BlogListing = () => {
  return (
    <div>
      <DynamicHero backgroundImage="ContactImage.png" title="Information Center" />
      <BlogList />
      <div>
        <BreakFree />
      </div>
    </div>
  );
};

export default BlogListing;
