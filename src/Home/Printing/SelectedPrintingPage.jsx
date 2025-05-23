import React from "react";

const selectedCards = [
  {
    title: "FLEX BANNERS",
    desc: "Big Impact, Bold Display",
    img: "./Image/printing-images/flex-banner.png",
  },
  {
    title: "WEDDING CARDS",
    desc: "Perfect Cards for Your Perfect Day.",
    img: "./Image/printing-images/wedding.png",
  },
  {
    title: "PAMPHLET",
    desc: "Spread the Word, Instantly",
    img: "./Image/printing-images/pamphlet.png",
  },
  {
    title: "BILL BOOK",
    desc: "Efficient & Organized Billing for Your Business.",
    img: "./Image/printing-images/bill-book.png",
  },
];

export default function SelectedPrintingPage() {
  const phoneNumber = "917050266383";

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 px-4"
      style={{ backgroundImage: "url('./Image/Background.jpg')" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
        {selectedCards.map((card) => (
          <div
            key={card.title}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-40 object-contain mx-auto mb-3"
            />
            <h3 className="text-base font-bold mb-1">{card.title}</h3>
            <p className="text-xs mb-3">{card.desc}</p>
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                `Hi, I am interested in:\n${card.title}\n${card.desc}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#000536] text-sm px-3 py-1 rounded-full hover:bg-[#000536] hover:text-white transition"
            >
              View More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
