import React from 'react';
import Premium from './Premium';
import SelectedPrintingPage from './SelectedPrintingPage';

import TopPrinting from './TopPrinting';
import Signage from './Signage';

function PrintingServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full text-white bg-black">
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/7] lg:aspect-[16/6] overflow-hidden">
          <img
            src="./Image/Print.jpg"
            alt="Printing Background"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Centered Text */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 py-6">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-3 leading-tight drop-shadow-lg">
              PRINTING SERVICES
            </h1>
            <p className="text-xs sm:text-base md:text-lg max-w-2xl mb-3 drop-shadow-md">
              Complete Printing Solutions – From Business Essentials to Custom Creations,
              We Print It All with Precision & Quality!
            </p>
            <p className="text-[10px] sm:text-sm md:text-base font-semibold max-w-3xl drop-shadow-sm">
              Offset & Digital Printing | Flex & Banner Printing | T-Shirt & Mug Printing | Screen & UV Printing <br />
              Business & Wedding Cards | Signage & Branding Solutions | And Much More!
            </p>
          </div>
        </div>
      </section>

      {/* Additional Components */}
      <Premium />
      <SelectedPrintingPage />
      <TopPrinting />
      <Signage />
    </>
  );
}

export default PrintingServices;
