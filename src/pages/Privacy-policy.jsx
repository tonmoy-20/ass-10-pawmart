import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.updated}>Last updated: January 1, 2026</p>

        <section style={styles.section}>
          <p>
            Welcome to <strong>Pawmart</strong>. Your privacy is important to
            us. This Privacy Policy explains how we collect, use, disclose, and
            protect your information when you use our website or services.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>1. Information We Collect</h2>
          <ul style={styles.list}>
            <li>
              <strong>Personal Information:</strong> Name, email address,
              shipping address, phone number, and payment details.
            </li>
            <li>
              <strong>Account Information:</strong> Login credentials and order
              history.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, device information,
              browser type, and IP address.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>2. How We Use Your Information</h2>
          <ul style={styles.list}>
            <li>To process orders and payments</li>
            <li>To provide customer support</li>
            <li>To improve Pawmart’s features and user experience</li>
            <li>To send order updates and promotional emails (optional)</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>3. Sharing Your Information</h2>
          <p>
            We do not sell your personal data. We may share information with
            trusted third parties such as payment processors, shipping partners,
            and analytics providers solely to operate our services.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>4. Cookies and Tracking</h2>
          <p>
            Pawmart uses cookies to enhance your browsing experience, analyze
            traffic, and remember your preferences. You can disable cookies in
            your browser settings.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>6. Your Rights</h2>
          <ul style={styles.list}>
            <li>Access or update your personal data</li>
            <li>Request deletion of your account</li>
            <li>Opt out of marketing communications</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>7. Children’s Privacy</h2>
          <p>
            Pawmart does not knowingly collect personal information from
            children under the age of 13.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated date.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
            <br />
            <strong>Email:</strong> support@pawmart.com
          </p>
        </section>
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
  },
  card: {
    maxWidth: "900px",
    // backgroundColor: "#ffffff",
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    lineHeight: 1.7,
  },
  title: {
    fontSize: "32px",
    marginBottom: "8px",
  },
  updated: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "24px",
  },
  section: {
    marginBottom: "24px",
  },
  heading: {
    fontSize: "20px",
    marginBottom: "8px",
  },
  list: {
    paddingLeft: "20px",
  },
};

export default PrivacyPolicy;
