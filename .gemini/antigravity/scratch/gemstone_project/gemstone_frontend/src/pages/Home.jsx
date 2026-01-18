import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

/**
 * Home Page
 * Modern Luxury Design with Bento Grid and Glassmorphism
 * Updated for GEMPOL Branding
 */
const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Energy-Efficient <br /><span className="glow-text" style={{ color: 'var(--accent-emerald)' }}>GEMPOL Polishing</span></h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
                        Revolutionizing gemstone processing with the official GEMPOL Polishing Machine. Sustainable, precise, and locally manufacturable.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/sales" className="btn btn-primary">Buy Machine</Link>
                        <Link to="/polishing" className="btn btn-outline">Request Service</Link>
                    </div>
                </div>
                <div className="hero-image">
                    {/* Using the newly provided GEMPOL machine image */}
                    <img src="/images/gempol_machine.png" alt="GEMPOL Polishing Machine" />
                </div>
            </section>

            {/* Information Grid (Bento Style) */}
            <section className="container section">
                <div className="text-center mb-lg">
                    <h2>Innovation Meets Precision</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Developing the future of gemstone manufacturing with GEMPOL technology.
                    </p>
                </div>

                <div className="uniform-grid">
                    {/* Feature 1: Energy Efficiency */}
                    <div className="feature-card">
                        <h3 style={{ color: 'var(--accent-emerald)', fontSize: '1.25rem' }}>1. Energy Efficiency</h3>
                        <p style={{ fontSize: '0.95rem' }}>Optimized power systems designed to minimize electricity consumption during high-load polishing operations.</p>
                    </div>

                    {/* Feature 2: High-Precision Grinding */}
                    <div className="feature-card">
                        <h3 style={{ fontSize: '1.25rem' }}>2. High-Precision Grinding</h3>
                        <p style={{ fontSize: '0.95rem' }}>Engineered for extreme accuracy, ensuring a flawless finish for every gemstone processed.</p>
                    </div>

                    {/* Feature 3: Eco-Friendly Water Filtration */}
                    <div className="feature-card">
                        <h3 style={{ color: 'var(--accent-emerald)', fontSize: '1.25rem' }}>3. Eco-Friendly Water Filtration</h3>
                        <p style={{ fontSize: '0.95rem' }}>A closed-loop system that recycles water, drastically reducing environmental impact and waste.</p>
                    </div>

                    {/* Feature 4: Local Manufacturability */}
                    <div className="feature-card">
                        <h3 style={{ fontSize: '1.25rem' }}>4. Local Manufacturability</h3>
                        <p style={{ fontSize: '0.95rem' }}>Designed with components that can be sourced and assembled locally, supporting domestic industry.</p>
                    </div>

                    {/* Feature 5: High-Torque Performance */}
                    <div className="feature-card">
                        <h3 style={{ color: 'var(--accent-emerald)', fontSize: '1.25rem' }}>5. High-Torque Performance</h3>
                        <p style={{ fontSize: '0.95rem' }}>Powerful drive mechanisms that maintain consistent speed and pressure for various gem hardness levels.</p>
                    </div>

                    {/* Feature 6: Cost-Effective Operation */}
                    <div className="feature-card">
                        <h3 style={{ fontSize: '1.25rem' }}>6. Cost-Effective Operation</h3>
                        <p style={{ fontSize: '0.95rem' }}>Engineered for affordability, making professional gemstone polishing accessible to small enterprises.</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="container section">
                <h2 className="text-center mb-lg">Our Solutions</h2>
                <div className="services-grid">
                    <ServiceCard
                        title="Machine Sales"
                        description="Invest in the future of gemstone processing with your own GEMPOL unit. High-performance, energy-efficient, and built for precision."
                        link="/sales"
                        btnText="EXPLORE PRICING"
                    />
                    <ServiceCard
                        title="Polishing Services"
                        description="Let our experts handle the work. We provide professional-grade gemstone cutting and polishing using our proprietary GEMPOL technology."
                        link="/polishing"
                        btnText="REQUEST SERVICE"
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
