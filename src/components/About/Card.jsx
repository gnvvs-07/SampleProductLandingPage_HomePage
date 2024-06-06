// Card.js
import React from "react";

export default function Card(props) {
  return (
    <div className="flex flex-col sm:flex-row items-center shadow-2xl rounded-lg p-4 m-2 bg-white">
      <img src={props.imgsrc} className="sm:w-72 lg:w-96 w-48 h-auto sm:m-0 m-2" alt="" />
      <div className="flex flex-col justify-center sm:ml-4">
        <p className="font-bold text-lg sm:text-xl lg:text-2xl">{props.heading}</p>
        <p className="text-base sm:text-lg lg:text-xl italic">{props.details}</p>
      </div>
    </div>
  );
}
