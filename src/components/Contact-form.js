import React, { useState } from 'react';
import './Contact-form.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <div className="contact-details">
                <div className="address">
                    <h3>Address:</h3>
                    <p>Company location:</p>
                    <p>P.o Box:</p>
                </div>
                <div className="contact-numbers">
                    <h3>Contact Numbers:</h3>
                    <p>Phone: +254-712345678</p>
                    <p>Email: example@example.com</p>
                </div>
            </div>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className="map-container">

                {<iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.3413625362946!2d-117.1623318847773!3d32.71827059098974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9543886f62b8b%3A0x40a109a6a7bdf7e!2sSan%20Diego%20Zoo!5e0!3m2!1sen!2sus!4v1644264501569!5m2!1sen!2sus"
                    width="1000"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>}
            </div>
        </div>
    );
};

export default ContactForm;
