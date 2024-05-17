"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { blogCards } from "@/assets/Data/data";
import { useParams } from "next/navigation";

const BlogDetailed = () => {
  const { blogInner } = useParams();
  const [blogCardss, setBlogCards] = useState("");
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const m = blogCards.find((o) => o?.name === blogInner[0]);
    console.log(m);
    if (parseInt(m?.id) < 6) {
      const n = blogCards.find((o) => o?.id === parseInt(m?.id) + 1);
      const o = blogCards.find((o) => o?.id === parseInt(m?.id) + 2);
      const newData = [...(n ? [n] : []), ...(o ? [o] : [])];
      setCombinedData(newData);
    } else {
      const n = blogCards.find((o) => o?.id === parseInt(m?.id) - 1);
      const o = blogCards.find((o) => o?.id === parseInt(m?.id) - 2);
      const newData = [...(n ? [n] : []), ...(o ? [o] : [])];
      setCombinedData(newData);
    }
    setBlogCards(m);
    console.log(combinedData);
  }, [blogInner]);

  return (
    <>
      {/* <Navbar /> */}
      <div>
        {blogCardss && (
          <div className="max-w-[1640px] mx-auto p-4 font-roboto mb-4 lg:max-w-[900px]">
            <div className=" mx-3 mt-32">
              <h4 className="uppercase text-2xl md:text-4xl font-bold w-[230px] md:w-[600px] mt-10">
                {blogCardss.title}
              </h4>
              <div className="mt-6 text-gray-400 md:text-lg font-dm">
                <span>
                  {/* By:{blogCards.By} | {blogCards.Date} | {blogCards.Genere} |{" "} */}
                  {blogCardss.desc}
                </span>
              </div>
            </div>
            <img className="mt-6 w-full" src={blogCardss.img} alt="image" />
            <div>{<blogCardss.more />}</div>
          </div>
        )}
        {combinedData && (
          <div className="max-w-[1640px] mx-auto p-4 font-roboto mb-20">
            <div className="flex justify-between">
              <p className="font-times mb-6 text-3xl w-[250px] md:w-[400px] ">
                MORE BLOG ARTICLES
              </p>
              <Link href="/blog">
                <h4 className="text-gray-500 cursor-pointer md:mr-10 ">
                  Show all
                </h4>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-5">
                {combinedData.map((m) => (
                  <Link key={m.id} href={`/blog/${m.name}`}>
                    <div className="w-full lg:w-[300px] lg:mt-10 h-[450px] bg-white cursor-pointer rounded-3xl mx-auto shadow-2xl">
                      <img
                        src={m.img}
                        className="h-[200px] w-full rounded-t-3xl"
                        alt="blog_image"
                      />
                      <div className="flex flex-col justify-between h-[160px] lg:px-5 px-3 pt-2 lg:pt-3 some-element">
                        <h3 className="font-bold lg:mt-5">{m.title}</h3>
                        <h4 className="lg:text-[14px] text-[12px] lg:mt-20">
                          {m.desc}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default BlogDetailed;
