import React, { useState } from 'react'

const WelcomeCard = ({welcomeTitle}) => {
    const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div className="bg-gray-100 rounded-md p-3 sm:p-4 mb-4 relative">
      <div className="absolute top-3 right-3">
        <button 
          className="text-gray-400 hover:text-gray-600"
          onClick={() => setIsVisible(false)}
          aria-label="Close welcome message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full overflow-hidden flex items-center justify-center mx-auto sm:mx-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 text-center sm:text-left">{welcomeTitle}</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Welcome to your comprehensive diamond management dashboard! 
            This powerful tool enables you to monitor and manage your 
            diamond inventory seamlessly. Whether you're tracking raw materials 
            or certified diamonds, our dashboard provides real-time insights to 
            enhance efficiency and decision-making.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard