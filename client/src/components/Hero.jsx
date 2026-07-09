import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from "react-icons/fi";
import Pic from "../assets/prof1.jpeg";

export default function Hero() {
  return (
    <section style={{ paddingTop: 160, paddingBottom: 80 }}>
      <div
        className="container hero-grid"
        style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "80px",
            alignItems: "center",
        }}
        >
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  }}
>
  <span className="section-label">
    👋 Available for opportunities
  </span>

  <h1
    style={{
      fontSize: "clamp(3rem, 7vw, 5.5rem)",
      lineHeight: "0.95",
      fontWeight: "800",
      letterSpacing: "-2px",
    }}
  >
    Anshika
  </h1>

  <p
    style={{
      fontSize: "1.35rem",
      fontWeight: "600",
      color: "#222",
    }}
  >
    Computer Science Student & MERN Stack Developer
  </p>

  <p
  className="hero-description"
  style={{
    color: "#666",
    maxWidth: "600px",
    fontSize: "1.05rem",
    lineHeight: "1.8",
  }}
>
    Building scalable web applications, AI-powered
    tools, and real-world digital solutions using
    MongoDB, Express.js, React.js, and Node.js.
  </p>

  <div className="hero-links"
    style={{
      display: "flex",
      gap: "14px",
      flexWrap: "wrap",
      marginTop: "10px",
    }}
  >
    <a href="#projects" className="btn btn-dark">
      View Projects <FiArrowRight />
    </a>

    <a href="/Resume_anshika_updated.pdf" download="Anshika_Resume.pdf" className="btn">
        Download Resume <FiDownload />
    </a>

    <a href="#contact" className="btn btn-peach">
      Contact Me
    </a>
  </div>

  <div className="hero-links"
    style={{
      display: "flex",
      gap: "14px",
      marginTop: "8px",
    }}
  >
    <a
      href="https://github.com/0xanshika" 
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
      style={{ padding: 12, borderRadius: "50%" }}
    >
      <FiGithub />
    </a>

    <a
      href="https://linkedin.com/in/anshika-rana-b98425291"
      className="btn"
      style={{ padding: 12, borderRadius: "50%" }}
    >
      <FiLinkedin />
    </a>

    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=anshikarana1581@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
      style={{ padding: 12, borderRadius: "50%" }}
    >
      <FiMail />
    </a>
  </div>
</motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ position: "relative", height: 500 }}>
          <div style={{
            position: "absolute", inset: 0, background: "#C5F932",
            border: "3px solid #0A0A0A", borderRadius: 32, transform: "rotate(-3deg)"
          }} />
            <div
  style={{
    position: "absolute",
    inset: 0,
    background: "#fff",
    border: "3px solid #0A0A0A",
    borderRadius: 32,
    transform: "rotate(3deg)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <img
  src={Pic}
  alt="Anshika Rana"
  className="hero-image"
  style={{
    borderRadius: "28px",
    objectFit: "cover",
  }}
/>
</div>
        </motion.div>
      </div>

     <style>{`
      .hero-image {
  width: 100%;
  max-width: 320px; /* adjust as needed */
  height: auto;
  border-radius: 28px;
  object-fit: cover;
}
  @media (max-width: 1100px) {
    .hero-grid {
      grid-template-columns: 1fr !important;
      gap: 50px !important;
      text-align: center;
    }

    .hero-description {
      margin-left: auto;
      margin-right: auto;
    }
    
    .hero-links {
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 900px) {
    .hero-image {
      width: 70%;
      height: 70%;
    }
  }
`}</style>
    </section>
  );
}