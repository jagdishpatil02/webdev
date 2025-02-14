// pages/index.js
"use client";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Home() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Set the width and height for the confetti
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      <Confetti width={width} height={height} />
      <h1 className="text-4xl font-bold text-pink-600 mb-4 z-10 text-center">
        Happy Valentine's Day Sunflower🌻!
      </h1>
      <div className="flex flex-wrap justify-center items-center z-10">
        <img
          src="jayshree.jpeg"
          alt="Your Photo"
          className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-lg shadow-lg m-2"
        />
        <div className="heart mx-2 animate-beat text-6xl">❤️ </div>
        <img
          src="jagdish.jpeg"
          alt="Your Photo"
          className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]  rounded-lg shadow-lg m-2"
        />
      </div>
      <p className="text-xl text-gray-700 mt-4 z-10 text-pink-600 text-center p-4 lg:w-[32rem]">
        💖 "तुझ्यासोबत प्रत्येक दिवस एक सुंदर स्वप्न साकार झाल्यासारखा वाटतो.
        तूच माझं हृदय, माझं आनंद आणि माझं सदैव असशील. तुला शब्दांपेक्षा जास्त
        प्रेम करतो!" 💖
      </p>
    </div>
  );
}
