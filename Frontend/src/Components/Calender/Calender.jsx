import React, { useState } from 'react';

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState('December');
    const [currentYear, setCurrentYear] = useState(2024);
    const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    // Handle month navigation
    const goToPreviousMonth = () => {
      if (currentMonth === 'January') {
        setCurrentMonth('December');
        setCurrentYear(currentYear - 1);
      } else {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const currentIndex = months.indexOf(currentMonth);
        setCurrentMonth(months[currentIndex - 1]);
      }
    };
    
    const goToNextMonth = () => {
      if (currentMonth === 'December') {
        setCurrentMonth('January');
        setCurrentYear(currentYear + 1);
      } else {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const currentIndex = months.indexOf(currentMonth);
        setCurrentMonth(months[currentIndex + 1]);
      }
    };
    
    // Sample data for the calendar - in a real app, this would be dynamic
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    
    return (
      <div className="bg-white rounded-md p-3 sm:p-4 mb-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-sm sm:text-base">Calendar</h3>
          <div className="flex items-center gap-2">
            <button onClick={goToPreviousMonth} className="p-1 hover:bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <span className="text-xs sm:text-sm">{currentMonth} {currentYear}</span>
            <button onClick={goToNextMonth} className="p-1 hover:bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {weekdays.map(day => (
            <div key={day} className="text-xs text-center font-medium text-gray-500 py-1">
              {day}
            </div>
          ))}
          {days.map(day => {
            const isHighlighted = [14, 17].includes(day);
            const isToday = day === 14;
            
            return (
              <div 
                key={day}
                className={`text-xs text-center py-2 rounded-full transition-colors hover:bg-gray-100 cursor-pointer ${
                  isHighlighted 
                    ? isToday 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
                    : ''
                }`}
                onClick={() => console.log(`Selected day: ${day} ${currentMonth} ${currentYear}`)}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
export default Calendar;
