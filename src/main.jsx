import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Your global CSS
import App from './App'; // The main app component (protected)
import Login from './Login'; // Login component
import SignUp from './SignUp'; // Sign up component
import ProtectedRoute from './ProtectedRoute'; // Protected route component

const Main = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

// Create the root element and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
