import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // later you can connect API / backend here
    if (email) {
      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.box}>
        <h2 style={styles.title}>Join the PawMart Newsletter 🐾</h2>
        <p style={styles.text}>
          Get pet care tips, exclusive deals, and new product updates straight
          to your inbox.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Subscribe
          </button>
        </form>

        {success && (
          <p style={styles.success}>🎉 Thanks for subscribing to PawMart!</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    // backgroundColor: "#16a34a",
    padding: "48px 16px",
    display: "flex",
    justifyContent: "center",
  },
  box: {
    maxWidth: "800px",
    width: "100%",
    // backgroundColor: "#ffffff",
    padding: "32px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },
  title: {
    fontSize: "28px",
    marginBottom: "8px",
  },
  text: {
    color: "#6b7280",
    marginBottom: "24px",
  },
  form: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  input: {
    flex: "1",
    minWidth: "240px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
  },
  button: {
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#16a34a",
    color: "#ffffff",
    fontWeight: 600,
    cursor: "pointer",
  },
  success: {
    marginTop: "16px",
    color: "#16a34a",
    fontWeight: 600,
  },
};

export default Newsletter;
