import React from 'react';

function Login() {




  return (
    // Main div
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Outer Box */}
      <div className="flex flex-col outline rounded-lg shadow-lg w-auto max-w-sm p-6 bg-white">

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Enter your username" 
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* College */}
        <div className="mb-4">
          <label htmlFor="college" className="block text-sm font-medium text-gray-700">College:</label>
          <input 
            type="text" 
            id="college" 
            name="college" 
            placeholder="Enter your college name" 
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Course */}
        <div className="mb-6">
          <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course:</label>
          <input 
            type="text" 
            id="course" 
            name="course" 
            placeholder="Enter your course name" 
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="w-full px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Login
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;
