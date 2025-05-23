import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const cards = [
    {
      title: "FLEX PRINTING",
      p: "Bigger Prints, Bigger Impact.",
      image: "./Image/printing-images/Flex.png",
    },
    {
      title: "DIGITAL PRINTING",
      p: "Precision Prints, Perfect Results.",
      image: "./Image/printing-images/Digital.png",
    },
    {
      title: "OFFSET PRINTING",
      p: "High-Volume Prints, Maximum Quality.",
      image: "./Image/printing-images/Offset.png",
    },
    {
      title: "T-SHIRT PRINTING",
      p: "Wear Your Style, Drink Your Passion.",
      image: "./Image/printing-images/t-shirt.png",
    },
    {
      title: "SCREEN PRINTING",
      p: "Bold Prints for Every Fabric.",
      image: "./Image/printing-images/Screen.png",
    },
  ];
  




export default function Printing() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

 

  return (
    <>

      {/* Background Section */}
      <div
        className="relative w-full h-full bg-cover bg-center py-16 
          before:absolute before:inset-0 before:bg-black/50 before:content-['']"
        style={{ backgroundImage: "url('./Image/Background.jpg')" }}
      >





      {/* Printing Services Carousel */}
<section className="w-full py-16 px-4 text-white relative z-10">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 drop-shadow-md">
      Premium Printing Solutions
    </h2>
    <p className="text-sm sm:text-base md:text-lg font-medium text-center max-w-3xl mx-auto mb-10 drop-shadow-sm leading-relaxed">
      High-Quality, Vibrant, and Durable Prints Tailored to Your Needs.<br />
      From Business Essentials to Personalized Designs, We Bring Your Ideas to Life with Precision.
    </p>

    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index} className="px-3">
          <div className="bg-white/90 text-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover bg-white"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold mb-1">{card.title}</h4>
              <p className="text-sm text-gray-700">{card.p}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

      </div>

    
    </>
  );
}
