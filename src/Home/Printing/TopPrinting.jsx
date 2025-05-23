import React, { useEffect, useRef } from "react";

function TopPrinting() {
  const phoneNumber = "917050266383";
  const scrollRef = useRef(null);

  const cards = [
    { title: "BUSINESS CARDS", desc: "Make Your First Impression Last.", img: "./Image/printing-images/Visiting.png" },
    { title: "WEDDING CARDS", desc: "Perfect Cards for Your Perfect Day.", img: "./Image/printing-images/wedding.png" },
    { title: "ID CARDS", desc: "Professional & Secure Identity Solutions.", img: "./Image/printing-images/id-card.png" },
    { title: "CUP PRINTING", desc: "Sip in Style!", img: "./Image/printing-images/cup.png" },
    { title: "PAMPHLET", desc: "Spread the Word, Instantly", img: "./Image/printing-images/pamphlet.png" },
    { title: "BILL BOOK", desc: "Efficient & Organized Billing for Your Business.", img: "./Image/printing-images/bill-book.png" },
    { title: "INVITATION CARDS", desc: "Invite in Style, Create Lasting Impressions.", img: "./Image/printing-images/invitation.png" },
    { title: "CAR POSTERS", desc: "Drive Your Message Forward!", img: "./Image/printing-images/car-poster.png" },
    { title: "CALENDAR PRINT", desc: "Your Year, Your Brand", img: "./Image/printing-images/Calendar.png" },
    { title: "HOARDINGS", desc: "Maximum Reach, Maximum Visibility!", img: "./Image/printing-images/hoarding.png" },
    { title: "FLEX BANNERS", desc: "Big Impact, Bold Display", img: "./Image/printing-images/flex-banner.png" },
    { title: "CASH MEMOS", desc: "Clear Records, Clear Profits!", img: "./Image/printing-images/cashmemo.png" },
    { title: "LETTER PADS", desc: "Every Note Matters!", img: "./Image/printing-images/letterpad.png" },
    { title: "LIGHT BOARDS", desc: "Shine Bright, Stay Visible!", img: "./Image/printing-images/light-board.png" },
    { title: "STANDEE", desc: "Stand Tall, Get Noticed!", img: "./Image/printing-images/standee.png" },
    { title: "E-RICKSHAW PROMOTION", desc: "Advertising on the Move!", img: "./Image/printing-images/e-riksha.png" },
    { title: "AUDIO PROMOTION", desc: "Reach the Masses with Every Word!", img: "./Image/printing-images/audio.png" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
      }
    }, 3000); // every 3 seconds scrolls one card

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full bg-cover bg-center py-16 before:absolute before:inset-0 before:bg-black/60 before:content-['']"
      style={{ backgroundImage: "url('./Image/Background.jpg')" }}
    >
      <section className="relative z-10 w-full px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 drop-shadow-md">
            Top Printing & Branding
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
            Your One-Stop Shop for Premium Printing Solutions. High-Quality, Custom Designs Tailored
            to Your Needs — Business Essentials, Gifts & Branding Solutions.
          </p>

          <div
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
            ref={scrollRef}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="min-w-[220px] bg-white/10 backdrop-blur-md rounded-xl overflow-hidden text-white shadow-md group transition transform hover:scale-105"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-40 object-contain p-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="px-4 pb-5 text-center">
                  <h3 className="text-base font-bold mb-1">{card.title}</h3>
                  <p className="text-xs mb-3">{card.desc}</p>
                  <a
                    href={`https://wa.me/${phoneNumber}?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(card.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#000536] px-3 py-1 rounded-full hover:bg-[#000536] hover:text-white transition text-sm inline-block"
                  >
                    View More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopPrinting;
