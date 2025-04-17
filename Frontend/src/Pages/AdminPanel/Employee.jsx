import React, { useState, useEffect } from "react";
import MainLayout from "../../Components/Adminlayout/AdminLayout";
import Input from "../../Components/Input/Input";
import Swal from "sweetalert2";

const API_URL = "http://localhost:3000"; // Backend ka URL

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [department, setDepartment] = useState([]);
  const [DepartmentId, setDepartmentId] = useState("");
  const [currentEmployee, setCurrentEmployee] = useState({
    _id: "",
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetchEmployees();
    fetchdepartment();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(`${API_URL}/api/Employee/GetEmployee`);
      const data = await response.json();
  
      const filteredEmployees = data.employees.filter(
        (employee) => employee.email !== "admin@gmail.com"
      );
  
      setEmployees(filteredEmployees);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  

  const fetchdepartment = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/Department/GetAllDepartments`
      );
      const data = await response.json();
      setDepartment(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfileImage(e.target.files[0]);
    }
  };

  const openAddModal = () => {
    setCurrentEmployee({ _id: "", name: "", email: "", password: "" });
    setProfileImage(null);
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const openEditModal = (employee) => {
    setCurrentEmployee(employee);
    setProfileImage(null);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", currentEmployee.name);
      formData.append("email", currentEmployee.email);
      formData.append("password", currentEmployee.password);
      formData.append("DepartmentId", DepartmentId);
      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      console.log("FormData Entries:");
      for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      const requestOptions = {
        method: isEditMode ? "PUT" : "POST",
        body: formData, 
      };

      const url = isEditMode
        ? `${API_URL}/api/Employee/UpdateEmployee/${currentEmployee._id}`
        : `${API_URL}/api/Employee/AddEmployee`;

      const response = await fetch(url, requestOptions);

      if (response.ok) {
        Swal.fire({
          title: isEditMode
            ? "Employee Updated Successfully"
            : "Employee Added Successfully",
          icon: "success",
        });

        fetchEmployees();
        setIsModalOpen(false);
      } else {
        console.error("Error:", await response.json());
      }
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!id) return;
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      allowOutsideClick: false,
      focusConfirm: false,
    });

    if (result.isConfirmed) {
      try {
        await fetch(`${API_URL}/api/Employee/DeleteEmployee/${id}`, {
          method: "DELETE",
        });
        Swal.fire("Deleted!", "Employee has been deleted.", "success");
        fetchEmployees(); // Updated list fetch karein
      } catch (error) {
        console.error("Error deleting employee:", error);
        Swal.fire("Error!", "Failed to delete employee.", "error");
      }
    }
  };

  return (
    <MainLayout>
      <div className="p-6 bg-gray-50 overflow-auto min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Employees</h1>
            <button
              onClick={openAddModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Employee
            </button>
          </div>

          {/* Employees Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border">Profile</th>
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">Department</th>
                  <th className="py-2 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee._id} className="text-center">
                    <td className="py-2 px-4 border">
                      <img
                        src={employee.profileImage || "/default-avatar.png"}
                        alt="Profile"
                        className="w-10 h-10 rounded-full mx-auto"
                      />
                    </td>
                    <td className="py-2 px-4 border">{employee.name}</td>
                    <td className="py-2 px-4 border">{employee.email}</td>
                    <td className="py-2 px-4 border">
                      {employee?.Department?.name}
                    </td>
                    <td className="py-2 px-4 border">
                      <button
                        onClick={() => openEditModal(employee)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(employee._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add/Edit Employee Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">
                {isEditMode ? "Edit Employee" : "Add Employee"}
              </h2>
              <form onSubmit={handleSubmit}>
                <Input
                  label="Name"
                  name="name"
                  value={currentEmployee.name}
                  placeholder={"Enter Name"}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  value={currentEmployee.email}
                  placeholder={"Enter Email"}
                  onChange={handleInputChange}
                  required
                />
                {!isEditMode && (
                  <Input
                    label="Password"
                    name="password"
                    type="password"
                    value={currentEmployee.password}
                    placeholder={"Enter Password"}
                    onChange={handleInputChange}
                    required
                  />
                )}
                <select
                  name="department"
                  id="department"
                  className="w-full p-3 border mb-5 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
                  value={DepartmentId}
                  onChange={(e) => setDepartmentId(e.target.value)}
                >
                  <option value="" disabled className="text-gray-500">
                    Select Department
                  </option>
                  {department.map((item) => (
                    <option
                      key={item._id}
                      value={item._id}
                      className="text-gray-900"
                    >
                      {item.name}
                    </option>
                  ))}
                </select>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    {isEditMode ? "Update" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default EmployeePage;
