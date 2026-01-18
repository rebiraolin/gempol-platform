import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../services/api';

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);

    const handleLogoutWithConfirmation = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            logoutUser();
            navigate('/login');
        }
    };

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">GEMPOL</Link>
                <div className="navbar-links">
                    <Link to="/">Home</Link>

                    {/* Services Dropdown */}
                    <div
                        className="nav-dropdown"
                        onMouseEnter={() => setShowServicesDropdown(true)}
                        onMouseLeave={() => setShowServicesDropdown(false)}
                    >
                        <span className="nav-dropdown-toggle">
                            Services
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
                                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                        <div className="nav-dropdown-menu">
                            <Link to="/sales">Machine Sales</Link>
                            <Link to="/polishing">Polishing Services</Link>
                        </div>
                    </div>

                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/acknowledgement">Acknowledgements</Link>

                    {user ? (
                        <>
                            <span className="user-greeting">Hi, {user.first_name || 'User'}</span>
                            <button onClick={handleLogoutWithConfirmation} className="btn btn-glass" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
