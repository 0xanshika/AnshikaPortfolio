import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const items = [
  {
    title: "The Weather Gazette",
    tech: ["React.js", "JavaScript", "CSS", "Weather API"],
    image: "/images/weather.png",
    github: "https://github.com/0xanshika/React-Weather-App",
  },

  {
    title: "Simon Says Game",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/simon.png",
    github: "https://github.com/0xanshika/Simon-Says-Game",
    live: "https://simon-says-game-19ue.onrender.com/",
  },

  {
    title: "Todo List App",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/todo.png",
    github: "https://github.com/0xanshika/ToDoList",
  },

  {
    title: "Wedding Planning",
    tech: ["HTML", "CSS"],
    image: "/images/wedding.png",
    github: "https://github.com/0xanshika/wedding-planner-website",
  },
];

export default function MiniProjects() {
  return (
    <section style={{ background: "#0A0A0A", color: "white" }}>
      <div className="container">
        <span className="section-label" style={{ background: "#FFD4B8" ,color:"black" }}>Mini Projects</span>
        <h2 className="section-title">Small experiments, big learnings.</h2>
        <div className="grid grid-4">
          {items.map((it, i) => (
            <motion.div key={it.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              style={{ background: "white", color: "#0A0A0A", border: "3px solid #0A0A0A", borderRadius: 20, padding: 24 }}>
              <div
              style={{
                width: "100%",
                height: 180,
                overflow: "hidden",
                borderRadius: 12,
                border: "2px solid #0A0A0A",
                marginBottom: 16,
              }}
            >
              <img
                src={it.image}
                alt={it.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>{it.title}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {it.tech.map(t => (
                  <span key={t} style={{ background: "#C5F932", border: "2px solid #0A0A0A", borderRadius: 50, padding: "3px 10px", fontSize: 12, fontWeight: 500 }}>{t}</span>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginTop: 16,
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={it.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  style={{ fontSize: 12, padding: "8px 12px" }}
                >
                  <FiGithub />
                  GitHub
                </a>

                {it.live && (
                  <a
                    href={it.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ fontSize: 12, padding: "8px 12px" }}
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}