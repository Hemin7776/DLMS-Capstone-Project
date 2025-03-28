import React, { useState, useEffect } from "react";
import MainLayout from "../../Components/Adminlayout/AdminLayout";
import Swal from "sweetalert2";

const DiamondDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const [newDepartmentName, setNewDepartmentName] = useState("");
  const [editingDepartment, setEditingDepartment] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch departments from API
  const fetchDepartments = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3000/api/Department/GetAllDepartments"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch departments");
      }

      const data = await response.json();
      setDepartments(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch departments. Please try again.");
      console.error("Error fetching departments:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  // Add new department
  const handleAddDepartment = async (e) => {
    e.preventDefault();
    if (!newDepartmentName.trim()) return;

    try {
      const response = await fetch(
        "http://localhost:3000/api/Department/AddDepartment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: newDepartmentName }),
        }
      );

      const responseData = await response.json();
      if (responseData.success) {
        Swal.fire({
          title: "Department Added",
          text: "Department Added successfully!",
          icon: "success",
        })
      } else {
        throw new Error(responseData.error || "Failed to Add department");
      }

      setNewDepartmentName("");
      fetchDepartments();
    } catch (err) {
      setError(err.message || "Failed to add department. Please try again.");
      console.error("Error adding department:", err);
    }
  };

  // Start editing a department
  const handleStartEdit = (department) => {
    setEditingDepartment(department._id);
    setEditedName(department.name);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingDepartment(null);
    setEditedName("");
  };

  const handleSaveEdit = async (departmentId) => {
    if (!editedName.trim()) return;

    try {
      const response = await fetch(`http://localhost:3000/api/Department/UpdateDepartment/${departmentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: editedName }),
      });

      const Data = await response.json();
      if (response.status === 200) {
        Swal.fire({
          title: "Department Updated",
          text: "Department updated successfully!",
          icon: "success",
        });
      }else{
        throw new Error(Data.error || "Failed to update department");
      }

      setEditingDepartment(null);
      fetchDepartments();
    } catch (err) {
      setError(err.message || "Failed to update department. Please try again.");
      console.error("Error updating department:", err);
    }
  };

  // Delete department
  const handleDeleteDepartment = async (departmentId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {  // 'async' function Swal ke 'then' ke andar hona chahiye
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/Department/DeleteDepartment/${departmentId}`,
            {
              method: "DELETE",
            }
          );
  
          const responseData = await response.json();
  
          if (responseData.success) {
            Swal.fire({
              title: "Department Deleted",
              text: "Department deleted successfully!",
              icon: "success",
            });
  
            fetchDepartments(); // Department list ko refresh karne ke liye
          } else {
            throw new Error(responseData.error || "Failed to delete department");
          }
        } catch (err) {
          Swal.fire({
            title: "Error",
            text: err.message || "Failed to delete department. Please try again.",
            icon: "error",
          });
  
          console.error("Error deleting department:", err);
        }
      }
    });
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Diamond Departments</h1>

        {/* Error message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
            <button
              className="float-right font-bold"
              onClick={() => setError(null)}
            >
              &times;
            </button>
          </div>
        )}

        {/* Add new department form */}
        <div className="bg-white shadow-md rounded p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Department</h2>
          <form onSubmit={handleAddDepartment} className="flex gap-2">
            <input
              type="text"
              value={newDepartmentName}
              onChange={(e) => setNewDepartmentName(e.target.value)}
              placeholder="Department Name"
              className="flex-grow p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Department
            </button>
          </form>
        </div>

        {/* Departments list */}
        <div className="bg-white shadow-md rounded overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employees
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Diamonds
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center">
                    Loading departments...
                  </td>
                </tr>
              ) : departments.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center">
                    No departments found. Add your first department above.
                  </td>
                </tr>
              ) : (
                departments.map((department) => (
                  <tr key={department._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingDepartment === department._id ? (
                        <input
                          type="text"
                          value={editedName}
                          onChange={(e) => setEditedName(e.target.value)}
                          className="border rounded p-1 w-full"
                          autoFocus
                        />
                      ) : (
                        department.name
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {department.employees?.length || 0}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {department.Diamonds?.length || 0}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {editingDepartment === department._id ? (
                        <>
                          <button
                            className="text-green-600 hover:text-green-900 mr-2"
                            onClick={() => handleSaveEdit(department._id)}
                          >
                            Save
                          </button>
                          <button
                            className="text-gray-600 hover:text-gray-900"
                            onClick={handleCancelEdit}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="text-blue-600 hover:text-blue-900 mr-2"
                            onClick={() => handleStartEdit(department)}
                          >
                            Edit
                          </button>
                          <button
                            className="text-red-600 hover:text-red-900"
                            onClick={() =>
                              handleDeleteDepartment(department._id)
                            }
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default DiamondDepartment;
