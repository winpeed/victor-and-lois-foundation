import { Document } from "@contentful/rich-text-types";

export type BlogImage = {
  sys: {
    type: string;
    linkType: string;
    id: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
};

export type BlogPost = {
  sys: {
    id: string;
  };
  fields: {
    blogTitle: string;
    blogSummary: Document;
    blogContent: Document;
    date: string;
    blogImage?: BlogImage;
    slug: string;
  };
};
