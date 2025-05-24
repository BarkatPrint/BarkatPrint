import React, { useState, useEffect } from 'react';
import All from './All';
import SplashScreen from './SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Splash दिखाने का duration अब 1.5 सेकंड है
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="relative">
      <All />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917050266383"
        className="fixed bottom-5 right-5 z-50"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
          className="w-14 h-14 hover:scale-110 transition-transform duration-300 shadow-lg rounded-full"
        />
      </a>
    </div>
  );
}

export default App;
