"use client"
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SlSocialDribbble, SlSocialLinkedin } from "react-icons/sl";
import { FaHeart, FaComment } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Blog6 = () => {
  const [likes, setLikes] = useState(0);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleLikeClick = () => {
    setLikes(likes + 1);
    // Add additional logic if needed, like making an API request.
  };

  const handleCommentClick = () => {
    // setComments(comments + 1);
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
    setShowCommentInput(false);
  };

  return (
    <>
      <Helmet>
        <title>
          The Importance of Influencer Marketing | Enhancing Marketing
          Strategies
        </title>
        <meta
          name="description"
          content="The rise of influencer marketing highlights the need for true influencer data acquisition. Brands use influencer data for strategic insights and targeted marketing campaigns."
        />
      </Helmet>
      <div className="max-w-[1640px] mx-auto md:px-12 font-roboto lg:text-xl lg:max-w-[900px] some-ele ">
        <div>
          <h1 className="mt-6 font-bold text-2xl">
            What is influencer marketing? The Role of Data in Influencer
            Marketing?
          </h1>
          <h3 className="mt-6 text-lg">
            At its core, influencer marketing falls under the umbrella of social
            media marketing, utilizing endorsements and product mentions from
            influencers. These influencers are individuals with a dedicated
            social following, often regarded as experts within their specific
            niche. <br /> The effectiveness of influencer marketing is rooted in
            the substantial trust these social influencers have cultivated with
            their followers. Their recommendations act as a powerful form of
            social proof for your brand, resonating with and influencing
            potential customers. <br /> Whether you're a brand or a content
            creator navigating social media, you're likely aware of the pivotal
            role data plays. Understanding the intricacies of the data behind
            your influencer marketing campaigns can empower you to make informed
            decisions and establish deeper connections with your followers.
            However, there's an ongoing debate about the necessity of leveraging
            influencer marketing data to fully harness your data potential.
          </h3>
          <h1 className="mt-6 font-bold text-2xl">
            Planning - Fundamental Element in Influencer Marketing{" "}
          </h1>
          <h3 className="mt-6 text-lg">
            While companies promoting on social media have easy access to data,
            navigating through and processing this information can be intricate.
            Opting for an influencer marketing data platform can provide a more
            lucid and comprehensive understanding of the data, facilitating the
            development of a robust brand strategy. <br /> Utilizing these
            platforms offers a unique vantage point by providing surveillance of
            data from thousands of creators. The beauty of it? You don't need to
            manually collect data from individual creators; the platform
            automates this process for you. <br /> In the realm of social media
            marketing, the task of accumulating and comparing data from various
            content creators can be overwhelmingly frustrating. The sheer volume
            of creators makes researching everyone impractical. Even if you
            manage to gather data, it often turns out to be insignificant when
            considering the broader picture. The key is to identify crucial
            pieces of information that hold value for your brand strategy. This
            way, you can efficiently compare creators and select the most
            suitable ones for your campaign.
          </h3>

          <div>
            <div className="flex justify-between some-ele">
              <div className="flex gap-5 sm:mt-10 mt-10 md:ml-5 lg:ml-0">
                <span
                  className="cursor-pointer text-red-600"
                  onClick={handleLikeClick}
                >
                  <FaHeart />
                  {likes > 0 && <span className="ml-1 text-xs">{likes}</span>}
                </span>

                <span
                  className="cursor-pointer text-blue-500"
                  onClick={handleCommentClick}
                >
                  <FaComment />
                  {comments.length > 0 && (
                    <span className="ml-1 text-xs">{comments.length}</span>
                  )}
                </span>
              </div>

              <div className="flex gap-5 sm:mt-10 mt-10 md:ml-5 lg:ml-10">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="cursor-pointer" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram className="cursor-pointer" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="cursor-pointer" />
                </a>
                <a
                  href="https://www.dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SlSocialDribbble className="cursor-pointer" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SlSocialLinkedin className="cursor-pointer" />
                </a>
              </div>
            </div>
            {showCommentInput && (
              <div className="mt-3">
                <form onSubmit={handleCommentSubmit}>
                  <div>
                    <textarea
                      type="text"
                      className="text-sm"
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                  </div>
                  <div className="mt-2">
                    <button
                      type="submit"
                      className="text-sm p-1 px-5 cursor-pointer border bg-black text-white rounded-2xl"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
            {/* Display existing comments */}
            {comments.length > 0 && (
              <div className="mt-5">
                <h3 className="text-sm font-semibold">Comments :</h3>
                <ul className="list-disc pl-7 text-sm">
                  {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog6;
