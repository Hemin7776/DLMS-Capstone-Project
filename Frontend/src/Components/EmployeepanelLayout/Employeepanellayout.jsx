import React, { useState } from "react";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Calendar from "../Calender/Calender";
import ChartSection from "../ChartSection/ChartSection";
import EventsSection from "../EventSection/EventSection";
import StatCard from "../StatCard/Statcard";
import WelcomeCard from "../WelcomeCard/WelcomeCard";

const navLinks = [
  { id: "/EmployeePanel", icon: "grid", label: "Dashboard" },
  { id: "/EmployeePanel/Diamond", icon: "package", label: "Diamonds" },
];

const EmployeepanelLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-gray-50">
      {/* Mobile sidebar overlay */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:hidden fixed inset-0 z-20 bg-black bg-opacity-50`}
        onClick={() => setSidebarOpen(false)}
      />

      <div
        className={`
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 border transform transition-transform duration-300 ease-in-out
        fixed md:static top-0 left-0 h-full z-30 md:z-auto
      `}
      >
        <AdminSidebar navlinks={navLinks} sidebarTitle="EmployeePanel" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col border overflow-hidden">
        <AdminNavbar onToggleSidebar={toggleSidebar} />

        {children}
      </div>
    </div>
  );
};

export default EmployeepanelLayout;
