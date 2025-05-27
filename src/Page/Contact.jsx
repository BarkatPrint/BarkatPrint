import React, { useState } from 'react';

export default function Services() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp message format
    const message = `New Enquiry from Website:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);

    // Redirect to WhatsApp
    window.location.href = `https://wa.me/917050266383?text=${encodedMessage}`;

    // Reset form
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="relative w-full h-auto min-h-screen text-white">
      {/* Contact Section */}
      <section className="relative w-full min-h-[90vh] bg-black text-white">
        <img
          src="./Image/Contact.jpg"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 min-h-[90vh]">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">CONTACT US</h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto mb-6 drop-shadow-md">
            Have any questions? Let's talk!
          </p>
        </div>
      </section>

      {/* Form Section */}
      <div
        className="relative w-full bg-cover bg-center py-16 px-4 min-h-[300px] md:min-h-[500px] lg:min-h-[700px]"
        style={{ backgroundImage: "url('./Image/Background.jpg')" }}
      >
        <div className="flex items-center justify-center px-4 py-12">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-black bg-opacity-50 p-8 rounded-xl shadow-lg text-white"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
                className="w-full px-4 py-2 border border-white bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Your Phone Number *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                required
                className="w-full px-4 py-2 border border-white bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Your Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
                className="w-full px-4 py-2 border border-white bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Your Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                required
                className="w-full px-4 py-2 border border-white bg-transparent rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-white text-blue-700 font-bold rounded-md hover:bg-blue-100 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
