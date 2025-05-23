import React from 'react';

const signageCards = [
  {
    title: "ACRYLIC SIGNAGE",
    subtitle: "Modern, Sleek & Professional Signage.",
    image: "./Image/signage/acrylic.png",
    alt: "E-Rickshaw Promotion",
  },
  {
    title: "LED LETTERS",
    subtitle: "Illuminate Your Brand, Shine Bright.",
    image: "./Image/signage/led.png",
    alt: "Audio Advertisements",
  },
  {
    title: "GLOW SIGN BOARDS",
    subtitle: "Light Up Your Business, Even at Night.",
    image: "./Image/signage/glow-sign.png",
    alt: "Jhola Print",
  },
];

export default function SignageCards() {
  return (
    <section
      className="w-full py-20 px-4 text-white relative bg-cover bg-center"
      style={{ backgroundImage: "url('./Image/Background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Signage & Branding Solutions
        </h2>
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg font-medium mb-12">
          Enhance Your Brand with Eye-Catching, Durable, and Professional Signage –
          From Illuminated LED Letters to Sleek Acrylic Boards, We Ensure Your Business Stands Out 24/7.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 px-4">
          {signageCards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/10 backdrop-blur-md p-6 flex flex-col justify-between items-center text-center hover:scale-105 transition transform duration-300 shadow-lg"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className="text-sm text-gray-200 mt-1 mb-4">{card.subtitle}</p>
              <button
                onClick={() => {
                  const message = `*${card.title}*\n${card.subtitle}`;
                  const whatsappUrl = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="mt-auto px-5 py-2 bg-white text-black font-medium text-sm rounded-full hover:bg-gray-200"
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
