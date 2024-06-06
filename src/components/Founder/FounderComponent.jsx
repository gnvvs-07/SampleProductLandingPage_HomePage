import React from "react";

const FounderComponent = () => {
  return (
    <div className="flex flex-col items-center p-6 shadow-xl rounded-2xl mb-8">
      <img
        className="rounded-2xl w-full mb-4"
        src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64df240c8d5e1c29b06d3a95_Founders%20Photo.webp"
        alt="Founders"
      />
      <div className="text-center">
        <h2 className="font-semibold text-black mb-2 text-xs">
          From the founders
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          We are a young company solving an age-old problem: Supply Chain. Our
          goal is simple: to eradicate stock outs for businesses that want to
          grow faster. Our background, tech expertise, and empathy allow us to
          do just that.
        </p>
        <p className="text-xs text-gray-500 mb-4 italic font-serif">
          Thank you for checking out Crest, and we hope to help you always be
          in stock!
        </p>
        <button className="py-2 px-4 rounded-2xl border text-xs text-pink-500 border-black hover:bg-black hover:text-white">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default FounderComponent;
