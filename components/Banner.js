import React from "react";
import Image from "next/legacy/image";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute text-black top-1/2 w-full text-center  tra ">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-red-400 bg-white px-10 py-4 shadow-md hover:shadow-xl  active:scale-90 transition-all duration-150 rounded-full font-bold my-3">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
