import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Diamondbg from "../../assets/diamondbg.jpg";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  const [isVisible, setIsVisible] = useState({
    story: false,
    mission: false
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const storyObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(prev => ({ ...prev, story: true }));
        }
      },
      observerOptions
    );

    const missionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(prev => ({ ...prev, mission: true }));
        }
      },
      observerOptions
    );

    const storyElement = document.getElementById("story-section");
    const missionElement = document.getElementById("mission-section");

    if (storyElement) storyObserver.observe(storyElement);
    if (missionElement) missionObserver.observe(missionElement);

    return () => {
      if (storyElement) storyObserver.unobserve(storyElement);
      if (missionElement) missionObserver.unobserve(missionElement);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <div
          className="relative h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Diamondbg})`,
          }}
        >
          <motion.div 
            className="relative z-10 max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h1 
              className="text-7xl font-bold text-white mb-6"
              variants={fadeInUp}
            >
              About Diamond & Labour
            </motion.h1>
            <motion.p 
              className="text-xl text-white mb-10 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Revolutionizing the diamond industry with cutting-edge management solutions 
              since our inception. Excellence, precision, and innovation define our journey.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                to="/about/more"
                className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                Discover Our Story
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="absolute bottom-10 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="animate-bounce">
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Company Overview */}
        <div className="text-white px-6 py-20 bg-[var(--primary-color)]">
          <motion.div 
            className="max-w-5xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Company</h2>
            <div className="w-32 h-1 bg-white mx-auto mb-10"></div>
            <p className="text-xl mb-10">
              Diamond & Labour Management is a premier provider of specialized solutions for 
              the diamond industry. We combine technological innovation with industry expertise 
              to deliver unparalleled management systems that drive efficiency and growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovative Solutions</h3>
                <p>Cutting-edge technology tailored for the diamond industry's unique needs.</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p>Industry veterans with decades of combined experience in diamond management.</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Trusted Partner</h3>
                <p>Proven track record of reliability and excellence in service delivery.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div 
          id="story-section"
          className="relative text-white px-6 py-24 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Diamondbg})`,
          }}
        >
          <motion.div 
            className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between"
            initial="hidden"
            animate={isVisible.story ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.div 
              className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold mb-4 relative">
                OUR STORY
                <span className="absolute bottom-0 left-0 w-20 h-1 bg-white"></span>
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                Diamond & Labour Management began with a vision to transform the diamond industry's 
                operational landscape. Founded by pioneers with deep industry expertise, we identified 
                critical challenges facing diamond businesses and developed innovative solutions to address them.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                From our earliest days, we've been committed to excellence and precision - values that 
                mirror the very industry we serve. Today, we're proud to be trusted by leading diamond 
                businesses worldwide, providing them with tools to optimize their operations and maximize value.
              </p>
              <Link
                to="/about/story"
                className="inline-block px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Journey
              </Link>
            </motion.div>
            <motion.div 
              className="md:w-1/2 flex justify-center"
              variants={fadeIn}
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gray-800 rounded-lg absolute -top-4 -left-4"></div>
                <img
                  src={Diamondbg}
                  alt="Diamond visualization"
                  className="w-80 h-80 object-cover rounded-lg shadow-xl relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-lg"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission Section with Interactive Elements */}
        <div 
          id="mission-section"
          className="text-white px-6 py-24 bg-[var(--primary-color)]"
        >
          <motion.div 
            className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between"
            initial="hidden"
            animate={isVisible.mission ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.div 
              className="md:w-1/2 mb-12 md:mb-0 md:pl-12"
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold mb-4 relative">
                OUR MISSION
                <span className="absolute bottom-0 left-0 w-20 h-1 bg-white"></span>
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                "Our mission is to empower businesses in the diamond industry with cutting-edge solutions 
                for inventory, labor management, and operational efficiency. We strive to be the catalyst 
                that transforms traditional practices into streamlined, data-driven processes."
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                We believe in creating value through innovation, reliability, and exceptional service. Our 
                goal is to be the trusted partner that helps diamond businesses navigate challenges and 
                capitalize on opportunities in an ever-evolving marketplace.
              </p>
              <Link
                to="/about/mission"
                className="inline-block px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Our Vision
              </Link>
            </motion.div>
            <motion.div 
              className="md:w-1/2 flex justify-center"
              variants={fadeIn}
            >
              <div className="relative perspective-1000">
                <div className="w-80 h-80 rounded-lg bg-gray-800 absolute -top-4 -right-4"></div>
                <img
                  src={Diamondbg}
                  alt="Diamond industry illustration"
                  className="w-80 h-80 object-cover rounded-lg shadow-xl relative z-10 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white rounded-lg"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="text-white px-6 py-20 bg-gray-900">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-10">
              Join the leading diamond companies that trust Diamond & Labour Management for their operational needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default About;