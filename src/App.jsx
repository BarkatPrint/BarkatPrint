import Header from './Home/Header';
import Home from './Home/Home';
import Services from './Home/Services';
import Printing from './Home/Printing';
import Contact from './Home/Contact';
import Footer from './Home/Footer';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Printing />
      <Contact />
      <Footer />

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/917050266383"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        className="fixed bottom-4 right-4 z-50"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
          className="w-12 h-12 hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
  );
}

export default App;
