import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import HomeCard from "../../Components/HomeCard/HomeCard";
import DiamondHome from '../../assets/diamondHome.jpg';
import blackdiamond from '../../assets/blackDiamond.png'
import reddiamond from '../../assets/redDiamond.png'
import yellowdiamond from '../../assets/yellowDiamond.png'
import greendiamond from '../../assets/greenDiamond.png'

const Home = () => {
  // Feature card data
  const featureCards = [
    {
      icon: blackdiamond,
      title:
        "Welcome to the future of precision and efficiency with Diamond & Labour Management",
      description: "",
      buttonText: "Get Started",
      buttonLink: "/get-started",
    },
    {
      icon: reddiamond,
      title:
        "Discover our mission to revolutionize diamond workflow and workforce management.",
      description: "",
      buttonText: "Get Started",
      buttonLink: "/mission",
    },
    {
      icon: yellowdiamond,
      title:
        "Explore cutting-edge tools for seamless inventory and labor optimization",
      description: "",
      buttonText: "Get Started",
      buttonLink: "/tools",
    },
    {
      icon: greendiamond,
      title:
        "Get in touch with us to start your journey toward operational brilliance.",
      description: "",
      buttonText: "Get Started",
      buttonLink: "/contact",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${DiamondHome})`,
          }}
        ></div>

        <div className="absolute inset-0  bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 ">
            Where Precision Meets People
          </h1>

          <div className="max-w-2xl mb-6 ">
            <p className="text-sm sm:text-base md:text-lg font-medium">
              Welcome to Diamond & Labour Management System, where innovation
              meets precision to streamline your operations and elevate your
              business efficiency.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-medium mt-4">
              Experience the brilliance of efficiency. Transform your operations today!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              to="/learn-more"
              className="bg-white font-bold text-gray-800 px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-200 transition duration-300 text-sm sm:text-base"
            >
              Learn More
            </Link>
            <Link
              to="/features"
              className="bg-[var(--primary-color)] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-700 transition duration-300 text-sm sm:text-base"
            >
              Features
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="bg-gray-900 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featureCards.map((card, index) => (
              <HomeCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
