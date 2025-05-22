import React from 'react'

function BrandingSolutions() {
  return (
    <div
        className="relative w-full bg-cover bg-center py-16 
          before:absolute before:inset-0 before:bg-black/50 before:content-['']"
        style={{ backgroundImage: "url('./Image/Background.jpg')" }}
      >
        
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
  )
}

export default BrandingSolutions