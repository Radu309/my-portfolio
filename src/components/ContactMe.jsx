import { useState } from "react";
import "../styles/ContactMe.css";
import * as emailjs from "@emailjs/browser";


function ContactMe() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_7ge6p1j";
        const templateID = "template_s05eajo";
        const publicKey = "uwY1mIu_Jpdhu_sGz";

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then((response) => {
                console.log("Email sent successfully:", response);
                setStatus("Email sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                setStatus("Failed to send email. Please try again.");
            });
    };

    return (
        <section id="contact">
            <h1 className="background-title">CONTACT</h1>
            <h2 className="section-title">CONTACT ME</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
            {status && <p className="status-message">{status}</p>}
        </section>
    );
}

export default ContactMe;
