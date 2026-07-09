import { motion } from "framer-motion";

const categories = [
  { name: "Frontend", color: "#C5F932", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
  { name: "Backend", color: "#FFD4B8", items: ["Node.js", "Express.js"] },
  { name: "Database", color: "#C5F932", items: ["MongoDB", "Mongoose"] },
  { name: "Languages", color: "#FFD4B8", items: ["Java", "JavaScript"] },
  { name: "Tools", color: "#C5F932", items: ["Git", "GitHub", "VS Code", "Postman"] }
];

export default function TechStack() {
  return (
    <section id="tech">
      <div className="container">
        <span className="pressable section-label">Tech Stack</span>
        <h2 className="section-title">Tools & technologies I work with.</h2>
        <p className="section-subtitle">From frontend interfaces to backend APIs and databases.</p>
        <div className="grid grid-3">
          {categories.map((cat, i) => (
            <motion.div key={cat.name} className="card" style={{ background: cat.color }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}>
              <h3 style={{ fontSize: 22, marginBottom: 16 }}>{cat.name}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.items.map(item => (
                  <span key={item} style={{ background: "white", border: "2px solid #0A0A0A", borderRadius: 50, padding: "6px 14px", fontSize: 14, fontWeight: 500 }}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}