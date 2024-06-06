// About.js
import React from "react";
import Card from "./Card";

export default function About() {
  return (
    <div className="bg-gray-200 p-5 m-1 rounded-lg">
      <h1 className="font-bold text-2xl">Get Crest and get...</h1>
      <div className="flex items-center justify-center gap-4">
        <img
          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
          className="rotate-180 cursor-pointer"
          alt=""
        />
        <Card
          imgsrc="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg"
          heading="Heading 1"
          details="Details of the card"
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
