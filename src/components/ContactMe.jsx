import { useState } from "react";
import "../styles/ContactMe.css";
import * as emailjs from "@emailjs/browser";

// EmailJS identifiers are public by design (they ship in the browser bundle).
const SERVICE_ID = "service_7ge6p1j";
const TEMPLATE_ID = "template_s05eajo";
const PUBLIC_KEY = "uwY1mIu_Jpdhu_sGz";

const emptyForm = { name: "", email: "", subject: "", message: "" };

function ContactMe() {
    const [formData, setFormData] = useState(emptyForm);
    // Honeypot: hidden from people, so only bots fill it in.
    const [website, setWebsite] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSending) return;

        if (website) {
            setStatus({ ok: true, text: "Email sent successfully!" });
            setFormData(emptyForm);
            return;
        }

        setIsSending(true);
        setStatus(null);

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then(() => {
                setStatus({ ok: true, text: "Email sent successfully!" });
                setFormData(emptyForm);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                setStatus({ ok: false, text: "Failed to send email. Please try again." });
            })
            .finally(() => setIsSending(false));
    };

    return (
        <section id="contact">
            <div className="background-title" aria-hidden="true">CONTACT</div>
            <h2 className="section-title">CONTACT ME</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        aria-label="Your Name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    aria-label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    aria-label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <input
                    type="text"
                    name="website"
                    className="hp-field"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
                <button type="submit" className="submit-btn" disabled={isSending}>
                    {isSending ? "Sending..." : "Send Message"}
                </button>
            </form>
            <p className={`status-message ${status?.ok === false ? "error" : ""}`} role="status">
                {status?.text}
            </p>
        </section>
    );
}

export default ContactMe;
