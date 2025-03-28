import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import featuresss from "../../assets/featuresss.jpg";
// Assuming these icons are imported from a library like lucide-react or react-icons
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Clock,
} from "lucide-react";
import Footer from "../../Components/Footer/Footer";
import { LiaLinkedin } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* Background Image Section with Gradient Overlay */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${featuresss})`,
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

        {/* Contact Content Section */}
        <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen">
          {/* Heading Section with Animation */}
          <div className="text-center mb-16 max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-10 rounded-full backdrop-blur-sm">
              <p className="text-sm font-bold tracking-widest text-blue-300">
                CONTACT US
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-white mb-6">
              Get in Touch with Our Experts
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              We're here to answer your questions and provide personalized
              solutions for your diamond business needs.
            </p>
          </div>

          {/* Contact Form and Info Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Contact Information */}
            <div className="lg:col-span-1 backdrop-blur-md bg-black bg-opacity-50 p-8 rounded-2xl border border-gray-700 text-white h-full">
              <h3 className="text-2xl font-serif mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-300 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-300 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-300">info@diamondmanagement.com</p>
                    <p className="text-gray-300">
                      support@diamondmanagement.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-300 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Office Location</h4>
                    <p className="text-gray-300">
                      Diamond Tower, 123 Gem Street
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-300 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-10">
                <h4 className="font-bold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-black bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <LiaLinkedin size={40} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-black bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
                  >
                    <span className="sr-only">Twitter</span>
                    <BsTwitter color="white" size={30} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-black bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram size={30} color="white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 backdrop-blur-md bg-white bg-opacity-95 p-8 sm:p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-serif mb-8 text-gray-800">
                Send Us a Message
              </h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={5}
                    placeholder="Please tell us how we can help you..."
                  ></textarea>
                </div>

                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mr-2 h-4 w-4"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to being contacted regarding my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center font-bold text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Additional section - FAQs or Map */}
          <div className="mt-16 w-full backdrop-blur-md bg-black bg-opacity-40 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-serif mb-6 text-white text-center">
              Visit Our Office
            </h3>
            {/* This would be a map embed in a real implementation */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28950.470949100647!2d-75.6972!3d45.4215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1742396246515!5m2!1sen!2s"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
