"use client"
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SlSocialDribbble, SlSocialLinkedin } from "react-icons/sl";
import { FaHeart, FaComment } from 'react-icons/fa';

const Blog4 = () => {
  const [likes, setLikes] = useState(0);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

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
    setNewComment('');
    setShowCommentInput(false);
  };


  return (
    <div className="max-w-[1640px] mx-auto md:px-12 font-roboto lg:text-xl lg:max-w-[900px] some-ele ">
      <div>
    
        <h3 className="mt-6 text-lg">
        Reality, as we perceive it, has undergone a profound transformation in recent years, thanks to the rapid advancements in Extended Reality (XR) technologies. XR encompasses a spectrum of technologies that bridge the gap between the physical and virtual worlds, providing immersive and interactive experiences that challenge our traditional understanding of reality. In this article, we will explore the exciting world of XR, its various components, and the significant reverberations it exerts across an extensive spectrum of industries, spanning from gaming and entertainment to education and healthcare. 
        </h3>

        <h3></h3>
        {/* <h4 className="text-xl mt-5 font-bold mb-5">
          THIS IS HOW THE PANTONE COLOR INSTITUTE DESCRIBES VIVA MAGENTA{" "}
        </h4>

        <h3 className="mt-6 text-lg">
          "The Pantone Color of the Year, Viva Magenta 18-1750, vibrates with
          panache and vigor. It's a shade rooted in nature, descended from the
          red family, and expressing a new signal of strength. Viva Magenta is
          bold and fearless and a vibrant color whose exuberance encourages a
          joyful and optimistic celebration and writes a new story.
        </h3>
        <h3 className="mt-6 text-lg">
          This year's color of the year is powerful and empowering. It's a new
          vibrant red that revels in sheer joy, that encourages experimentation
          and uninhibited self-expression, an electrifying, limitless hue that
          manifests as a standout statement. PANTONE 18-1750 Viva Magenta
          welcomes everyone and everyone with the same will to live and
          rebellious spirit. It's a color that's bold, full of wit, and open to
          all." (Source: www.pantone.com)
        </h3> */}
        <div>
          <h4 className="text-2xl mt-4">
          Gaining insight into the intricacies of Extended Reality (XR)
          </h4>
          <h3 className="mt-6 text-lg">
          Extended Reality is an umbrella term that encompasses several immersive technologies, including Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR).
          </h3>

          <h4 className="text-2xl mt-4">
          Augmented Reality (AR)
          </h4>
          <h3 className="mt-6 text-lg">
          AR overlays digital elements onto the real world, enhancing our perception of reality. Popular applications include mobile AR apps, heads-up displays, and the famous Pokémon GO game, which superimposed virtual creatures onto the physical world through smartphone screens. 
          </h3>

          <h4 className="text-2xl mt-4">
          Virtual Reality (VR)
          </h4>
          <h3 className="mt-6 text-lg">
          VR offers a completely immersive experience, disconnecting users from the real world and transporting them to a fully digital environment. Users typically wear a VR headset to explore these immersive environments, often used for gaming, simulations, and training.
          </h3>

          <h4 className="text-2xl mt-4">
          Mixed Reality (MR)
          </h4>
          <h3 className="mt-6 text-lg">
          MR combines elements of AR and VR, merging the real and digital worlds in a seamless manner. Microsoft's HoloLens, for instance, offers MR experiences where digital holograms interact with the real environment.
          </h3>

          <h4 className="text-2xl mt-4">
          The Impact on Entertainment and Gaming
          </h4>
          <h3 className="mt-6 text-lg">
          The entertainment industry has been at the forefront of adopting XR technologies, pushing the boundaries of what is possible in immersive experiences.
          </h3>
          {/* <h3 className="mt-6 text-lg">
          Furthermore, AR-based mobile games have taken social interactions to a new level, bringing people together for outdoor adventures. Pokémon GO is a prime example, encouraging players to explore their surroundings while hunting for digital creatures. These games blend real and virtual worlds, fostering an active and engaged player base.
          </h3> */}

          <h4 className="text-2xl mt-4">
          In the gaming world
          </h4>
          <h3 className="mt-6 text-lg">
          VR has revolutionized gameplay, offering an unparalleled level of immersion. Players find themselves transported to fantastical worlds, interacting with characters and environments as if they were real.
          </h3>

          <h4 className="text-2xl mt-4">
          AR-based mobile games
          </h4>
          <h3 className="mt-6 text-lg">
          These have taken social interactions to a new level, bringing people together for outdoor adventures. Mobile App Development has taken a new shift in their realm where Pokémon GO is a prime example, encouraging players to explore their surroundings while hunting for digital creatures.
          </h3>


          <h4 className="text-2xl mt-4">
          Education and Training
          </h4>
          <h3 className="mt-6 text-lg">
          The educational landscape has also been profoundly impacted by XR technologies.
          </h3>

          <h4 className="text-2xl mt-4">
          Immersive learning experiences
          </h4>
          <h3 className="mt-6 text-lg">
          These have been shown to improve retention and understanding of complex subjects. VR simulations can recreate historical events, deep-sea dives, or even space exploration, offering students an opportunity to learn by doing.
          </h3>

          <h4 className="text-2xl mt-4">
          AR and MR in classrooms
          </h4>
          <h3 className="mt-6 text-lg">
          These technologies are transforming traditional classrooms by overlaying digital information onto physical textbooks or providing 3D models for interactive science lessons. In the workplace, XR has found applications in employee training, from simulating dangerous scenarios for firefighters to training aviation engineers.
          </h3>

          <h4 className="text-2xl mt-4">
          Biomedical and Clinical Implementations
          </h4>
          <h3 className="mt-6 text-lg">
          Extended Reality is making waves in the healthcare industry, both in medical training and patient care.
          </h3>

          <h4 className="text-2xl mt-4">
          Surgeons practicing in virtual settings
          </h4>
          <h3 className="mt-6 text-lg">
          Before performing procedures on patients, reducing the risk of errors.
          </h3>

          <h4 className="text-2xl mt-4">
          VR therapy
          </h4>
          <h3 className="mt-6 text-lg">
          Aids patients in regaining mobility and cognitive functions. For example, stroke survivors can engage in virtual activities that motivate them to move and rebuild neural pathways. Additionally, AR is being used in telemedicine, allowing remote specialists to provide guidance and support to on-site medical staff during procedures.
          </h3>

          <h4 className="text-2xl mt-4">
          Architectural Design and Real Estate
          </h4>
          <h3 className="mt-6 text-lg">
          Architects and real estate professionals have embraced XR for its ability to provide realistic and interactive representations of buildings and properties.
          </h3>

          <h4 className="text-2xl mt-4">
          Virtual walkthroughs
          </h4>
          <h3 className="mt-6 text-lg">
          Clients can explore virtual walkthroughs of future homes, offices, or commercial spaces before construction even begins, enhancing customer satisfaction and streamlining the design process. 
          </h3>

          <h4 className="text-2xl mt-4">
          AR apps for real estate agents
          </h4>
          <h3 className="mt-6 text-lg">
          These provide customers with property information by simply scanning a physical brochure or sign, simplifying the decision-making process for potential buyers.
          </h3>

          <h4 className="text-2xl mt-4">
          The Future of Retail
          </h4>
          <h3 className="mt-6 text-lg">
          XR technologies are reshaping the retail sector by enhancing the shopping experience. 
          </h3>

          <h4 className="text-2xl mt-4">
          AR apps for visualization
          </h4>
          <h3 className="mt-6 text-lg">
          Customers can visualize how furniture or clothing items will look in their own living spaces or on their bodies, reducing return rates. 
          </h3>

          <h4 className="text-2xl mt-4">
          AR engagement in physical stores
          </h4>
          <h3 className="mt-6 text-lg">
          By scanning products or displays, customers can access additional information, reviews, and promotions, bridging the gap between in-store and online shopping experiences.
          </h3>

          <h4 className="text-2xl mt-4">
          The Challenges of XR
          </h4>
          <h3 className="mt-6 text-lg">
          While XR technologies offer immense potential, there are challenges to address.
          </h3>

          <h4 className="text-2xl mt-4">
          Cost and accessibility
          </h4>
          <h3 className="mt-6 text-lg">
          High-quality VR and MR equipment can be costly, limiting access to these experiences for some individuals and organizations.
          </h3>

          <h4 className="text-2xl mt-4">
          Data security and privacy
          </h4>
          <h3 className="mt-6 text-lg">
          Ensuring data security and privacy in XR applications is a growing concern, as these technologies gather significant amounts of personal information. 
          <h3 className="mt-6 text-lg">
          As Extended Reality technologies continue to advance, the boundary between the physical and virtual worlds becomes increasingly porous. The impact of XR is felt across various sectors, from entertainment and education to healthcare and real estate. The ability to blend reality and digital experiences is opening up new possibilities for creativity, learning, and problem-solving. As we move forward, addressing challenges related to affordability and data privacy will be essential to ensure equitable access and responsible use of these transformative technologies. In reimagining reality as we know it, XR is empowering us to explore uncharted territories, learn in innovative ways, and improve countless aspects of our lives.
          </h3>

          </h3>

          {/* <div className="flex gap-5 sm:mt-10 mt-10  md:ml-5 lg:ml-10">
            <span>
              <BsFacebook />
            </span>
            <span>
              <AiFillInstagram />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <SlSocialDribbble />
            </span>
            <span>
              <SlSocialLinkedin />
            </span>
          </div> */}


<div className="flex justify-between some-ele">
    <div className="flex gap-5 sm:mt-10 mt-10 md:ml-5 lg:ml-0">
      <span className="cursor-pointer text-red-600" onClick={handleLikeClick}>
        <FaHeart />
        {likes > 0 && <span className="ml-1 text-xs">{likes}</span>}
      </span>
      
      <span className="cursor-pointer text-blue-500" onClick={handleCommentClick}>
        <FaComment />
        {comments.length > 0 && <span className="ml-1 text-xs">{comments.length}</span>}
      </span>     
    </div>

  <div className="flex gap-5 sm:mt-10 mt-10 md:ml-5 lg:ml-10">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <BsFacebook className="cursor-pointer" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram className="cursor-pointer" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="cursor-pointer" />
      </a>
      <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer">
        <SlSocialDribbble className="cursor-pointer" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
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
            <button type="submit" className="text-sm p-1 px-5 cursor-pointer border bg-black text-white rounded-2xl">Submit</button>
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
  );
};

export default Blog4;
