import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem', textAlign: 'left' }}>
                    {/* Brand Section */}
                    <div style={{ flex: '1 1 250px' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>GEMPOL Project</h3>
                        <p style={{ fontSize: '0.9rem', maxWidth: '300px', color: 'var(--text-secondary)' }}>
                            Advanced eco-friendly polishing technology locally developed at AASTU.
                        </p>
                    </div>

                    {/* Services Section */}
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1.2rem', color: 'var(--text-primary)' }}>Services</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <Link to="/sales" style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem' }}>Machine Sales</Link>
                            <Link to="/polishing" style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem' }}>Polishing Services</Link>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1.2rem', color: 'var(--text-primary)' }}>Information</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <Link to="/acknowledgement" style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem' }}>Acknowledgements</Link>
                            <Link to="/about" style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem' }}>About Us</Link>
                            <Link to="/contact" style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem' }}>Contact</Link>
                        </div>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1.2rem', color: 'var(--text-primary)' }}>Support</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <a href="mailto:support@gempol.test" style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem' }}>support@gempol.test</a>
                        </div>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1.2rem', color: 'var(--text-primary)' }}>Connect</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem' }}>LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem' }}>Twitter</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem' }}>Instagram</a>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                        &copy; 2026 GEMPOL Polishing Machine Project.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
