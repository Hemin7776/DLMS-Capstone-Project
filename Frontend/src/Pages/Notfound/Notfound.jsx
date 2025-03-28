import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  const Role = useSelector((state) => state.user?.data?.Role);

  useEffect(() => {
    if (Role === "Admin") {
      navigate("/Adminpanel");
    } else if (Role === "Employee") {
      navigate("/EmployeePanel");
    } else {
      navigate("/");
    }
  })

  const handleForward = () => {
    if (window.history.length > 1) {
      window.history.forward();
    } else {
      navigate("/"); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-9xl font-extrabold text-red-500 animate-bounce">
        404
      </h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-lg mt-2 text-gray-500">
        Sorry, the page you are looking for doesn't exist.
      </p>
      <button
        onClick={handleForward}
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all"
      >
        Go Forward
      </button>
    </div>
  );
};

export default Notfound;
