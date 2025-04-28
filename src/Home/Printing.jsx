import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
    {
      title: "FLEX PRINTING",
      p: "Bigger Prints, Bigger Impact.",
      image: "./Image/Printing/Flex.png",
    },
    {
      title: "DIGITAL PRINTING",
      p: "Precision Prints, Perfect Results.",
      image: "./Image/Printing/Digital.png",
    },
    {
      title: "OFFSET PRINTING",
      p: "High-Volume Prints, Maximum Quality.",
      image: "./Image/Printing/Offset.png",
    },
    {
      title: "T-SHIRT PRINTING",
      p: "Wear Your Style, Drink Your Passion.",
      image: "./Image/Printing/t-shirt.png",
    },
    {
      title: "SCREEN PRINTING",
      p: "Bold Prints for Every Fabric.",
      image: "./Image/Printing/Screen.png",
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
        className="relative w-full bg-cover bg-center py-16 px-4 before:absolute before:inset-0 before:bg-black/50 before:content-['']"
        style={{ backgroundImage: "url('./Image/Background.jpg')" }}
      >

        {/* Hero Section */}
        <section className="relative w-full bg-black text-white">
          <img
            src="./Image/Printing/Banner.png"
            alt="Digital Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16 min-h-[90vh]">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 drop-shadow-lg">
              PRINTING SERVICES
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-4 md:mb-6 drop-shadow-md">
              Complete Printing Solutions – From Business Essentials to Custom Creations,
              We Print It All with Precision & Quality!
            </p>
            <p className="font-semibold text-xs sm:text-sm md:text-base max-w-xs sm:max-w-xl md:max-w-4xl mx-auto drop-shadow-sm leading-relaxed">
              Offset & Digital Printing | Flex & Banner Printing | T-Shirt & Mug Printing | Screen & UV Printing <br />
              Business & Wedding Cards | Signage & Branding Solutions | And Much More!
            </p>
          </div>
        </section>



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






        {/* Top Printing & Branding Card */}
        <section className="w-full px-4 text-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
      Top Printing & Branding
    </h2>
    <p className="text-sm sm:text-base md:text-lg font-medium max-w-3xl mx-auto mb-10 drop-shadow-sm leading-relaxed">
      Your One-Stop Shop for Premium Printing Solutions, Providing High-Quality,
      Custom Designs Tailored to Your Unique Needs. From Business Essentials to Personalized
      Gifts and Branding Solutions.
    </p>

    {/* Card Row */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-center relative">

      {/* Card 1 - Left */}
<div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">
  <img
    src="./Image/Printing/Visiting.png"
    alt="Wedding Cards"
    className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-5 text-center">
    <h3 className="text-xl font-bold mb-2">BUSINESS CARDS</h3>
    <p className="text-sm mb-4">Make Your First Impression Last.</p>
    <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>

{/* Card 2 - Center */}
<div className="bg-white/10 rounded-2xl overflow-hidden text-white shadow-md w-full max-w-md mt-6 scale-105 group">
<img
  src="/BarkatPrint/Image/Printing/Wedding.png"
  alt="Wedding Cards"
  className="w-full h-72 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
/>
  <div className="p-6 text-center">
    <h3 className="text-2xl font-bold mb-2">WEDDING CARDS</h3>
    <p className="text-base mb-4">Perfect Cards for Your Perfect Day.</p>
    <button className="bg-white text-[#000536] px-5 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>

{/* Card 3 - Right */}
<div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">
  <img
    src="./Image/Printing/id card.png"
    alt="ID Cards"
    className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-5 text-center">
    <h3 className="text-xl font-bold mb-2">ID CARDS</h3>
    <p className="text-sm mb-4">Professional & Secure Identity Solutions.</p>
    <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>


   {/* Card 4 - Left */}
<div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">
  <img
    src="./Image/Printing/cup.png"
    alt="ID CARDS"
    className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-5 text-center">
    <h3 className="text-xl font-bold mb-2">CUP PRINTING</h3>
    <p className="text-sm mb-4">
    Sip in Style!
    </p>
    <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>

{/* Card 5 - Center */}
<div className="bg-white/10 rounded-2xl overflow-hidden text-white shadow-md w-full max-w-md mt-6 scale-105 group">
  <img
    src="./Image/Printing/pamphlet.png"
    alt="Pamphlet"
    className="w-full h-72 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-6 text-center">
    <h3 className="text-2xl font-bold mb-2">PAMPHLET</h3>
    <p className="text-base mb-4">
      Spread the Word, Instantly
    </p>
    <button className="bg-white text-[#000536] px-5 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>

{/* Card 6 - Right */}
<div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">
  <img
    src="./Image/Printing/bill book.png"
    alt="Bill Book"
    className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-5 text-center">
    <h3 className="text-xl font-bold mb-2">BILL BOOK</h3>
    <p className="text-sm mb-4">
      Efficient & Organized Billing for Your Business.
    </p>
    <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>

    {/* Card 7 - Left */}
<div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">
  <img
    src="./Image/Printing/invitation.png"
    alt="ID CARDS"
    className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-5 text-center">
    <h3 className="text-xl font-bold mb-2">INVITATION CARDS</h3>
    <p className="text-sm mb-4">
    Invite in Style, Create Lasting Impressions.
    </p>
    <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>

{/* Card 8 - Center */}
<div className="bg-white/10 rounded-2xl overflow-hidden text-white shadow-md w-full max-w-md mt-6 scale-105 group">
  <img
    src="./Image/Printing/car poster.png"
    alt="PAMPHLET"
    className="w-full h-72 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-6 text-center">
    <h3 className="text-2xl font-bold mb-2">CAR POSTERS</h3>
    <p className="text-base mb-4">
    Drive Your Message Forward!
    </p>
    <button className="bg-white text-[#000536] px-5 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>

{/* Card 9 - Right */}
<div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">
  <img
    src="./Image/Printing/calendar.png"
    alt="BILL BOOK"
    className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-5 text-center">
    <h3 className="text-xl font-bold mb-2">CALENDAR PRINT</h3>
    <p className="text-sm mb-4">
    Your Year, Your Brand
    </p>
    <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>


   {/* Card 10 - Left */}
   <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">

   <img
  src="/BarkatPrint/Image/Printing/hoarding.png"
  alt="ID CARDS"
  className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
/>
  <div className="p-5 text-center">
    <h3 className="text-xl font-bold mb-2">HOARDINGS</h3>
    <p className="text-sm mb-4">
    Maximum Reach, Maximum Visibility!
    </p>
    <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>

{/* Card 11 - Center */}
<div className="bg-white/10 rounded-2xl overflow-hidden text-white shadow-md w-full max-w-md mt-6 scale-105 group">
  <img
    src="./Image/Printing/flex banner.png"
    alt="PAMPHLET"
    className="w-full h-72 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-6 text-center">
    <h3 className="text-2xl font-bold mb-2">FLEX BANNERS</h3>
    <p className="text-base mb-4">
    Big Impact, Bold Display
    </p>
    <button className="bg-white text-[#000536] px-5 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>

{/* Card 12 - Right */}
<div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">
  <img
    src="./Image/Printing/cashmemo.png"
    alt="BILL BOOK"
    className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-5 text-center">
    <h3 className="text-xl font-bold mb-2">CASH MEMOS</h3>
    <p className="text-sm mb-4">
    Clear Records, Clear Profits!
    </p>
    <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>


  {/* Card 13 - Left */}
  <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">
  <img
    src="./Image/Printing/letterpad.png"
    alt="ID CARDS"
    className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-5 text-center">
    <h3 className="text-xl font-bold mb-2">LETTER PADS</h3>
    <p className="text-sm mb-4">
    Every Note Matters!
    </p>
    <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>

{/* Card 14 - Center */}
<div className="bg-white/10 rounded-2xl overflow-hidden text-white shadow-md w-full max-w-md mt-6 scale-105 group">
  <img
    src="./Image/Printing/light board.png"
    alt="PAMPHLET"
    className="w-full h-72 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-6 text-center">
    <h3 className="text-2xl font-bold mb-2">LIGHT BOARDS</h3>
    <p className="text-base mb-4">
    Shine Bright, Stay Visible!
    </p>
    <button className="bg-white text-[#000536] px-5 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>

{/* Card 15 - Right */}
<div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">
  <img
    src="./Image/Printing/standee.png"
    alt="BILL BOOK"
    className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-5 text-center">
    <h3 className="text-xl font-bold mb-2">STANDEE</h3>
    <p className="text-sm mb-4">
    Stand Tall, Get Noticed!
    </p>
    <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>


 {/* Card 16 - Left */}
 <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">
  <img
    src="./Image/Printing/e-riksha.png"
    alt="ID CARDS"
    className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-5 text-center">
    <h3 className="text-xl font-bold mb-2">E-RICKSHAW PROMOTION</h3>
    <p className="text-sm mb-4">
    Advertising on the Move!
    </p>
    <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>

{/* Card 17 - Center */}
<div className="bg-white/10 rounded-2xl overflow-hidden text-white shadow-md w-full max-w-md mt-6 scale-105 group">
  <img
    src="./Image/Printing/audio.png"
    alt="PAMPHLET"
    className="w-full h-72 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-6 text-center">
    <h3 className="text-2xl font-bold mb-2">AUDIO ADVERTISEMENTS</h3>
    <p className="text-base mb-4">
    Let Your Brand Speak!
    </p>
    <button className="bg-white text-[#000536] px-5 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>

{/* Card 18 - Right */}
<div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">
  <img
    src="./Image/Printing/jhola.png"
    alt="BILL BOOK"
    className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <div className="p-5 text-center">
    <h3 className="text-xl font-bold mb-2">JHOLA PRINT</h3>
    <p className="text-sm mb-4">
    Eco-Friendly Bags, Branded Your Way!
    </p>
    <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
      View More
    </button>
  </div>
</div>


    </div>
  </div>
</section>


<section className="w-full px-4 pt-10 text-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
      Signage & Branding Solutions
    </h2>
    <p className="text-sm sm:text-base md:text-lg font-medium max-w-3xl mx-auto mb-10 drop-shadow-sm leading-relaxed">
      Enhance Your Brand with Eye-Catching, Durable, and Professional Signage – From Illuminated 
      LED Letters to Sleek Acrylic Boards, We Ensure Your Business Stands Out 24/7.
    </p>
  </div>

  {/* Card Container */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
    
    {/* Card 1 */}
    <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">
      <img
        src="./Image/Printing/ACRYLIC.png"
        alt="E-Rickshaw Promotion"
        className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold mb-2">ACRYLIC SIGNAGE</h3>
        <p className="text-sm mb-4"> Modern, Sleek & Professional Signage. </p>
        <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
          View More
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white/10 rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group scale-105">
      <img
        src="./Image/Printing/led.png"
        alt="Audio Advertisements"
        className="w-full h-72 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold mb-2">LED LETTERS</h3>
        <p className="text-base mb-4">Illuminate Your Brand, Shine Bright.</p>
        <button className="bg-white text-[#000536] px-5 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
          View More
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-white shadow-md w-full max-w-sm group">
      <img
        src="./Image/Printing/glow.png"
        alt="Jhola Print"
        className="w-full h-64 object-contain p-5 transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold mb-2">GLOW SIGN BOARDS</h3>
        <p className="text-sm mb-4">Light Up Your Business, Even at Night.</p>
        <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
          View More
        </button>
      </div>
    </div>







    
  </div>
</section>










      </div>
    </>
  );
}
