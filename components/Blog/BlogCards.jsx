import React from "react";
import { blogCards } from "@/assets/Data/data";
import Link from "next/link";

const BlogCards = () => {
  // Reverse the order of blogCards array to display newly added cards first
  const reversedBlogCards = [...blogCards].reverse();

  return (
    <>
      <div className="max-w-[1640px] mx-auto bg-white min-h-screen">
        <div className="p-5 gap-8 blogCards lg:px-10">
          {reversedBlogCards.map((m) => (
            <Link key={m.id} href={`/blog/${m.name}`}>
              <span>
                <div className="w-full lg:w-[300px] lg:mt-10 h-[450px] bg-white cursor-pointer rounded-3xl mx-auto shadow-2xl">
                  <img
                    src={m.img}
                    className="h-[200px] w-full rounded-t-3xl"
                    alt="blog_image"
                  />
                  <div className="flex flex-col justify-between h-[160px] lg:px-5 px-3 pt-2 lg:pt-3 some-element">
                    <h1 className="font-bold lg:mt-5">{m.title}</h1>
                    <h2 className="lg:text-[14px] text-[12px] lg:mt-20">
                      {m.desc}
                    </h2>
                  </div>
                </div>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogCards;
