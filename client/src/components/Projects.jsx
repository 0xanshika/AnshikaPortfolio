import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "PG Finder",
    description:
      "A modern PG listing platform that enables users to explore verified accommodations, view details, and find the perfect stay effortlessly.",
    features: [
      "Authentication",
      "Authorization",
      "Property Listings",
      "Image Upload",
      "Reviews",
      "CRUD Operations",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS"],

    github: "https://github.com/0xanshika/PgFinder.git",
    live: "https://pgfinder-d6xr.onrender.com",

    image: "/images/pgfinder.png",
  },

  {
    title: "MargAI",
    description:
      "AI-powered personal study companion built using the MERN stack.",
    features: [
      "AI Chat",
      "Real-Time Responses",
      "API Integration",
      "Scalable Backend",
      "Study Assistance",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "External APIs"],

    github: "https://github.com/yourusername/margai",
    live: "https://vm-85j0t585mhq41jv6bk6a3o40.vusercontent.net/",

    image: "/images/margai.png",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-label">Featured Work</span>
        <h2 className="section-title">Selected projects.</h2>
        <p className="section-subtitle">Real-world applications built with the MERN stack.</p>
        <div style={{ display: "grid", gap: 32 }}>
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="card" style={{ background: i % 2 === 0 ? "#FFD4B8" : "#C5F932", padding: 40 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 32, alignItems: "center" }} className="project-grid">
                <div>
                  <h3 style={{ fontSize: 32, marginBottom: 12 }}>{p.title}</h3>
                  <p style={{ marginBottom: 20, fontSize: 16 }}>{p.description}</p>
                  <h4 style={{ fontSize: 14, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Features</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                    {p.features.map(f => (
                      <span key={f} style={{ background: "white", border: "2px solid #0A0A0A", borderRadius: 50, padding: "4px 12px", fontSize: 13 }}>{f}</span>
                    ))}
                  </div>
                  <h4 style={{ fontSize: 14, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Tech Stack</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                    {p.tech.map(t => (
                      <span key={t} style={{ background: "#0A0A0A", color: "white", borderRadius: 50, padding: "4px 12px", fontSize: 13, fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark"
                    >
                      <FiGithub /> GitHub
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    background: "white",
                    border: "3px solid #0A0A0A",
                    borderRadius: 24,
                    overflow: "hidden",
                    
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.project-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}