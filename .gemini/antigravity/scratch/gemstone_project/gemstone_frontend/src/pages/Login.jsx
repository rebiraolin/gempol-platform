import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { loginUser } from '../services/api';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await loginUser(credentials);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            window.location.href = '/';
        } catch (err) {
            setError('Invalid email or password.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '500px' }}>
                <h2 className="text-center" style={{ marginBottom: '2rem' }}>Welcome Back</h2>
                <form onSubmit={handleSubmit} className="form-container">
                    <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        placeholder="Enter your password"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                        style={{ width: '100%', marginTop: '1rem' }}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>

                    {error && <p className="error-message" style={{ textAlign: 'center' }}>{error}</p>}

                    <div className="auth-link">
                        Don't have an account? <Link to="/register">Create one</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
