import React from "react";
import BlogNew from "@/components/Blog/BlogNew";
import BlogCards from "@/components/Blog/BlogCards";

const Blog = () => {

  return (
    <>
      <div className="App">
        <div className="App-inner">
            <title>LYMDATA LABS | Unleashing Data Potential</title>
            <meta
              name="description"
              content=" Unlock the power of data with LYMDATA LABS. Our expert team helps businesses harness their data potential for optimal growth and success."
            />
            <link rel="canonical" href=" https://www.lymdata.com/blog  " />
            <meta
              property="og:title"
              content="LYMDATA LABS  | Unleashing Data Potential"
            />
            <meta
              property="og:description"
              content="  Unlock the power of data with LYMDATA LABS. Our expert team helps businesses harness their data potential for optimal growth and success. "
            />
            <meta
              name="image"
              property="og:image"
              content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"
            />
            <meta property="og:url" content=" https://www.lymdata.com/blog  " />
            <meta
              name="twitter:title"
              content="LYMDATA LABS  | Unleashing Data Potential"
            />
            <meta
              name="twitter:description"
              content=" Unlock the power of data with LYMDATA LABS. Our expert team helps businesses harness their data potential for optimal growth and success.  "
            />
            <meta
              name="twitter:image"
              content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"
            />

          {/* <Navbar /> */}
          {/* <AllBlogs /> */}
          <BlogNew />
          <BlogCards />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Blog;
