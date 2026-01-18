import React, { useState, useEffect, useMemo } from 'react';
import FormInput from '../components/FormInput';
import { createPolishingRequest } from '../services/api';

/**
 * GemPolishingService Page
 * Dynamic form with real-time price estimation
 * Modern Luxury Aesthetics with GEMPOL Branding
 */
const GemPolishingService = () => {
    const [formData, setFormData] = useState({
        gem_type: '',
        gem_type_other: '',
        service_type: 'Standard',
        pickup_location: '',
        delivery_location: '',
        notes: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    // Pricing Logic
    const totalEstimate = useMemo(() => {
        let base = 0;
        const gem = formData.gem_type;
        const service = formData.service_type;

        // Base Costs
        if (['Diamond', 'Emerald', 'Ruby', 'Sapphire'].includes(gem)) {
            base = 1000;
        } else if (gem) {
            base = 500;
        }

        if (base === 0) return 0;

        // Multipliers/Additions
        let addition = 0;
        if (service === 'High-Gloss') addition = 250;
        if (service === 'Ultra-Precision') addition = 500;

        const total = base + addition;

        // Constraints
        return Math.min(Math.max(total, 500), 2000);
    }, [formData.gem_type, formData.service_type]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // Prepare final data for submission
        const submissionData = {
            ...formData,
            gem_type: formData.gem_type === 'Other' ? formData.gem_type_other : formData.gem_type
        };

        try {
            await createPolishingRequest(submissionData);
            setStatus({ type: 'success', message: 'Request submitted successfully! We will review and contact you.' });
            setFormData({
                gem_type: '',
                gem_type_other: '',
                service_type: 'Standard',
                pickup_location: '',
                delivery_location: '',
                notes: ''
            });
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', message: 'Error submitting request. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container section">
            <div className="text-center mb-lg">
                <h2 style={{ marginBottom: '0.5rem' }}>Precision Polishing Service</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto' }}>Entrust your precious gemstones to our official GEMPOL laboratory for a professional, high-precision finish.</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <form onSubmit={handleSubmit} className="form-container" style={{ maxWidth: 'none' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {/* Gemstone Type Selection */}
                        <div className="form-group">
                            <label htmlFor="gem_type">Gemstone Type</label>
                            <select
                                id="gem_type"
                                name="gem_type"
                                value={formData.gem_type}
                                onChange={handleChange}
                                className="form-control"
                                required
                            >
                                <option value="" disabled>Select Gemstone</option>
                                <option value="Diamond">Diamond</option>
                                <option value="Emerald">Emerald</option>
                                <option value="Ruby">Ruby</option>
                                <option value="Sapphire">Sapphire</option>
                                <option value="Quartz">Quartz</option>
                                <option value="Opal">Opal</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Service Level Selection */}
                        <div className="form-group">
                            <label htmlFor="service_type">Service Level</label>
                            <select
                                id="service_type"
                                name="service_type"
                                value={formData.service_type}
                                onChange={handleChange}
                                className="form-control"
                                required
                            >
                                <option value="Standard">Standard</option>
                                <option value="High-Gloss">High-Gloss</option>
                                <option value="Ultra-Precision">Ultra-Precision</option>
                            </select>
                        </div>
                    </div>

                    {/* Conditional Specification Field */}
                    {formData.gem_type === 'Other' && (
                        <div style={{ marginTop: '1rem' }} className="fade-in">
                            <FormInput
                                label="Specify Gemstone Type"
                                type="text"
                                name="gem_type_other"
                                value={formData.gem_type_other}
                                onChange={handleChange}
                                required
                                placeholder="Please specify your gemstone"
                            />
                        </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                        <FormInput
                            label="Pickup Location"
                            type="text"
                            name="pickup_location"
                            value={formData.pickup_location}
                            onChange={handleChange}
                            required
                            placeholder="Full address for secure courier"
                        />
                        <FormInput
                            label="Delivery Location"
                            type="text"
                            name="delivery_location"
                            value={formData.delivery_location}
                            onChange={handleChange}
                            required
                            placeholder="Return destination"
                        />
                    </div>

                    <div className="form-group" style={{ marginTop: '1rem' }}>
                        <label htmlFor="notes">Special Handling Instructions</label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            className="form-control"
                            rows="4"
                            placeholder="Please provide any specific requirements or information about your gemstone's condition..."
                        ></textarea>
                    </div>

                    {/* Price Estimation Display */}
                    <div className="price-estimate-box" style={{
                        marginTop: '2rem',
                        padding: '1.5rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--glass-border)',
                        textAlign: 'center'
                    }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Estimated Service Cost</span>
                        <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-emerald)' }}>
                            {totalEstimate > 0 ? `${totalEstimate.toLocaleString()} Birr` : '-- Birr'}
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>Final price confirmed upon laboratory assessment.</p>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <button type="submit" className="btn btn-primary" disabled={loading} style={{ minWidth: '250px' }}>
                            {loading ? 'Submitting Request...' : 'Submit Service Request'}
                        </button>
                    </div>

                    {status.message && (
                        <div className={`message ${status.type}`} style={{ marginTop: '2rem' }}>
                            {status.message}
                        </div>
                    )}
                </form>
            </div>

            {/* Trust Badges Section */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginTop: '4rem', opacity: 0.6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--accent-emerald)', fontWeight: 'bold' }}>✧</span> Fully Insured Transport
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--accent-emerald)', fontWeight: 'bold' }}>✧</span> AASTU Certified Lab
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--accent-emerald)', fontWeight: 'bold' }}>✧</span> 100% Precision Guarantee
                </div>
            </div>
        </div>
    );
};

export default GemPolishingService;
