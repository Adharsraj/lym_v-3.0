"use client"
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SlSocialDribbble, SlSocialLinkedin } from "react-icons/sl";
import { FaHeart, FaComment } from "react-icons/fa";

const Blog8 = () => {
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
                <title>
                    Are You worried About Your Website's Performance ? 
                    Here are 7 Signs That Indicate It Might Be Time for a Refresh{" "}
                </title>
                <meta
                    name="description"
                    content="What is the first thing you do when you hear about a new company or a product? You go and check the website of the company, right?"
                />
            <div className="max-w-[1640px] mx-auto md:px-12 font-roboto lg:text-xl lg:max-w-[900px] some-ele ">
                <div>
                    <h3 className="mt-6 text-lg">
                        Your website is the face of your company, literally the most vital business asset.
                        However, if your website is outmoded, you will encounter difficulties creating new conversations.
                        In most cases, it can influence your brand image.
                        Your website has to be fresh, updated, and aesthetic to impact your potential clients.
                    </h3>
                    <h1 className="mt-6 font-bold text-3xl">
                        Here are 7 tell-tale signs you need a website refresh{" "}
                    </h1>
                    <h1 className="mt-6 font-bold text-2xl">1. Slow Loading Speed</h1>
                    <h3 className="mt-6 text-lg">
                        If your website takes forever to load, it may affect conversion rates and SEO.
                        A visitor's interest span is limited, and an ideal load time is less than three seconds.
                        Ensure your site follows the best practices in terms of speed.
                    </h3>
                    <h1 className="mt-6 font-bold text-2xl">
                        2. Not Optimized for Mobile{" "}
                    </h1>
                    <h3 className="mt-6 text-lg">
                        More than 50% of traffic comes from mobile phones today.
                        Your website needs to work on all devices, including smartphones.
                        For this, your website needs to follow responsive design principles.
                    </h3>
                    <h1 className="mt-6 font-bold text-2xl">
                        3. Content does not Align with Business Goals{" "}
                    </h1>
                    <h3 className="mt-6 text-lg">
                        If your content or site is not driving visitors to customers, your site needs a refresh.
                         Update your site content so that it aligns with your current business goals.
                    </h3>
                    <h1 className="mt-6 font-bold text-2xl">
                    4. Weak Online Presence{" "}
                    </h1>
                    <h3 className="mt-6 text-lg">
                    Visibility on search engines will open many new business opportunities.
                     An SEO-optimized website has a higher chance of ranking in SERP. Also, 
                     a weak online presence will affect your business in the long run.
                    </h3>
                    <h1 className="mt-6 font-bold text-2xl">
                    5. No Social Media Integration
                    </h1>
                    <h3 className="mt-6 text-lg">
                    You will lose business opportunities if your website is not social media-friendly. 
                    Revamp your site with social media integration.
                    </h3>
                    <h1 className="mt-6 font-bold text-2xl">
                    6. Outworn Site Appearance{" "}
                    </h1>
                    <h3 className="mt-6 text-lg">
                    An aesthetic design will attract new users to your site.
                     Outworn site appearance can impact new customers. It's time for a site update.
                    </h3>
                    <h1 className="mt-6 font-bold text-2xl">
                    7. You Changed your Branding
                    </h1>
                    <h3 className="mt-6 text-lg">
                    If you have changed your branding, it's time to refresh your website
                     with a similar concept so that you don't confuse your target audience.
                     It must reflect on your website - if it's a logo or color scheme.
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

export default Blog8;
