import React, { useEffect, useState } from 'react';

const StatCard = ({ title, description, percentage = 0, color, assignments, onClick }) => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
      // Animate the progress on mount
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, 300);
      
      return () => clearTimeout(timer);
    }, [percentage]);
    
    const getColorClass = () => {
      switch (color) {
        case 'blue': return { bg: 'bg-blue-500', text: 'text-blue-700', border: 'border-blue-100' };
        case 'purple': return { bg: 'bg-purple-500', text: 'text-purple-700', border: 'border-purple-100' };
        case 'orange': return { bg: 'bg-orange-500', text: 'text-orange-700', border: 'border-orange-100' };
        default: return { bg: 'bg-gray-500', text: 'text-gray-700', border: 'border-gray-100' };
      }
    };
    
    const colorClasses = getColorClass();
  
    return (
      <div 
        className="bg-white rounded-md p-3 sm:p-4 mb-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={onClick}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-sm sm:text-base">{title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">{description}</p>
          </div>
          <div className="flex items-center h-10 sm:h-12 w-10 sm:w-12 rounded-full border-4 border-gray-100 justify-center relative">
            <div 
              className={`absolute inset-0 rounded-full ${colorClasses.border}`}
              style={{
                clipPath: `circle(${50 * (progress / 100)}% at 50% 50%)`
              }}
            ></div>
            <span className="text-sm sm:text-lg font-bold relative z-10">{progress}%</span>
          </div>
        </div>
        <div className="mt-3 sm:mt-4 flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className={`w-4 h-4 rounded-full -ml-1 border-2 border-white ${colorClasses.bg}`}></div>
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-500">{assignments} assignments</span>
        </div>
      </div>
    );
  };

export default StatCard;