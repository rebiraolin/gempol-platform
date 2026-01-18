import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import { sendContactMessage } from '../services/api';

/**
 * ContactUs Page
 * General contact form for inquiries with Luxury Theme.
 */
const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });
        try {
            await sendContactMessage(formData);
            setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container section">
            <div className="text-center mb-lg">
                <h2 style={{ marginBottom: '0.5rem' }}>Get In Touch</h2>
                <p style={{ color: 'var(--text-tertiary)' }}>Expert support for your gemstone engineering inquiries.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
                {/* Contact Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="glass-card" style={{ padding: '1.5rem' }}>
                        <h4 style={{ color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>Global HQ</h4>
                        <p style={{ fontSize: '0.95rem' }}>Addis Ababa Science and Technology University<br />Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="glass-card" style={{ padding: '1.5rem' }}>
                        <h4 style={{ color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>Email Inquiries</h4>
                        <p style={{ fontSize: '0.95rem' }}>support@gempol.test</p>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="form-container" style={{ margin: 0, width: '100%', maxWidth: 'none' }}>
                    <FormInput label="Full Name" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Abebe Kebede" />
                    <FormInput label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="abekebe@example.com" />
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-control"
                            rows="5"
                            required
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', marginTop: '1rem' }}>
                        {loading ? 'Sending Message...' : 'Transmit Message'}
                    </button>

                    {status.message && (
                        <div className={`message ${status.type}`} style={{ marginTop: '1.5rem' }}>
                            {status.message}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
