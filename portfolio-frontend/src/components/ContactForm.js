import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/contact/', formData)
            .then(response => alert('Message sent successfully!'))
            .catch(error => console.error(error));
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
            <button type="submit">Send</button>
        </form>
    )
};

export default ContactForm;