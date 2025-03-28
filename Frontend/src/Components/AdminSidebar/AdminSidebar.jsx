import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AdminSidebar = ({navlinks , sidebarTitle}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeLink, setActiveLink] = useState('dashboard');
  const Userdata = useSelector((state) => state.user.data);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside 
      className={`
        bg-gray-800 text-white 
        ${isCollapsed ? 'w-16' : 'w-64'} 
        transition-all duration-300 ease-in-out h-screen
        fixed md:relative z-30
        flex flex-col  
      `}
      style={{ width: isCollapsed ? '' : '100%' }}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && (
          <div className="font-bold text-lg px-3">{sidebarTitle}</div>
        )}
        <button
          className={`${isCollapsed ? 'mx-auto' : ''} bg-gray-700 hover:bg-gray-600 rounded-full p-1`}
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transform transition-transform ${isCollapsed ? 'rotate-0' : 'rotate-180'}`}
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      </div>

      <nav className="flex-1 py-4 overflow-y-auto ">
        <ul className="space-y-2 px-2">
          {navlinks.map((link) => (
            <li key={link.id}>
              <Link
                to={`${link.id}`}
                className={`
                  flex items-center p-2 rounded-md transition-colors
                  ${activeLink === link.id ? 'bg-blue-600' : 'hover:bg-gray-700'}
                `}
                onClick={() => setActiveLink(link.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={isCollapsed ? 'mx-auto' : 'mr-3'}
                >
                  {link.icon === 'grid' && (
                    <>
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </>
                  )}
                  {link.icon === 'package' && (
                    <>
                      <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path>
                      <polyline points="2.32 6.16 12 11 21.68 6.16"></polyline>
                      <line x1="12" y1="22.76" x2="12" y2="11"></line>
                      <line x1="7" y1="3.5" x2="17" y2="8.5"></line>
                    </>
                  )}
                  {link.icon === 'users' && (
                    <>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </>
                  )}
                  {link.icon === 'tool' && (
                    <>
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </>
                  )}
                  {link.icon === 'award' && (
                    <>
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </>
                  )}
                  {link.icon === 'dollar-sign' && (
                    <>
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </>
                  )}
                  {link.icon === 'bar-chart' && (
                    <>
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </>
                  )}
                  {link.icon === 'settings' && (
                    <>
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </>
                  )}
                </svg>
                {!isCollapsed && <span>{link.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User profile section */}
      <div className="p-4 border-t border-gray-700">
        <div className={`flex ${isCollapsed ? 'justify-center' : 'items-center'}`}>
         <img src={Userdata.profileImage} alt="" 
             className={`w-8 h-8 rounded-full ${isCollapsed ? 'mx-auto' : ''}`}         
         />
          {!isCollapsed && (
            <div className="ml-3">
              <div className="text-sm font-medium">{Userdata?.name}</div>
              <div className="text-xs text-gray-400">{Userdata?.Role}</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;