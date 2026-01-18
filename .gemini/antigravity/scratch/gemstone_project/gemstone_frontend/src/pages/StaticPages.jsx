import React from 'react';

/**
 * About Page Component
 * Professional Corporate Profile for GEMPOL
 */
export const About = () => {
    return (
        <div className="container section">
            <div className="text-center mb-lg">
                <h2 style={{ marginBottom: '1rem' }}>About GEMPOL</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.8' }}>
                    GEMPOL is a multidisciplinary engineering initiative dedicated to transforming Ethiopia’s gemstone sector into a value-added manufacturing industry. Our systems integrate high-efficiency variable-speed motor control with sustainable mechanical assemblies to modernize lapidary workshops.
                </p>
            </div>

            <div className="uniform-grid" style={{ marginTop: '4rem' }}>
                <div className="feature-card">
                    <h3 style={{ color: 'var(--accent-emerald)', fontSize: '1.25rem' }}>Variable Precision</h3>
                    <p style={{ fontSize: '0.95rem' }}>PWM-controlled speed regulation adapted for gemstones ranging from Opal to Sapphire, ensuring optimal cutting parameters.</p>
                </div>
                <div className="feature-card">
                    <h3 style={{ color: 'var(--accent-emerald)', fontSize: '1.25rem' }}>Energy Efficiency</h3>
                    <p style={{ fontSize: '0.95rem' }}>Low-power DC motor reduces electrical consumption by 25–30% compared to conventional machines.</p>
                </div>
                <div className="feature-card">
                    <h3 style={{ color: 'var(--accent-emerald)', fontSize: '1.25rem' }}>Eco-Friendly Cooling</h3>
                    <p style={{ fontSize: '0.95rem' }}>Closed-loop water recycling system achieving 80–85% reuse efficiency, drastically reducing process waste.</p>
                </div>
                <div className="feature-card">
                    <h3 style={{ color: 'var(--accent-emerald)', fontSize: '1.25rem' }}>Mechanical Stability</h3>
                    <p style={{ fontSize: '0.95rem' }}>Rigid 30x30mm mild steel frame with vibration-damping mounts for superior surface finishes.</p>
                </div>
                <div className="feature-card">
                    <h3 style={{ color: 'var(--accent-emerald)', fontSize: '1.25rem' }}>Local Sustainability</h3>
                    <p style={{ fontSize: '0.95rem' }}>Designed for affordability and ease of maintenance using locally available materials and components.</p>
                </div>
                <div className="feature-card">
                    <h3 style={{ color: 'var(--accent-emerald)', fontSize: '1.25rem' }}>Operational Safety</h3>
                    <p style={{ fontSize: '0.95rem' }}>Features integrated emergency stops, overcurrent protection, and environmental monitoring sensors.</p>
                </div>
            </div>

            {/* Project Portfolio Section */}
            <div className="glass-card" style={{ marginTop: '5rem', textAlign: 'center', padding: '3rem' }}>
                <h2 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Project Portfolio</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--text-secondary)' }}>
                    Scan the QR code or click the link below to view our full technical portfolio, CAD models, and performance video demonstrations.
                </p>

                <div style={{
                    display: 'inline-block',
                    padding: '1rem',
                    background: 'white',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '2rem',
                    border: '1px solid var(--glass-border)'
                }}>
                    <img
                        src="/images/portfolio_qr.png"
                        alt="Portfolio QR Code"
                        style={{ width: '180px', height: '180px', display: 'block' }}
                    />
                </div>

                <div>
                    <a href="https://sites.google.com/view/gempolproject/home" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary" style={{ minWidth: '280px' }}>
                            View Online Portfolio
                        </button>
                    </a>
                </div>
            </div>

            {/* Development Team Section */}
            <div style={{ marginTop: '5rem' }}>
                <h2 className="text-center mb-lg">Development Team</h2>
                <div className="glass-card" style={{ padding: '3rem' }}>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ color: 'var(--accent-emerald)', fontSize: '1.4rem' }}>Lead Advisor</h3>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Dr. Sintayehu Shewatatek</p>
                    </div>

                    <div>
                        <h3 style={{ color: 'var(--accent-emerald)', fontSize: '1.4rem', marginBottom: '1.5rem' }}>Engineers</h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                            gap: '1.5rem',
                            color: 'var(--text-primary)'
                        }}>
                            <div>Abdulfetah Siraj</div>
                            <div>Bahar Abdulmajid</div>
                            <div>Bemnet Fikre</div>
                            <div>Eshetu Werqaggen</div>
                            <div>Hayleyiyesus Worku</div>
                            <div>Kidus Yosef</div>
                            <div>Naol Fetene</div>
                            <div>Rebira Oli</div>
                            <div>Yohannes Damtew</div>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid var(--glass-border)', marginTop: '3rem', paddingTop: '1.5rem', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                        Institutional Credit: Addis Ababa Science and Technology University (AASTU)
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * Team Page Component
 * Redirects conceptual focus to the professional team list
 */
export const Team = () => {
    return <About />; // Since the new About includes the team, we can unify or redirect
};

/**
 * Acknowledgement Page Component
 */
export const Acknowledgement = () => {
    return (
        <div className="container section" style={{ maxWidth: '900px' }}>
            <div className="glass-card" style={{ padding: '4rem' }}>
                <h2 className="text-center mb-lg" style={{ color: 'var(--text-primary)' }}>Acknowledgements</h2>
                <div style={{ lineHeight: '1.8', color: 'var(--text-secondary)', fontSize: '1.1rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '2rem' }}>
                        We express our sincere gratitude to our project advisor, <strong style={{ color: 'var(--accent-emerald)' }}>Dr. Sintayehu Shewatatek</strong>, for her invaluable guidance, continuous supervision, and constructive feedback throughout this project. Her technical expertise and insightful suggestions were vital in shaping the successful completion of this work.
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        We are grateful to the <strong style={{ color: 'var(--accent-emerald)' }}>School of Electrical and Computer Engineering</strong>, the <strong style={{ color: 'var(--accent-emerald)' }}>Department of Mining Engineering</strong>, and the <strong style={{ color: 'var(--accent-emerald)' }}>Integrated Engineering Team Project (IETP)</strong> coordination committee at <strong style={{ color: 'var(--accent-emerald)' }}>Addis Ababa Science and Technology University (AASTU)</strong> for providing the academic framework and resources.
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        Our appreciation extends to the instructors, laboratory technicians, and workshop staff at the <strong style={{ color: 'var(--accent-emerald)' }}>AASTU Mechanical Engineering Workshop</strong> and the <strong style={{ color: 'var(--accent-emerald)' }}>Electrical & Computer Engineering Laboratory</strong> for their logistical and technical support during fabrication and testing.
                    </p>
                    <p>
                        Finally, we acknowledge the commitment and teamwork of the <strong style={{ color: 'var(--accent-emerald)' }}>GEMPOL Development Team</strong>. This project was made possible through their collective effort and effective collaboration.
                    </p>
                </div>
            </div>
        </div>
    );
};
