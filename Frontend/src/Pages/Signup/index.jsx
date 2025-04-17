import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Signupimage from "../../assets/loginimage.jpg";
import { useForm } from "react-hook-form";
import Input from "../../Components/Input/Input";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [loading , Setloading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("profileImage", { type: "manual", message: "Only images are allowed" });
        return;
      }
      setProfileImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    if (!profileImage) {
      setError("profileImage", { type: "manual", message: "Profile image is required" });
      return;
    }

    Setloading(true);
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    formData.append("profileImage", profileImage);

    try {
      const response = await fetch("http://localhost:3000/api/user/signup", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      Setloading(false);
      if (result.success) {
        Swal.fire({
          title: "Signup Successful!",
          text: "Your account has been created successfully.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => navigate("/login"));
      } else {
        Swal.fire({
          title: "Signup Failed!",
          text: result.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:block w-1/3 relative">
          <img
            src={Signupimage}
            alt="Signup Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-5 left-5 text-white">
            <h2 className="text-xl font-semibold">
              Getting Started <br /> With Management Portal!
            </h2>
          </div>
        </div>

        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-2xl font-bold text-center">Create Account</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input placeholder="Name" {...register("name", { required: "Name is required" })} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <Input
              placeholder="Email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <Input
              placeholder="Password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

            <Input
              placeholder="Company Name"
              {...register("Companyname", { required: "Company Name is required" })}
            />
            {errors.Companyname && <p className="text-red-500 text-sm">{errors.Companyname.message}</p>}

            <div className="flex flex-col items-center">
              <label className="w-full cursor-pointer border border-dashed border-gray-400 p-4 text-center rounded-lg hover:bg-gray-100">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <p className="text-gray-500">Click to upload profile image</p>
              </label>
              {errors.profileImage && <p className="text-red-500 text-sm">{errors.profileImage.message}</p>}

              {preview && (
                <div className="mt-4">
                  <img src={preview} alt="Profile Preview" className="w-24 h-24 rounded-full border" />
                </div>
              )}
            </div>

            <button type="submit" className="w-full cursor-pointer p-3 bg-gray-800 text-white rounded-lg">
             {loading ?  "Loading..." : "Create Account"}
            </button>
          </form>

          <p className="text-center mt-4">
            Already have an account? <Link to="/login" className="text-blue-600">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
