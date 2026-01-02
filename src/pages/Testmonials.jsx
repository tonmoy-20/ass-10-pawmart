import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Dog Owner",
    message:
      "PawMart has everything I need for my dog. Fast delivery and amazing product quality!",
    avatar:
      "https://scontent.fdac167-1.fna.fbcdn.net/v/t39.30808-6/605541738_1201769348712139_7260422249591670458_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGNt9Z-Puwnf7TvE_qzTygcqq5ErSk2EkSqrkStKTYSRHOD8eQAgv-i8yIART0sHN5-7OXo9SmO5wa7jwP5L1r_&_nc_ohc=tZzSa5GLshYQ7kNvwGkcFu3&_nc_oc=Adm2E2HsZaEP4rZ9ruKG24niLAvniM4EF7uZGpF37jOwSzMT_4PYgpVWb0AJv_2rQRM&_nc_zt=23&_nc_ht=scontent.fdac167-1.fna&_nc_gid=TUsPu1MjSLENKmRMBuTkfQ&oh=00_AfreoniNBt89sOWDjoeIaTr6LrhQ9xvcDtqg8xKdgeoJhw&oe=695DD8B3",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Cat Parent",
    message:
      "Great prices and excellent customer service. My cat absolutely loves the toys!",
    avatar:
      "https://scontent.fdac167-1.fna.fbcdn.net/v/t39.30808-6/469197851_1295747818116774_3995761976578829341_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFf3599664r1JvAb_gGiGUDvtZRXyK_vda-1lFfIr-91ihpMp3dAETnmHDT2KZIEAOKBFuueWP4vX5x8PaFZ5bA&_nc_ohc=HFYm_h6YUT8Q7kNvwEPR25p&_nc_oc=AdlwP8Olf_P0C48Ga0dkP-R33o7ltKh8TeSwqi-kSbC8c-s6DZsTF0C98e1tmtCDHp0&_nc_zt=23&_nc_ht=scontent.fdac167-1.fna&_nc_gid=wIcQD65Vf6eY3PnMcKCCvg&oh=00_Afrgy_Q08cIjBK8VhqkCfSg81pnC9XhRIAPmnVqmRYGwpQ&oe=695DEE0D",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Pet Lover",
    message:
      "I trust PawMart for all my pet needs. The experience is smooth and reliable every time.",
    avatar:
      "https://scontent.fdac167-1.fna.fbcdn.net/v/t39.30808-6/520333784_1072427811646294_2979610322199619224_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGNd_gE_w7v_Ut8Jjryzl3LYe2vpIB1aoph7a-kgHVqimIhALdlL46iZ4clNjr2VgoiHdPd4OhAYbgoo_U_q2Wg&_nc_ohc=pplb0nnho5EQ7kNvwHdYLVT&_nc_oc=Adm2empHRweFQ5JwnKH8WFTCEIM1bq9NpbLoKOxsVomrmhBbFHYYE31eiaBbTa0WU2k&_nc_zt=23&_nc_ht=scontent.fdac167-1.fna&_nc_gid=99Kdv_WTCF-hI6Jgb3sy8A&oh=00_AfqistyY6m-NobDiiq74_90FTUgGX5nyndbwElt5UHke9Q&oe=695DF83F",
  },
];

const Testimonials = () => {
  return (
    <section style={styles.wrapper}>
      <h2 style={styles.title}>What Our Customers Say 🐾</h2>
      <p style={styles.subtitle}>Trusted by pet lovers all over the country</p>

      <div style={styles.grid}>
        {testimonials.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.avatar} alt={item.name} style={styles.avatar} />
            <p style={styles.message}>"{item.message}"</p>
            <h4 style={styles.name}>{item.name}</h4>
            <span style={styles.role}>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    padding: "64px 16px",
    // backgroundColor: "#f9fafb",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    marginBottom: "8px",
  },
  subtitle: {
    color: "#6b7280",
    marginBottom: "40px",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    // backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  },
  avatar: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    marginBottom: "16px",
  },
  message: {
    fontStyle: "italic",
    color: "#374151",
    marginBottom: "16px",
  },
  name: {
    fontSize: "16px",
    fontWeight: 600,
  },
  role: {
    fontSize: "13px",
    color: "#6b7280",
  },
};

export default Testimonials;
