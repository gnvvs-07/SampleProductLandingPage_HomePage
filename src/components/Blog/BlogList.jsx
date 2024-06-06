import { useState } from "react";
import PostCard from "./PostCard";

const BlogList = () => {
  const posts = [
    {
      id: 1,
      title: "Why your ERP is not your Inventory Planning Tool",
      date: "March 31, 2023",
      imagesrc:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643d785ce4b16a9a9979095a_Blog%20Build%20VS%20Buy%20.png",
    },

    {
      id: 2,
      title:
        "Do you frequently run out of stock? Here's everything about stock replenishment",
      date: "January 10, 2022",
      imagesrc:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643d785ce4b16a9a9979095a_Blog%20Build%20VS%20Buy%20.png",
    },
    {
      id: 3,
      title: "Inside India’s Biggest Retail Chain",
      date: "November 24, 2022",
      imagesrc:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643d785ce4b16a9a9979095a_Blog%20Build%20VS%20Buy%20.png",
    },
    {
      id: 4,
      title: "Inside India’s Biggest Retail Chain",
      date: "November 24, 2022",
      imagesrc:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643d785ce4b16a9a9979095a_Blog%20Build%20VS%20Buy%20.png",
    },
    {
      id: 5,
      title: "Inside India’s Biggest Retail Chain",
      date: "November 24, 2022",
      imagesrc:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643d785ce4b16a9a9979095a_Blog%20Build%20VS%20Buy%20.png",
    },
    {
      id: 6,
      title: "Inside India’s Biggest Retail Chain",
      date: "November 24, 2022",
      imagesrc:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643d785ce4b16a9a9979095a_Blog%20Build%20VS%20Buy%20.png",
    },
    {
      id: 7,
      title: "Inside India’s Biggest Retail Chain",
      date: "November 24, 2022",
      imagesrc:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643d785ce4b16a9a9979095a_Blog%20Build%20VS%20Buy%20.png",
    },
    {
      id: 8,
      title: "Inside India’s Biggest Retail Chain",
      date: "November 24, 2022",
      imagesrc:
        "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643d785ce4b16a9a9979095a_Blog%20Build%20VS%20Buy%20.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Delivered: The Crest blog</h1>
      <p className="text-sm mb-4">
        Insights from years of working in various supply-chain roles (and an
        itch to write). We hope you find these posts interesting!
      </p>
      <div className="flex justify-center items-center mb-4">
        <img
          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
          alt="Previous"
          className="w-6 h-6 cursor-pointer transform rotate-180 mr-2"
          onClick={handlePrev}
        />
        <img
          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
          alt="Next"
          className="w-6 h-6 cursor-pointer"
          onClick={handleNext}
        />
      </div>
      <div className="flex justify-center overflow-hidden">
        <div
          className="flex gap-4"
          style={{
            transform: `translateX(-${
              (currentIndex === 0 ? 0 : currentIndex - 1) *
              (100 / (posts.length - 1))
            }%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
