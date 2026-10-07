import "./FormStyles.css"
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // ✅ Validation
    const formData = new FormData(form.current);
    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
      setStatus("Please fill all required fields.");
      return;
    }

    emailjs.sendForm(
      "service_vooo2l9",
      "template_9xn0tfi",
      form.current,
      "D_xRH4zsoRlXwgw6l"
    )
    .then(() => {
      setStatus("Message sent successfully! ✅");
      form.current.reset();
    })
    .catch(() => {
      setStatus("Failed to send message ❌");
    });
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail} className="form">

        <h2>Contact Me</h2>

        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Email Address" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" rows="6" placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <textarea name="message" required />

        {/* ✅ Success / Error Message */}
         {status && (
        <p className={`status ${status.includes("successfully") ? "success" : "error"}`}>
          {status}
        </p>
      )}
      </form>
    </div>
  )
}

export default ContactForm;