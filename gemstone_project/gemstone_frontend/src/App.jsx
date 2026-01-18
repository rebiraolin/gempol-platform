import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MachineSales from './pages/MachineSales';
import GemPolishingService from './pages/GemPolishingService';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Register from './pages/Register';
import { About, Team, Acknowledgement } from './pages/StaticPages';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/acknowledgement" element={<Acknowledgement />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* Protected Routes */}
            <Route
              path="/sales"
              element={
                <ProtectedRoute>
                  <MachineSales />
                </ProtectedRoute>
              }
            />
            <Route
              path="/polishing"
              element={
                <ProtectedRoute>
                  <GemPolishingService />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
