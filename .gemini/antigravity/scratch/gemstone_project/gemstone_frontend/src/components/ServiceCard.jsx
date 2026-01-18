import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, link, btnText = "Learn More", image }) => {
    return (
        <div className="service-card">
            {image && <img src={image} alt={title} className="service-card-image" />}
            <div className="service-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={link} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    {btnText}
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
