import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useLocation, useNavigate } from "react-router-dom";
import { RemoveData } from "../../redux/features/user-slice";
import Swal from "sweetalert2";

const AdminNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const UserRole = useSelector((state) => state.user.data);
  const location = useLocation();


  const handleLogout = () => {
    Swal.fire({
      title: "Logout Success",
      icon: "success",
    });
    dispatch(RemoveData());
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
    if (isProfileOpen) setIsProfileOpen(false);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    if (isNotificationOpen) setIsNotificationOpen(false);
  };

  return (
    <nav className="bg-white px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b shadow-sm">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-xs sm:max-w-md">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for diamonds here"
              className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 border-none text-sm sm:text-base focus:ring-2 focus:ring-blue-300 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute left-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative">
          <button
            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            onClick={toggleNotifications}
            aria-label="Notifications"
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
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-10">
              <div className="px-4 py-2 border-b">
                <h3 className="text-sm font-medium">Notifications</h3>
              </div>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  <p className="text-sm font-medium">New diamonds arrived</p>
                  <p className="text-xs text-gray-500">5 minutes ago</p>
                </div>
              ))}
              <div className="px-4 py-2 border-t text-center">
                <button className="text-xs text-blue-500 font-medium">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          className="p-1.5 hover:bg-gray-100 relative rounded-full transition-colors"
          onClick={toggleProfile}
          aria-label="Profile"
        >
          <img
            src={
              UserRole
                ? UserRole.profileImage
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNa1JGLFIadWHMQ0KvIuKWYGl-cxLwGlI2WA&s"
            }
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
            alt=""
          />
        </button>

        {isProfileOpen && (
          <div className="absolute top-12 right-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <div className="px-4 py-2 border-b">
              <p className="text-sm font-medium">John Diamond</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <button
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
              onClick={() => navigate(UserRole?.Role == "Admin" ? "/profile" : "/Employee/profile")}
            >
              Profile
            </button>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
              Settings
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
