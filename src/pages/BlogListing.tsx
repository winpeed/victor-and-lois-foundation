import DynamicHero from "@/components/About/DynamicHero";
import BlogList from "@/components/Blog/BlogList";
import BreakFree from "@/components/Contact/BreakFree";

type Props = {};

const BlogListing = (props: Props) => {
  return (
    <div>
      <DynamicHero backgroundImage="ContactImage.png" title="Blog" />
      <BlogList />
      <div className="mb-20">
        <BreakFree />
      </div>
    </div>
  );
};

export default BlogListing;
