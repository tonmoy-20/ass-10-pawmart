import React from "react";

const faqs = [
  {
    question: "What is PawMart?",
    answer:
      "PawMart is an online pet shop offering quality food, toys, accessories, and grooming products for your pets.",
  },
  {
    question: "How can I place an order?",
    answer:
      "Simply browse products, add them to your cart, and proceed to checkout using your account.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, mobile banking, and cash on delivery (where available).",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Orders are usually delivered within 2–5 business days depending on your location.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes, unused products can be returned within 7 days of delivery. Terms & conditions apply.",
  },
];

const Faq = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Frequently Asked Questions</h1>
      <p style={styles.subtitle}>Everything you need to know about PawMart</p>

      <div style={styles.box}>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.item}>
            <h3 style={styles.question}>{faq.question}</h3>
            <p style={styles.answer}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",

    padding: "48px 16px",
  },
  title: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "8px",
  },
  subtitle: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: "40px",
  },
  box: {
    maxWidth: "900px",
    margin: "0 auto",
    // backgroundColor: "#ffffff",
    borderRadius: "14px",
    padding: "32px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  },
  item: {
    marginBottom: "24px",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "16px",
  },
  question: {
    fontSize: "18px",
    marginBottom: "6px",
    // color: "#111827",
  },
  answer: {
    // color: "#374151",
    fontSize: "14px",
    lineHeight: 1.6,
  },
};

export default Faq;
