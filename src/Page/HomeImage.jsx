import React, { useState, useEffect } from 'react';








const images = [
  './Image/Banner1.jpg',
  './Image/Banner2.jpg',
  './Image/Banner3.jpg',
  './Image/Banner4.jpg',
  './Image/Banner5.jpg',
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Dot pe click karne par specific slide par jane ke liye
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    

    <div className="relative w-full h-full overflow-hidden bg-black flex flex-col items-center justify-center">
      
      <div
        className="w-full h-full transition-transform duration-700 ease-in-out flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

     

      {/* Dots Indicators */}
      <div className="flex space-x-3 absolute bottom-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors
              ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    
    
     
    </div>



  );
}
