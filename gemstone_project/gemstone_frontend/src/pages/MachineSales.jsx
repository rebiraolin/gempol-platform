import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import { createMachineOrder } from '../services/api';

/**
 * MachineSales Page
 * Allows users to purchase the GEMPOL Polishing Machine.
 * Updated Pricing and Warranty
 */
const MachineSales = () => {
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });
        try {
            await createMachineOrder({ quantity });
            setStatus({ type: 'success', message: 'Order placed successfully! A confirmation email has been sent.' });
            setQuantity(1);
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', message: 'Error placing order. Please try again or login if required.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container section">
            <h2 className="text-center mb-lg">Machine Acquisition</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                {/* Product Info Section */}
                <div className="glass-card">
                    <h3 style={{ color: 'var(--accent-emerald)' }}>GEMPOL Polishing Machine</h3>
                    <p style={{ marginTop: '1rem' }}>Experience ultimate precision. The GEMPOL machine combines high-torque efficiency with sustainable mechanical systems.</p>

                    <div style={{ margin: '2rem 0' }}>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '1rem' }}>Key Specifications</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--accent-emerald)' }}>✔</span> High-Precision Grinding Mechanism
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--accent-emerald)' }}>✔</span> Eco-Friendly Water Filtration
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--accent-emerald)' }}>✔</span> High-Torque Performance
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--accent-emerald)' }}>✔</span> Energy-Efficient Operation
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--accent-emerald)' }}>✔</span> Includes 1-Year Full Warranty
                            </li>
                        </ul>
                    </div>

                    <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: '800' }}>15,000 <span style={{ fontSize: '0.8rem', fontWeight: '400', color: 'var(--text-tertiary)' }}>Birr</span></span>
                        <span style={{ background: 'var(--accent-emerald-light)', color: 'var(--accent-emerald)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700' }}>AVAILABLE NOW</span>
                    </div>
                </div>

                {/* Order Form Section */}
                <div className="form-container" style={{ margin: 0, width: '100%', maxWidth: 'none' }}>
                    <h4 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Configure Your Order</h4>
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            label="Quantity"
                            type="number"
                            name="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            min="1"
                            required
                        />
                        <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', marginTop: '1.5rem' }}>
                            {loading ? 'Processing...' : 'Place Order'}
                        </button>
                    </form>

                    {status.message && (
                        <div className={`message ${status.type}`} style={{ marginTop: '2rem' }}>
                            {status.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MachineSales;
