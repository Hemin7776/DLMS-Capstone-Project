import React, { useEffect, useState } from 'react';

const ActivityFeed = () => {
    const [activities, setActivities] = useState([
        {
          id: 1,
          user: 'EK',
          color: 'bg-blue-500',
          message: 'completed diamond cutting batch 12',
          timestamp: '5m ago (2024-12-04)'
        },
        {
          id: 2,
          user: 'JP',
          color: 'bg-purple-500',
          message: 'joined the workforce for polishing tasks',
          timestamp: '2h ago (2024-12-04)'
        },
        {
          id: 3,
          user: 'AD',
          color: 'bg-gray-500',
          message: 'achieved Employee of the Month',
          timestamp: '3d ago (2024-12-01)'
        }
      ]);
      
      const [showAll, setShowAll] = useState(false);
      const [newActivity, setNewActivity] = useState(null);
      
      // Simulate new activity coming in
      useEffect(() => {
        const timer = setTimeout(() => {
          const activity = {
            id: 4,
            user: 'MJ',
            color: 'bg-green-500',
            message: 'updated inventory records',
            timestamp: 'Just now'
          };
          
          setNewActivity(activity);
        }, 15000); // 15 seconds
        
        return () => clearTimeout(timer);
      }, []);
      
      // Add new activity with animation
      useEffect(() => {
        if (newActivity) {
          setActivities(prev => [newActivity, ...prev]);
          setNewActivity(null);
        }
      }, [newActivity]);
      
      const displayedActivities = showAll ? activities : activities.slice(0, 3);
      
      return (
        <div className="bg-white rounded-md p-3 sm:p-4 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="font-medium text-sm sm:text-base">Activity</h3>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {displayedActivities.map((activity, index) => (
              <div 
                key={activity.id} 
                className={`flex gap-2 sm:gap-3 ${index === 0 && activity.id === 4 ? 'animate-pulse' : ''}`}
              >
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${activity.color} flex items-center justify-center text-white text-xs sm:text-sm shrink-0`}>
                  {activity.user}
                </div>
                <div>
                  <p className="text-xs sm:text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.message}
                  </p>
                  <p className="text-xs text-gray-500">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
          {activities.length > 3 && (
            <button 
              className="mt-3 sm:mt-4 text-xs sm:text-sm text-blue-500 font-medium hover:text-blue-700"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'View All'}
            </button>
          )}
        </div>
      );
    };
    
export default ActivityFeed;