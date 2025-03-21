"use client";
import React, { useState } from "react";

function LoginForm() {
  const [loginType, setLoginType] = useState("employee"); 
  const [rememberMe, setRememberMe] = useState(false); 
  const [employeeId, setEmployeeId] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission logic here
    if (loginType === "employee") {
      console.log({ loginType, employeeId, password, rememberMe });
    } else {
      console.log({ loginType, email, password, rememberMe });
    }
  };

  return (
    <section className="flex justify-center items-center p-8 w-full bg-gray-50 min-h-[screen] max-md:p-6 max-sm:p-4">
      <div className="flex flex-col items-center w-full max-w-md">
        <header className="flex flex-col items-center mb-8">
          <div className="flex justify-center items-center mb-9"></div>
          <h1 className="mb-3 text-3xl font-bold text-gray-900">Welcome</h1>
          <p className="text-sm text-gray-600">Please sign in to your account</p>
        </header>

        <main className="px-10 py-8 w-full bg-white rounded-lg shadow max-md:px-8 max-md:py-6 max-sm:p-5">
          <div className="flex gap-4 justify-center mb-6">
            <button
              className={`flex gap-2 items-center px-4 py-2.5 rounded-md ${
                loginType === "employee" ? "bg-indigo-50" : ""
              }`}
              onClick={() => setLoginType("employee")}
            >
              <span
                className={`text-sm font-medium ${
                  loginType === "employee" ? "text-indigo-700" : "text-gray-500"
                }`}
              >
                Employee
              </span>
            </button>
            <button
              className={`flex gap-2 items-center px-4 py-2.5 rounded-md ${
                loginType === "candidate" ? "bg-indigo-50" : ""
              }`}
              onClick={() => setLoginType("candidate")}
            >
              <span
                className={`text-sm font-medium ${
                  loginType === "candidate" ? "text-indigo-700" : "text-gray-500"
                }`}
              >
                Candidate
              </span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Conditional rendering for Employee ID or Email */}
            {loginType === "employee" ? (
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="employeeId"
                  className="text-sm font-medium text-gray-700"
                >
                  Employee ID
                </label>
                <input
                  id="employeeId"
                  type="text"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  className="w-full rounded-md shadow-sm border border-gray-300 h-[38px] px-3"
                />
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md shadow-sm border border-gray-300 h-[38px] px-3"
                />
              </div>
            )}

            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md shadow-sm border border-gray-300 h-[38px] px-3"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="w-4 h-4"
                />
                <label htmlFor="rememberMe" className="text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm font-medium text-indigo-600">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm h-[38px] hover:bg-indigo-700 transition-colors"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6">
            <div className="flex relative justify-center items-center">
              <div className="absolute w-full border border-gray-300" />
              <span className="relative px-2 text-sm text-gray-500 bg-white">
                Or continue with
              </span>
            </div>
            <button
              type="button"
              className="flex gap-2 justify-center items-center mt-6 w-full rounded-md shadow-sm border border-gray-300 h-[38px] hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium text-gray-700">
                Sign in with Google
              </span>
            </button>
          </div>

          <div className="flex gap-1 justify-center items-center mt-6">
            <span className="text-sm text-gray-600">Don't have an account?</span>
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Sign up
            </a>
          </div>
        </main>
      </div>
    </section>
  );
}

export default LoginForm;