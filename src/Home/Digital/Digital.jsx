import React, { useRef, useEffect, useState } from 'react';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 768);
    updateSize(); // initial check
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const scrollStep = 220;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    let interval;

    const scrollSlider = () => {
      scrollAmount = (scrollAmount + scrollStep > maxScrollLeft) ? 0 : scrollAmount + scrollStep;
      slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };

    const startAutoScroll = () => {
      interval = setInterval(scrollSlider, 5000);
    };

    const stopAutoScroll = () => {
      clearInterval(interval);
    };

    startAutoScroll();
    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);

    return () => {
      stopAutoScroll();
      slider.removeEventListener("mouseenter", stopAutoScroll);
      slider.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-full text-white">
      {/* Horizontal Scroll Cards Section */}
      <div
        className="relative w-full bg-cover bg-center py-10 px-4"
        style={{ backgroundImage: "url('/Image/Background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
        <div
          ref={sliderRef}
          className="relative z-10 max-w-7xl mx-auto flex flex-nowrap gap-4 overflow-x-auto py-4 px-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300"
          style={{ scrollBehavior: 'smooth' }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/10 backdrop-blur-sm rounded-xl text-white shadow-md group flex flex-col items-center p-4 text-center min-w-[200px] hover:scale-105 transition-transform duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-auto object-contain max-h-40"
              />
              <div className="mt-3">
                <h3 className="text-sm font-bold mb-1">{service.title}</h3>
                <p className="text-xs mb-2">{service.desc}</p>
                <a
                  href={`https://wa.me/917050266383?text=${encodeURIComponent(
                    `Service Inquiry:\nTitle: ${service.title}\nDescription: ${service.desc}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#000536] text-xs px-3 py-1 rounded-full hover:bg-[#000536] hover:text-white transition"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
