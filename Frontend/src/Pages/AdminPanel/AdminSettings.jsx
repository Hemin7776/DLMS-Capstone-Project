import React, { useState } from "react";
import MainLayout from "../../Components/Adminlayout/AdminLayout";

const AdminSettings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "My Admin Panel",
    siteDescription: "Admin dashboard for site management",
    adminEmail: "admin@example.com",
    language: "en",
    enableNotifications: true,
    maintenanceMode: false,
  });

  const [securitySettings, setSecuritySettings] = useState({
    sessionTimeout: 30,
    twoFactorAuth: false,
    passwordPolicy: "medium",
  });

  const handleGeneralChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGeneralSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSecurityChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSecuritySettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings saved:", { generalSettings, securitySettings });
    // Here you would typically send the data to your backend
    alert("Settings updated successfully");
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100 overflow-auto flex overflow-auto justify-center items-start py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                Admin Settings
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage your admin panel preferences
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* General Settings Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b">
                  General Settings
                </h2>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="siteName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Site Name
                    </label>
                    <input
                      type="text"
                      id="siteName"
                      name="siteName"
                      value={generalSettings.siteName}
                      onChange={handleGeneralChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="siteDescription"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Site Description
                    </label>
                    <textarea
                      id="siteDescription"
                      name="siteDescription"
                      value={generalSettings.siteDescription}
                      onChange={handleGeneralChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="adminEmail"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Admin Email
                    </label>
                    <input
                      type="email"
                      id="adminEmail"
                      name="adminEmail"
                      value={generalSettings.adminEmail}
                      onChange={handleGeneralChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="language"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Language
                    </label>
                    <select
                      id="language"
                      name="language"
                      value={generalSettings.language}
                      onChange={handleGeneralChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="enableNotifications"
                      name="enableNotifications"
                      checked={generalSettings.enableNotifications}
                      onChange={handleGeneralChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="enableNotifications"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Enable email notifications
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="maintenanceMode"
                      name="maintenanceMode"
                      checked={generalSettings.maintenanceMode}
                      onChange={handleGeneralChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="maintenanceMode"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Enable maintenance mode
                    </label>
                  </div>
                </div>
              </div>

              {/* Security Settings Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b">
                  Security Settings
                </h2>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="sessionTimeout"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Session Timeout (minutes)
                    </label>
                    <input
                      type="number"
                      id="sessionTimeout"
                      name="sessionTimeout"
                      value={securitySettings.sessionTimeout}
                      onChange={handleSecurityChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="passwordPolicy"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Password Policy
                    </label>
                    <select
                      id="passwordPolicy"
                      name="passwordPolicy"
                      value={securitySettings.passwordPolicy}
                      onChange={handleSecurityChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="low">Low - 6+ characters</option>
                      <option value="medium">
                        Medium - 8+ characters with numbers
                      </option>
                      <option value="high">
                        High - 10+ characters with numbers and symbols
                      </option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="twoFactorAuth"
                      name="twoFactorAuth"
                      checked={securitySettings.twoFactorAuth}
                      onChange={handleSecurityChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="twoFactorAuth"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Enable two-factor authentication
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminSettings;
