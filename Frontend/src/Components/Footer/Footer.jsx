import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Diamond & Labour</h3>
              <p className="text-gray-400">
                Transforming diamond management and workforce optimization
                through innovative technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/inventory"
                    className="text-gray-400 hover:text-white"
                  >
                    Inventory Management
                  </Link>
                </li>
                <li>
                  <Link
                    
                    className="text-gray-400 hover:text-white"
                  >
                    Workforce Management
                  </Link>
                </li>
                <li>
                  <Link
                   
                    className="text-gray-400 hover:text-white"
                  >
                    Analytics & Reporting
                  </Link>
                </li>
                <li>
                  <Link
                    
                    className="text-gray-400 hover:text-white"
                  >
                    Security Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    
                    className="text-gray-400 hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link  className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Diamond & Labour Management. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
