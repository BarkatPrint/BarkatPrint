import React from 'react';

function TopPrinting() {
  const cards = [
    {
      title: "BUSINESS CARDS",
      desc: "Make Your First Impression Last.",
      img: "https://arprinthub.in/image/printing-images/Visiting.png",
    },
    {
      title: "WEDDING CARDS",
      desc: "Perfect Cards for Your Perfect Day.",
      img: "https://arprinthub.in/printing-images/wedding.png",
    },
    {
      title: "ID CARDS",
      desc: "Professional & Secure Identity Solutions.",
      img: "https://arprinthub.in/printing-images/id%20card.png",
    },
    {
      title: "CUP PRINTING",
      desc: "Sip in Style!",
      img: "https://arprinthub.in/printing-images/cup.png",
    },
    {
      title: "PAMPHLET",
      desc: "Spread the Word, Instantly",
      img: "https://arprinthub.in/printing-images/pamphlet.png",
    },
    {
      title: "BILL BOOK",
      desc: "Efficient & Organized Billing for Your Business.",
      img: "https://arprinthub.in/printing-images/bill%20book.png",
    },
    {
      title: "INVITATION CARDS",
      desc: "Invite in Style, Create Lasting Impressions.",
      img: "https://arprinthub.in/printing-images/invitation.png",
    },
    {
      title: "CAR POSTERS",
      desc: "Drive Your Message Forward!",
      img: "https://arprinthub.in/printing-images/car%20poster.png",
    },
    {
      title: "CALENDAR PRINT",
      desc: "Your Year, Your Brand",
      img: "https://arprinthub.in/printing-images/Calendar.png",
    },
    {
      title: "HOARDINGS",
      desc: "Maximum Reach, Maximum Visibility!",
      img: "https://arprinthub.in/printing-images/hoarding.png",
    },
    {
      title: "FLEX BANNERS",
      desc: "Big Impact, Bold Display",
      img: "https://arprinthub.in/printing-images/flex%20banner.png",
    },
    {
      title: "CASH MEMOS",
      desc: "Clear Records, Clear Profits!",
      img: "https://arprinthub.in/printing-images/cashmemo.png",
    },
    {
      title: "LETTER PADS",
      desc: "Every Note Matters!",
      img: "https://arprinthub.in/printing-images/letterpad.png",
    },
    {
      title: "LIGHT BOARDS",
      desc: "Shine Bright, Stay Visible!",
      img: "https://arprinthub.in/printing-images/light%20board.png",
    },
    {
      title: "STANDEE",
      desc: "Stand Tall, Get Noticed!",
      img: "https://arprinthub.in/printing-images/standee.png",
    },
    {
      title: "E-RICKSHAW PROMOTION",
      desc: "Advertising on the Move!",
      img: "https://arprinthub.in/printing-images/e-riksha.png",
    },
    {
      title: "AUDIO PROMOTION",
      desc: "Reach the Masses with Every Word!",
      img: "https://arprinthub.in/printing-images/audio.png",
    },
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center py-16 before:absolute before:inset-0 before:bg-black/60 before:content-['']"
      style={{ backgroundImage: "url('https://arprinthub.in/Background.jpg')" }}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden text-white shadow-md group transition transform hover:scale-105"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-40 sm:h-48 object-contain p-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="px-4 pb-5 text-center">
                  <h3 className="text-base sm:text-lg font-bold mb-1">{card.title}</h3>
                  <p className="text-xs sm:text-sm mb-3">{card.desc}</p>
                  <button className="bg-white text-[#000536] px-3 py-1 rounded-full hover:bg-[#000536] hover:text-white transition text-sm">
                    View More
                  </button>
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
