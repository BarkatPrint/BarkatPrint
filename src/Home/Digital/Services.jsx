import React, { useState, useEffect } from "react";

import SelectedServices from "./SelectedServices";
import Digital from './Digital'



function DigitalBanner() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>



    <section
      className="relative w-full flex items-center justify-center text-white px-4"
      style={{
        height: isSmallScreen ? "60vh" : "80vh", // thoda height bada rakha gap avoid karne ke liye
        backgroundImage: `url('/Image/Digital.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",  // cover rakha gap avoid karne ke liye
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Text Content */}
      <div className="relative z-20 max-w-4xl text-center">
        <h1
          className="font-extrabold mb-4 drop-shadow-lg leading-tight"
          style={{
            fontSize: isSmallScreen ? "clamp(1.2rem, 5vw, 2.5rem)" : "clamp(2rem, 5vw, 4rem)",
          }}
        >
          DIGITAL SERVICES
        </h1>
        <p
          className="mb-4 drop-shadow-md leading-relaxed max-w-3xl mx-auto"
          style={{
            fontSize: isSmallScreen ? "clamp(0.75rem, 3vw, 1rem)" : "clamp(1rem, 2.5vw, 1.25rem)",
          }}
        >
          Complete Digital Solutions – From Creative Designs to Advanced Marketing,
          <br />
          We Deliver Excellence in Every Digital Service!
        </p>
        <p
          className="font-medium drop-shadow-sm leading-snug max-w-3xl mx-auto"
          style={{
            fontSize: isSmallScreen ? "clamp(0.65rem, 2vw, 0.9rem)" : "clamp(0.8rem, 2vw, 1rem)",
          }}
        >
          Graphic Design & Branding | Video Production & 3D Animation | Web & App Development
          <br />
          Social Media & Digital Marketing | Product Photography | E-commerce Solutions | And Much More!
        </p>
      </div>
    </section>

    

    <SelectedServices />
    <Digital />
    </>


  );
}

export default DigitalBanner;
