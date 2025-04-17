import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginImage from "../../assets/loginimage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AddData } from "../../redux/features/user-slice";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const userRole = useSelector((state) => state.user.data.Role);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:3000/api/user/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        dispatch(AddData(result.user));
        console.log("Login Success:", result);

        await navigate(
          result.user.Role === "Admin"
            ? "/Adminpanel"
            : result.user.Role === "Employee"
            ? "/Employeepanel"
            : "/"
        );
      } else {
        setErrorMessage(result.message || "Login failed!");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-2xl font-bold text-center mb-6">LOGIN</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Must be at least 6 characters",
                  },
                })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-black text-white rounded-lg flex justify-center"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login Now"}
            </button>
          </form>

          {errorMessage && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}

          <div className="text-center mt-4">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600">
                Signup
              </Link>
            </p>
          </div>

          <p className="text-center mt-4 font-semibold">Login with Others</p>
          <div className="mt-4 space-y-3">
            <button className="w-full flex items-center justify-center p-3 border rounded-lg bg-white shadow-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fFERGjpbAQGyUCKIB53X6R4uei1h9c1GuQ&s"
                alt="Google"
                className="w-8 mr-2"
              />
              Login with Google
            </button>
            <button className="w-full flex items-center justify-center p-3 border rounded-lg bg-white shadow-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="Facebook"
                className="w-6 mr-2"
              />
              Login with Facebook
            </button>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img
            src={LoginImage}
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
