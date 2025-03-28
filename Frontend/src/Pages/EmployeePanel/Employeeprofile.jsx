import React, { useState, useEffect } from "react";
import MainLayout from "../../Components/Adminlayout/AdminLayout";
import { useSelector } from "react-redux";
import EmployeepanelLayout from "../../Components/EmployeepanelLayout/Employeepanellayout";

const EmployeeProfile = () => {
  const userData = useSelector((state) => state?.user?.data);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    password: "",
    profileImage: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  // Load user data when component mounts
  useEffect(() => {
    if (userData) {
      setProfileData({
        name: userData.name || "",
        email: userData.email || "",
        password: "",
        profileImage: userData.profileImage || "",
      });
    }
  }, [userData]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Image Change
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setProfileData((prev) => ({
        ...prev,
        profileImage: URL.createObjectURL(file),
      }));
    }
  };

  // Handle Profile Submit
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: "", type: "" });

    const formData = new FormData();
    formData.append("name", profileData.name);
    formData.append("email", profileData.email);
    
    // Only append password if it's not empty
    if (profileData.password) {
      formData.append("password", profileData.password);
    }
    
    if (selectedImage) {
      formData.append("profileImage", selectedImage);
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/user/UpdateProfile/${userData?._id}`,
        {
          method: "PUT",
          body: formData,
          // Don't set Content-Type header when using FormData
          // The browser will set it automatically with the correct boundary
        }
      );

      const data = await response.json();
      
      if (response.ok) {
        setMessage({ 
          text: "Profile updated successfully!", 
          type: "success" 
        });
        // You might want to update Redux state here to reflect changes
        setIsEditing(false);
      } else {
        setMessage({ 
          text: data.message || "Failed to update profile", 
          type: "error" 
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage({ 
        text: "Network error. Please try again.", 
        type: "error" 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <EmployeepanelLayout>
      <div className="min-h-screen bg-gray-100 flex justify-center overflow-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl space-y-4 pb-20  ">
          {message.text && (
            <div className={`p-4 rounded-md ${message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
              {message.text}
            </div>
          )}

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                {/* Profile Image */}
                <div className="mb-6 md:mb-0 md:mr-8 flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={profileData.profileImage || "/default-profile.png"}
                      alt="Profile"
                      className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
                    />
                  </div>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-200"
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <div className="mt-4">
                      <label
                        htmlFor="profile-image"
                        className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-300 transition duration-200"
                      >
                        Choose Image
                      </label>
                      <input
                        id="profile-image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </div>
                  )}
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl font-bold text-gray-800">
                    {userData?.name || "User"}
                  </h1>
                  <p className="text-gray-600 font-medium">{userData?.email || "No email provided"}</p>
                  {userData?.role && (
                    <div className="mt-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full capitalize">
                        {userData.role}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="bg-white shadow-md rounded-lg overflow-y-auto h-[450px]">
              <div className="px-6 py-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Edit Profile
                </h2>

                <form onSubmit={handleProfileSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={profileData.name}
                        onChange={handleProfileChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={profileData.password}
                        onChange={handleProfileChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Leave blank to keep current password"
                      />
                      <p className="mt-1 text-xs text-gray-500">Leave blank to keep your current password</p>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        // Reset form to original data if editing is canceled
                        if (userData) {
                          setProfileData({
                            name: userData.name || "",
                            email: userData.email || "",
                            password: "",
                            profileImage: userData.profileImage || "",
                          });
                          setSelectedImage(null);
                        }
                      }}
                      className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
                      disabled={isLoading}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 flex items-center"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Save Changes"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      </EmployeepanelLayout>
  );
};

export default EmployeeProfile;