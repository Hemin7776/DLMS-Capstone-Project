import React, { useState, useEffect } from "react";
import MainLayout from "../../Components/Adminlayout/AdminLayout";
import Input from "../../Components/Input/Input";
import Swal from "sweetalert2";

const API_URL = "http://localhost:3000";

const Inventory = () => {
  const [diamonds, setDiamonds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [diamondImage, setDiamondImage] = useState(null);
  const [department, setDepartment] = useState([]);
  const [departmentId, setDepartmentId] = useState("");
  const [currentDiamond, setCurrentDiamond] = useState({
    _id: "",
    name: "",
    carat: "",
    color: "",
    clarity: "",
    price: "",
  });

  useEffect(() => {
    fetchDiamonds();
    fetchDepartment();
  }, []);

  const fetchDiamonds = async () => {
    try {
      const response = await fetch(`${API_URL}/api/diamonds/GetDiamonds`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setDiamonds(data);
    } catch (error) {
      console.error("Error fetching diamonds:", error);
    }
  };

  const fetchDepartment = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/Department/GetAllDepartments`
      );
      const data = await response.json();
      setDepartment(data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentDiamond((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setDiamondImage(e.target.files[0]);
    }
  };

  const openAddModal = () => {
    setCurrentDiamond({
      _id: "",
      name: "",
      carat: "",
      color: "",
      clarity: "",
      price: "",
    });
    setDiamondImage(null);
    setDepartmentId("");
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const openEditModal = (diamond) => {
    setCurrentDiamond(diamond);
    setDiamondImage(null);
    setDepartmentId(diamond.Department?._id || "");
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", currentDiamond.name);
      formData.append("carat", currentDiamond.carat);
      formData.append("color", currentDiamond.color);
      formData.append("clarity", currentDiamond.clarity);
      formData.append("price", currentDiamond.price);
      
      if (departmentId) {
        formData.append("DepartmentId", departmentId);
      }
      
      if (diamondImage) {
        formData.append("diamondimage", diamondImage); 
      }

      console.log("FormData Entries:");
      for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      let url;
      if (isEditMode) {
        url = `${API_URL}/api/diamonds/Updatediamonds/${currentDiamond._id}`;
      } else {
        url = `${API_URL}/api/diamonds/Adddiamonds`;
      }

      const requestOptions = {
        method: isEditMode ? "PUT" : "POST",
        body: formData,
      };

      const response = await fetch(url, requestOptions);

      if (response.ok) {
        Swal.fire({
          title: isEditMode
            ? "Diamond Updated Successfully"
            : "Diamond Added Successfully",
          icon: "success",
        });

        fetchDiamonds();
        setIsModalOpen(false);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        Swal.fire({
          title: "Error",
          text: errorData.error || "Failed to save diamond",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error saving diamond:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to save diamond. Please try again.",
        icon: "error",
      });
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
        await fetch(`${API_URL}/api/diamonds/${id}`, {
          method: "DELETE",
        });
        Swal.fire("Deleted!", "Diamond has been deleted.", "success");
        fetchDiamonds();
      } catch (error) {
        console.error("Error deleting diamond:", error);
        Swal.fire("Error!", "Failed to delete diamond.", "error");
      }
    }
  };

  return (
    <MainLayout>
      <div className="p-6 bg-gray-50 overflow-auto min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Diamonds</h1>
            <button
              onClick={openAddModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Diamond
            </button>
          </div>

          {/* Diamonds Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border">Image</th>
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Carat</th>
                  <th className="py-2 px-4 border">Color</th>
                  <th className="py-2 px-4 border">Clarity</th>
                  <th className="py-2 px-4 border">Price</th>
                  <th className="py-2 px-4 border">Department</th>
                  <th className="py-2 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {diamonds.map((diamond) => (
                  <tr key={diamond._id} className="text-center">
                    <td className="py-2 px-4 border">
                      <img
                        src={diamond.image || "/default-diamond.png"}
                        alt="Diamond"
                        className="w-10 h-10 rounded-full mx-auto"
                      />
                    </td>
                    <td className="py-2 px-4 border">{diamond.name}</td>
                    <td className="py-2 px-4 border">{diamond.carat}</td>
                    <td className="py-2 px-4 border">{diamond.color}</td>
                    <td className="py-2 px-4 border">{diamond.clarity}</td>
                    <td className="py-2 px-4 border">${diamond.price}</td>
                    <td className="py-2 px-4 border">
                      {diamond?.Department?.name}
                    </td>
                    <td className="py-2 px-4 border">
                      <button
                        onClick={() => openEditModal(diamond)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(diamond._id)}
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

        {/* Add/Edit Diamond Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">
                {isEditMode ? "Edit Diamond" : "Add Diamond"}
              </h2>
              <form onSubmit={handleSubmit}>
                <Input
                  label="Name"
                  name="name"
                  value={currentDiamond.name}
                  placeholder={"Enter Name"}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Carat"
                  name="carat"
                  value={currentDiamond.carat}
                  placeholder={"Enter Carat Weight"}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Color"
                  name="color"
                  value={currentDiamond.color}
                  placeholder={"Enter Color Grade"}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Clarity"
                  name="clarity"
                  value={currentDiamond.clarity}
                  placeholder={"Enter Clarity Grade"}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Price"
                  name="price"
                  value={currentDiamond.price}
                  placeholder={"Enter Price"}
                  onChange={handleInputChange}
                  required
                />
                <select
                  name="department"
                  id="department"
                  className="w-full p-3 border mb-5 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
                  value={departmentId}
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
                    Diamond Image
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

export default Inventory;