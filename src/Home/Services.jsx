import React from 'react';


export default function Services() {
  return (
    
    <div className="relative w-full h-auto min-h-screen text-white">
      
      {/* Top Heading Section */}
      <section className="w-full text-center py-10 px-4 bg-[#000536] ">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-md">
          📣 अपने बिज़नेस को डिजिटल पहचान दिलाइए!
        </h2>

        <div className="text-sm md:text-base max-w-2xl mx-auto">
          <p className="mb-2">
            अगर आप अपने बिज़नेस का प्रमोशन <strong>वेबसाइट</strong> या <strong>सोशल मीडिया प्लेटफॉर्म्स</strong> पर करवाना चाहते हैं,
            या <strong>Facebook / Instagram / Google Ads</strong> के ज़रिए ज्यादा ग्राहक तक पहुँचना चाहते हैं —
          </p>
          <p className="text-lg font-semibold text-white mt-2">
            तो आज ही संपर्क करें: <span className="font-bold text-xl">7050266383</span>
          </p>
        </div>
      </section>


      


{/* Digital Services Section with Background Image */}
<section className="relative w-full min-h-[90vh] bg-black text-white">
  {/* Background Image */}
  <img
    src="/Image/Digital.jpg"
    alt="Digital Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

  {/* Content */}
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



{/* Cards Section with Background */}
<div className="relative w-full bg-cover bg-center py-16 px-4" style={{ backgroundImage: "url('/Image/Background.jpg')" }}>
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
    {/* Card 1: Logo Design */}
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden text-white shadow-md">
      <img
        src="/Image/Digital/Logo.png"
        alt="Logo Design"
        className="w-full h-64 object-contain p-5"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">LOGO DESIGN</h3>
        <p className="text-sm mb-4">Your Brand, Your Identity!</p>
        <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
          View More
        </button>
      </div>
    </div>

    {/* Card 2: Social Media Design */}
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden text-white shadow-md">
      <img
        src="/Image/Digital/Social.png"
        alt="Social Media"
        className="w-full h-64 object-contain p-5"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">SOCIAL MEDIA DESIGN</h3>
        <p className="text-sm mb-4">Make Your Online Presence Shine!</p>
        <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
          View More
        </button>
      </div>
    </div>

    {/* Card 3: Graphic Design & Branding */}
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden text-white shadow-md">
      <img
        src="/Image/Digital/graphic.png"
        alt="Graphic Design"
        className="w-full h-64 object-contain p-5"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">GRAPHIC DESIGN & BRANDING</h3>
        <p className="text-sm mb-4">
          Eye-catching designs that make an impact<br />
          Enhance your brand with creative visuals.
        </p>
        <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
          View More
        </button>
      </div>
    </div>

     {/* Card 4: Video Design */}
     <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden text-white shadow-md">
      <img
        src="/Image/Digital/Video.png"
        alt="Logo Design"
        className="w-full h-64 object-contain p-5"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2"> VIDEO PRODUCTION 
        & 3D ANIMATION</h3>
        <p className="text-sm mb-4">High-quality edits with stunning 3D animations
        Bring your vision to life with seamless storytelling.</p>
        <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
          View More
        </button>
      </div>
    </div>

    {/* Card 5: WEB & APP DEVELOPMENT */}
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden text-white shadow-md">
      <img
        src="/Image/Digital/Web.png"
        alt="Social Media"
        className="w-full h-64 object-contain p-5"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">WEB & APP DEVELOPMENT</h3>
        <p className="text-sm mb-4">Get a powerful website & app that grows your business
        Custom-built for performance, security, and success.</p>
        <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
          View More
        </button>
      </div>
    </div>

    {/* Card 6: SOCIAL MEDIA & DIGITAL MARKETING */}
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden text-white shadow-md">
      <img
        src="/Image/Digital/Digital.png"
        alt="Graphic Design"
        className="w-full h-64 object-contain p-5"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">SOCIAL MEDIA & DIGITAL MARKETING</h3>
        <p className="text-sm mb-4">
        Boost your brand with powerful campaigns
        Reach the right audience and maximize engagement.
        </p>
        <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
          View More
        </button>
      </div>
    </div>
     {/* Card 7: PRODUCT PHOTOGRAPHY */}
     <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden text-white shadow-md">
      <img
        src="/Image/Digital/Product.png"
        alt="Social Media"
        className="w-full h-64 object-contain p-5"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">PRODUCT PHOTOGRAPHY</h3>
        <p className="text-sm mb-4">Showcase your products with stunning, 
        high-quality visuals that drive sales.</p>
        <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
          View More
        </button>
      </div>
    </div>

    {/* Card 8: E-COMMERCE SOLUTIONS */}
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden text-white shadow-md">
      <img
        src="/Image/Digital/E-Commerce.png"
        alt="Graphic Design"
        className="w-full h-64 object-contain p-5"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">E-COMMERCE SOLUTIONS</h3>
        <p className="text-sm mb-4">
        Eye-catching designs that make an impact
Enhance your brand with creative visuals.
        </p>
        <button className="bg-white text-[#000536] px-4 py-2 rounded-full hover:bg-[#000536] hover:text-white transition">
          View More
        </button>
      </div>
    </div>
 
  </div>

  
  


  
</div>











  


    </div>
   
 



  );
}
