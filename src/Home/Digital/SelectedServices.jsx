import React from 'react';

const selectedServices = [
  {
    title: "WEB & APP DEVELOPMENT",
    img: "/Image/Digital/Web.png",
    desc: "Custom-built for performance, security, and success.",
  },
  {
    title: "GRAPHIC DESIGN & BRANDING",
    img: "/Image/Digital/graphic.png",
    desc: "Enhance your brand with creative visuals.",
  },
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
];

export default function SelectedServices() {
  return (
    <div className="min-h-screen bg-cover bg-center py-20 px-5" style={{ backgroundImage: "url('/Image/Background.jpg')" }}>
      <div className=" p-4 rounded-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedServices.map((service) => (
            <div
              key={service.title}
              className="bg-white/10 backdrop-blur-sm text-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-contain mx-auto mb-3"
              />
              <h3 className="text-sm font-bold mb-1">{service.title}</h3>
              <p className="text-xs mb-3">{service.desc}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
}
