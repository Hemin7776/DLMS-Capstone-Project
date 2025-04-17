import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Diamondbg from "../../assets/diamondbg.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        {/* Hero Section with Background Image */}
        <div
          className="relative h-96 flex flex-col items-center justify-center text-center px-4 bg-gray-800 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${Diamondbg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="relative z-10">
            <h1 className="text-5xl font-bold  mb-2">About Us</h1>
            <p className=" text-lg mb-6">
              Discover our journey, values, and the people behind our success
            </p>
            <Link
              to="/about/more"
              className="inline-block px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
            >
              See More
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-white px-6 py-12 bg-[var(--primary-color)]">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl font-semibold mb-3">
              Discover our journey, values, and the people behind our success
            </h2>
            <div className="w-32 h-1 bg-white mx-auto"></div>
          </div>

          {/* Story Section */}
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between mb-20">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-xl font-bold mb-4">OUR STORY</h3>
              <p className="mb-4">
                At Diamond & Labour Management, we started with a vision to
                revolutionize how the diamond industry operates. From humble
                beginnings to a trusted leader in innovation, we have always
                prioritized excellence and precision.
              </p>
              <Link
                to="/about/story"
                className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              >
                View More
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img
                  src={Diamondbg}
                  alt="Diamond visualization"
                  className="w-64 h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <h3 className="text-xl font-bold mb-4">OUR MISSION</h3>
              <p className="mb-4">
                "Our mission is to empower businesses in the diamond industry
                with cutting-edge solutions for inventory, labor management, and
                operational efficiency."
              </p>
              <Link
                to="/about/mission"
                className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              >
                View More
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img
                  src={Diamondbg}
                  alt="Diamond industry illustration"
                  className="w-64 h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
