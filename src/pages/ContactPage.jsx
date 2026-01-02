import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with API call or email service
    alert("Thanks for contacting Pawmart! We’ll get back to you soon 🐾");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          Have questions about your order or our pet products? We’d love to hear
          from you!
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Your full name"
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="you@example.com"
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={styles.textarea}
              placeholder="How can we help you?"
            />
          </div>

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>

        <div style={styles.info}>
          <h3>Pawmart Support</h3>
          <p>
            📧 <strong>Email:</strong> support@pawmart.com
          </p>
          <p>
            📞 <strong>Phone:</strong> 01304356789
          </p>
          <p>
            🕒 <strong>Hours:</strong> Mon – Fri, 9am – 6pm
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    // backgroundColor: "#f9fafb",
    padding: "40px 16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    maxWidth: "800px",
    width: "100%",
    // backgroundColor: "#ffffff",
    padding: "32px",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  },
  title: {
    fontSize: "32px",
    marginBottom: "8px",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: "32px",
  },
  form: {
    marginBottom: "32px",
  },
  field: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: 500,
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    resize: "none",
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#16a34a",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
  },
  info: {
    borderTop: "1px solid #e5e7eb",
    paddingTop: "24px",
    textAlign: "center",
    color: "#374151",
  },
};

export default Contact;
