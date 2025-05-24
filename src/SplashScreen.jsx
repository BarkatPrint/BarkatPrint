import React, { useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3 seconds splash
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-[#000673] to-[#0f1b4c]">
      <img
        src="/logo512.png"
        alt="AR Print Hub"
        className="w-40 h-40 animate-zoom-in"
      />
    </div>
  );
};

export default SplashScreen;
