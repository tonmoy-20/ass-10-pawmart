import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>About PawMart</h1>

        <p style={styles.text}>
          PawMart is a trusted online destination for pet lovers, offering
          high-quality food, toys, accessories, and grooming products for your
          furry companions.
        </p>

        <p style={styles.text}>
          We believe pets are family. That’s why PawMart focuses on delivering
          safe, reliable, and affordable pet products that support a healthy and
          happy lifestyle for dogs, cats, and other pets.
        </p>

        <div style={styles.features}>
          <div style={styles.feature}>
            <MdOutlinePets /> <strong>Pet-Friendly Products</strong>
            <p>Carefully selected items for your pet’s comfort and safety.</p>
          </div>

          <div style={styles.feature}>
            <TbTruckDelivery />
            <strong>Fast & Reliable Delivery</strong>
            <p>Quick delivery so your pets never run out of essentials.</p>
          </div>

          <div style={styles.feature}>
            <VscWorkspaceTrusted />
            <strong>Trusted by Pet Lovers</strong>
            <p>Thousands of happy pet parents choose PawMart.</p>
          </div>
        </div>

        <p style={styles.footerText}>
          Thank you for choosing <strong>PawMart</strong> — because your pet
          deserves the best 🐾
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",

    padding: "48px 16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    maxWidth: "900px",
    // backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
    textAlign: "center",
  },
  text: {
    fontSize: "16px",
    // color: "#374151",
    lineHeight: 1.8,
    marginBottom: "16px",
    textAlign: "center",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
    marginTop: "32px",
    marginBottom: "32px",
  },
  feature: {
    // backgroundColor: "#f3f4f6",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
  },
  footerText: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 600,
    color: "#16a34a",
  },
};

export default About;
