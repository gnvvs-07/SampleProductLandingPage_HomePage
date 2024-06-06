import React from "react";
import Card from "./Card";
import "./Reviews.css"
export default function Reviews() {
  return (
    <div className="bg-gray-200 p-5 m-1 rounded-lg">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="font-bold text-2xl">Best Reviews...</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellat
          exercitationem non quibusdam cupiditate voluptate! Officia minus
          doloribus, animi ipsum eaque repellat, dignissimos porro alias aut
          consequuntur, illo totam corporis.
        </p>
      </div>
      <div className="dashboard-item flex items-center justify-center gap-4">
        <img
          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
          className="rotate-180 cursor-pointer"
          alt=""
        />
        <Card
          imgsrc="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg"
          heading="Review"
          details="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa beatae asperiores eveniet repellat! Neque, placeat repellendus. Sint, at iure?"
        />
        <img
          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
          alt=""
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
