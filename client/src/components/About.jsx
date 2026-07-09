import { motion } from "framer-motion";
import { FiAward, FiTrendingUp, FiCode } from "react-icons/fi";

const stats = [
  { icon: <FiAward size={28} />, label: "CGPA", value: "8.5/10" },
  { icon: <FiTrendingUp size={28} />, label: "University Rank", value: "2nd Position" },
  { icon: <FiCode size={28} />, label: "Languages", value: "Java, JS" }
];

export default function About() {
  return (
    <section id="about" style={{ background: "#0A0A0A", color: "white", borderRadius: "40px 40px 0 0" }}>
      <div className="container">
        <span className="section-label" style={{ background: "#FFD4B8", color: "black" }}>About Me</span>
        <h2 className="section-title">Passionate about building <span style={{ color: "#C5F932" }}>real-world</span> applications.</h2>
        <p style={{ color: "#B5B5B5", maxWidth: 700, fontSize: 18, marginBottom: 48 }}>
          I am a Computer Science student passionate about full-stack development, backend engineering, and problem solving. I enjoy building real-world applications using the MERN stack and continuously improving my skills through projects, DSA practice, and hands-on learning.
        </p>
        <div className="grid grid-3">
          {stats.map((s, i) => (
            <motion.div key={i} className="card" style={{ background: "#FFD4B8", color: "#0A0A0A" }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              {s.icon}
              <h3 style={{ fontSize: 32, marginTop: 16, marginBottom: 4 }}>{s.value}</h3>
              <p style={{ fontWeight: 500 }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}