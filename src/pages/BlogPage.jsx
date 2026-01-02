import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Best Food for Your Pet",
    excerpt:
      "Learn how to select nutritious and balanced food that keeps your pet healthy and happy.",
    image: "https://images.unsplash.com/photo-1601758064226-0c3c5e4f4f77",
    date: "Jan 5, 2026",
    author: "PawMart Team",
  },
  {
    id: 2,
    title: "5 Essential Grooming Tips for Dogs",
    excerpt:
      "Regular grooming improves your dog’s health. Here are 5 easy tips every dog owner should follow.",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
    date: "Jan 2, 2026",
    author: "PawMart Team",
  },
  {
    id: 3,
    title: "Top Toys That Keep Cats Active Indoors",
    excerpt:
      "Discover the best toys to keep your indoor cats entertained and physically active.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    date: "Dec 28, 2025",
    author: "PawMart Team",
  },
];

const Blog = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>PawMart Blog</h1>
      <p style={styles.subtitle}>
        Tips, guides, and insights to keep your pets healthy and happy
      </p>

      <div style={styles.grid}>
        {blogPosts.map((post) => (
          <div key={post.id} style={styles.card}>
            <img
              className="object-cover"
              src={post.image}
              alt={post.title}
              style={styles.image}
            />
            <div style={styles.content}>
              <p style={styles.meta}>
                {post.date} • {post.author}
              </p>
              <h2 style={styles.cardTitle}>{post.title}</h2>
              <p style={styles.excerpt}>{post.excerpt}</p>
              <button style={styles.button}>Read More</button>
            </div>
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
    // backgroundColor: "#f9fafb",
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
  grid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    // backgroundColor: "#ffffff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  content: {
    padding: "20px",
    flexGrow: 1,
  },
  meta: {
    fontSize: "12px",
    color: "#6b7280",
    marginBottom: "6px",
  },
  cardTitle: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  excerpt: {
    fontSize: "14px",
    color: "#374151",
    marginBottom: "16px",
  },
  button: {
    alignSelf: "flex-start",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#16a34a",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: 600,
  },
};

export default Blog;
