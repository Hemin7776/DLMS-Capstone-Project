import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginImage from "../../assets/loginimage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AddData } from "../../redux/features/user-slice";
import Swal from "sweetalert2";
import OTPInput from "react-otp-input";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const userRole = useSelector((state) => state.user?.data?.Role);

  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [verfiyModal, SetverifyModal] = useState(false);
  const [ModalPasword, SetpasswordModal] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetError, setResetError] = useState("");
  const [otp, setOtp] = useState("");

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
          result?.user?.Role === "Admin"
            ? "/Adminpanel"
            : result?.user?.Role === "Employee"
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

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setResetLoading(true);
    setResetError("");
    console.log(forgotEmail);

    try {
      const response = await fetch(
        "http://localhost:3000/api/user/forgotpassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: forgotEmail }),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Email sent successfully!",
          text: "Check your inbox for a password reset link.",
          icon: "success",
        });
        setShowPasswordModal(false);
        SetverifyModal(true);
      } else {
        const data = await response.json();
        setResetError(data.message || "Failed to send reset email");
      }
    } catch (error) {
      setResetError("Something went wrong. Please try again.");
    } finally {
      setResetLoading(false);
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/user/resetpassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: forgotEmail,
            password: ModalPasword,
          }),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Password reset successfully!",
          text: "You can now login with your new password.",
          icon: "success",
        });
        setShowPasswordModal(false);
        setShowForgotModal(false);
        SetverifyModal(false)
      } else {
        const data = await response.json();
        setResetError(data.message || "Failed to reset password");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/user/verifyotp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: forgotEmail,
            otp: otp,
          }),
        }
      );

      if (response.status == 200) {
        Swal.fire({
          title: "Email verified successfully!",
          text: "You can now login.",
          icon: "success",
        });
        SetverifyModal(false);
        setShowPasswordModal(true);
      } else {
        const data = await response.json();
        setResetError(data.message || "Failed to verify email");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  const openForgotModal = () => {
    setShowForgotModal(true);
    setResetError("");
  };

  const closeForgotModal = () => {
    setShowForgotModal(false);
    setForgotEmail("");
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

          <div className="text-center mt-4 flex justify-between">
            <div>
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-600">
                  Signup
                </Link>
              </p>
            </div>
            <div>
              <p
                onClick={openForgotModal}
                className="hover:underline cursor-pointer text-blue-500"
              >
                Forget Password
              </p>
            </div>
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

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Forgot Password</h3>
              <button
                onClick={closeForgotModal}
                className="text-gray-600 hover:text-gray-800"
              >
                ×
              </button>
            </div>

            {
              <form onSubmit={handleForgotPassword}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Enter your Email
                  </label>
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="example@email.com"
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>

                {resetError && (
                  <p className="text-red-500 mb-4">{resetError}</p>
                )}

                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={closeForgotModal}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={resetLoading}
                    className="px-4 py-2 bg-black text-white rounded"
                  >
                    {resetLoading ? "Sending..." : "Reset Password"}
                  </button>
                </div>
              </form>
            }
          </div>
        </div>
      )}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Reset Password</h3>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleReset}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Enter your new password
                </label>
                <input
                  type="password"
                  value={ModalPasword}
                  onChange={(e) => SetpasswordModal(e.target.value)}
                  placeholder="New password"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {verfiyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col justify-center items-center">
            <div className="flex justify-between w-full items-center mb-4">
              <h3 className="text-xl font-bold">Reset Password</h3>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={handleVerify}
              className=" w-full flex flex-col justify-center items-center"
            >
              <div className="mb-4 flex justify-center  w-full items-center flex-col">
                <label className="block text-gray-700 mb-2">
                  Enter your Otp
                </label>
                <OTPInput
                  inputStyle={
                    "border border-black-500 !w-8 lg:w-10 h-14 text-xl text-center rounded-lg mx-2 p-2"
                  }
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span className="mx-1">-</span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => SetverifyModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded"
                >
                  Verify Otp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
