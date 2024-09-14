import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App'; // Main app component
import Login from './Login'; // Login component
import SignUp from './SignUp'; // Sign up component
import AdminPage from './AdminPage'; // Admin page
import Navbar from './Navbar'; // Navbar
import ProtectedRoute from './ProtectedRoute'; // Protected route component
import AdminProtectedRoute from './AdminProtectedRoute'; // Admin protected route

const Index = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar with the Admin button */}
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected route for normal users */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />

        {/* Protected route for admins */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminPage />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
