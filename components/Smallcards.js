import React from "react";
import Image from "next/image";
function Smallcards({ location, img, distance }) {
  return (
    <div className="flex items-center m-5 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition ease-out duration-200  ">
      <div className="relative h-20 w-20">
        <Image src={img} fill className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default Smallcards;
