import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import featuresss from "../../assets/featuresss.jpg";

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* Background Image Section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${featuresss})`,
          }}
        ></div>

        <div className="absolute inset-0  bg-opacity-50"></div>

        {/* Contact Form Section */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Get in Touch with Us
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-medium text-white max-w-2xl mb-6">
            Have questions or need assistance? Contact us today and let's connect!
          </p>

          {/* Contact Form */}
          <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--primary-color)] text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
