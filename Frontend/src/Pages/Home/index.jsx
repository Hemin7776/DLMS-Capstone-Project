import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";
import HomeCard from "../../Components/HomeCard/HomeCard";
import DiamondHome from "../../assets/diamondHome.jpg";
import blackdiamond from "../../assets/blackDiamond.png";
import reddiamond from "../../assets/redDiamond.png";
import yellowdiamond from "../../assets/yellowDiamond.png";
import greendiamond from "../../assets/greenDiamond.png";
import men from "../../assets/men.jpg";
import men2 from "../../assets/men-2.jpg";
import men3 from "../../assets/men-3.jpg";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  // Animation visibility states
  const [isVisible, setIsVisible] = useState({
    stats: false,
    solutions: false,
    testimonials: false,
    cta: false
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const observers = {};
    const elements = {
      stats: document.getElementById("stats-section"),
      solutions: document.getElementById("solutions-section"),
      testimonials: document.getElementById("testimonials-section"),
      cta: document.getElementById("cta-section")
    };

    // Create observers for each section
    Object.keys(elements).forEach(key => {
      observers[key] = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(prev => ({ ...prev, [key]: true }));
          }
        },
        observerOptions
      );

      if (elements[key]) observers[key].observe(elements[key]);
    });

    // Cleanup observers
    return () => {
      Object.keys(elements).forEach(key => {
        if (elements[key]) observers[key].unobserve(elements[key]);
      });
    };
  }, []);

  // Animation variants
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

  const statsAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6 } 
    }
  };

  // Feature card data
  const featureCards = [
    {
      icon: blackdiamond,
      title: "Diamond & Labour Management",
      description:
        "Revolutionize your operations with our comprehensive management system designed for precision and efficiency.",
      buttonText: "Get Started",
      buttonLink: "/get-started",
    },
    {
      icon: reddiamond,
      title: "Our Mission",
      description:
        "We're dedicated to transforming diamond workflow and workforce management through innovative technology solutions.",
      buttonText: "Learn More",
      buttonLink: "/mission",
    },
    {
      icon: yellowdiamond,
      title: "Advanced Tools",
      description:
        "Access cutting-edge tools that provide seamless inventory tracking and labor optimization for maximum productivity.",
      buttonText: "Explore Tools",
      buttonLink: "/tools",
    },
    {
      icon: greendiamond,
      title: "Connect With Us",
      description:
        "Start your journey toward operational brilliance with personalized guidance from our expert team.",
      buttonText: "Contact Us",
      buttonLink: "/contact",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative border border-black-600 min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${DiamondHome})`,
            backgroundSize: "cover",
            filter: "blur(1px)",
          }}
        ></div>
        <div className="absolute bg-black bg-opacity-50"></div>

        {/* Hero Content with Animation */}
        <motion.div 
          className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center min-h-screen text-center text-white"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-8 tracking-tight leading-tight"
            variants={fadeInUp}
          >
            Where Precision{" "}
            <span className="text-[var(--primary-color)]">Meets</span> People
          </motion.h1>

          <motion.div 
            className="max-w-3xl mb-10"
            variants={fadeInUp}
          >
            <p className="text-base sm:text-lg md:text-xl font-medium mb-6 leading-relaxed">
              Welcome to Diamond & Labour Management System, where innovation
              meets precision to streamline your operations and elevate your
              business efficiency.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              Experience the brilliance of efficiency. Transform your operations
              today!
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            variants={fadeInUp}
          >
            <Link
              to="/learn-more"
              className="bg-white font-bold text-gray-800 px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-gray-200 transition duration-300 text-base sm:text-lg shadow-lg transform hover:scale-105"
            >
              Learn More
            </Link>
            <Link
              to="/features"
              className="bg-[var(--primary-color)] text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-opacity-90 transition duration-300 text-base sm:text-lg shadow-lg transform hover:scale-105"
            >
              Explore Features
            </Link>
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
        </motion.div>
      </div>

      {/* Stats Section with Animation */}
      <div id="stats-section" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate={isVisible.stats ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.div className="text-center" variants={statsAnimation}>
              <p className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                500+
              </p>
              <p className="text-gray-600 font-medium">Clients Worldwide</p>
            </motion.div>
            <motion.div className="text-center" variants={statsAnimation}>
              <p className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                10K+
              </p>
              <p className="text-gray-600 font-medium">Diamonds Tracked</p>
            </motion.div>
            <motion.div className="text-center" variants={statsAnimation}>
              <p className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                98%
              </p>
              <p className="text-gray-600 font-medium">
                Efficiency Improvement
              </p>
            </motion.div>
            <motion.div className="text-center" variants={statsAnimation}>
              <p className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                24/7
              </p>
              <p className="text-gray-600 font-medium">Customer Support</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Solutions Section with Animation */}
      <div id="solutions-section" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.solutions ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Premium Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover how our integrated solutions can transform your diamond
              and workforce management operations.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={isVisible.solutions ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {featureCards.map((card, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="transform hover:scale-105 transition-all duration-300"
              >
                <HomeCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  buttonText={card.buttonText}
                  buttonLink={card.buttonLink}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonial Section with Animation */}
      <div id="testimonials-section" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.testimonials ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here's what our clients have to say about our diamond management
              solutions.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={isVisible.testimonials ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <img className="h-12 w-12 rounded-full bg-gray-300" src={men} alt="Sarah Johnson" />
                <div className="ml-4">
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600">CEO, Diamond Corp</p>
                </div>
              </div>
              <p className="text-gray-700">
                "This system has completely transformed how we manage our
                inventory and workforce. The efficiency gains have been
                remarkable."
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full bg-gray-300"
                  src={men2}
                  alt="Michael Chen"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-600">
                    Operations Director, Gemstone Inc.
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                "The precision and reliability of this management system have
                helped us reduce errors by over 90%. I can't imagine running our
                business without it."
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full bg-gray-300"
                  src={men3}
                  alt="David Rodriguez"
                />
                <div className="ml-4">
                  <h4 className="font-bold">David Rodriguez</h4>
                  <p className="text-gray-600">
                    Supply Chain Manager, Luxury Jewels
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                "From day one, the implementation was smooth and the results
                immediate. Our team adapted quickly and productivity soared."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section with Animation */}
      <div id="cta-section" className="bg-[var(--primary-color)] py-16">
        <motion.div 
          className="container mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.cta ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have revolutionized their diamond
            and workforce management with our cutting-edge solutions.
          </p>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isVisible.cta ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-white text-[var(--primary-color)] font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Schedule a Demo
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;