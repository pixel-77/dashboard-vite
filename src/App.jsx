// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard'; // Import the Dashboard component
import Login from './components/login'; // Import the Login component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Catch-all route: Redirect to /login for any unknown routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
