import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Services() {
  const services = [
    {
      title: "LOGO DESIGN",
      img: "/Image/Digital/Logo.png",
      desc: "Your Brand, Your Identity!",
    },
    {
      title: "SOCIAL MEDIA DESIGN",
      img: "/Image/Digital/Social.png",
      desc: "Make Your Online Presence Shine!",
    },
    {
      title: "GRAPHIC DESIGN & BRANDING",
      img: "/Image/Digital/graphic.png",
      desc: "Enhance your brand with creative visuals.",
    },
    {
      title: "VIDEO PRODUCTION & 3D ANIMATION",
      img: "/Image/Digital/Video.png",
      desc: "Bring your vision to life with seamless storytelling.",
    },
    {
      title: "WEB & APP DEVELOPMENT",
      img: "/Image/Digital/Web.png",
      desc: "Custom-built for performance, security, and success.",
    },
    {
      title: "SOCIAL MEDIA & DIGITAL MARKETING",
      img: "/Image/Digital/Digital.png",
      desc: "Reach the right audience and maximize engagement.",
    },
    {
      title: "PRODUCT PHOTOGRAPHY",
      img: "/Image/Digital/Product.png",
      desc: "Showcase your products with high-quality visuals.",
    },
    {
      title: "E-COMMERCE SOLUTIONS",
      img: "/Image/Digital/E-Commerce.png",
      desc: "Boost your online store with tailored features.",
    },
  ];

  const sliderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const scrollStep = 220;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    const interval = setInterval(() => {
      if (scrollAmount >= maxScrollLeft) {
        scrollAmount = 0;
      } else {
        scrollAmount += scrollStep;
      }
      slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white">

      {/* Digital Services Header Section */}
      <section className="relative w-full h-full bg-black text-white">
        <img
          src="/Image/Digital.jpg"
          alt="Digital Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-16 min-h-[90vh]">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            DIGITAL SERVICES
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto mb-6 drop-shadow-md">
            Complete Digital Solutions – From Creative Designs to Advanced Marketing,<br />
            We Deliver Excellence in Every Digital Service!
          </p>
          <p className="font-semibold text-sm md:text-base max-w-4xl mx-auto drop-shadow-sm">
            Graphic Design & Branding | Video Production & 3D Animation | Web & App Development<br />
            Social Media & Digital Marketing | Product Photography | E-commerce Solutions | And Much More!
          </p>
        </div>
      </section>

      {/* Horizontal Scroll Cards Section */}
      <div
        className="relative w-full bg-cover bg-center py-10 px-4"
        style={{ backgroundImage: "url('/Image/Background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <div
          ref={sliderRef}
          className="relative z-10 max-w-7xl mx-auto flex flex-nowrap gap-4 overflow-x-auto py-4 px-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl text-white shadow-md group flex flex-col items-center p-3 text-center min-w-[200px]"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-auto object-contain max-h-40 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="mt-3">
                <h3 className="text-sm font-bold mb-1">{service.title}</h3>
                <p className="text-xs mb-2">{service.desc}</p>
                <button className="bg-white text-[#000536] text-xs px-3 py-1 rounded-full hover:bg-[#000536] hover:text-white transition">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>

        
      </div>

   
    </div>
  );
}
