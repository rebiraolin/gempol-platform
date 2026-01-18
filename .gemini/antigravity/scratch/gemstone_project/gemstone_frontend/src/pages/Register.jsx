import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { registerUser } from '../services/api';

const Register = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await registerUser(userData);
            alert("Registration successful! Please login.");
            navigate('/login');
        } catch (err) {
            setError('Registration failed. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '500px' }}>
                <h2 className="text-center" style={{ marginBottom: '2rem' }}>Create Account</h2>
                <form onSubmit={handleSubmit} className="form-container">
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <FormInput
                            label="First Name"
                            type="text"
                            name="first_name"
                            value={userData.first_name}
                            onChange={handleChange}
                            required
                            placeholder="First Name"
                        />
                        <FormInput
                            label="Last Name"
                            type="text"
                            name="last_name"
                            value={userData.last_name}
                            onChange={handleChange}
                            required
                            placeholder="Last Name"
                        />
                    </div>
                    <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                        placeholder="Choose a strong password"
                    />

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                        style={{ width: '100%', marginTop: '1rem' }}
                    >
                        {loading ? 'Creating Account...' : 'Register'}
                    </button>

                    {error && <p className="error-message" style={{ textAlign: 'center' }}>{error}</p>}

                    <div className="auth-link">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
