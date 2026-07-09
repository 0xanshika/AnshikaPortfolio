import { motion } from "framer-motion";

const topics = [
  "Arrays", "Strings", "Linked Lists", "Stacks", "Queues",
  "Trees", "Graphs", "Recursion", "Backtracking", "Greedy Algorithms", "Dynamic Programming"
];

export default function DSAJourney() {
  return (
    <section id="dsa" style={{ background: "#0A0A0A", color: "white" }}>
      <div className="container">
        <span className="section-label" style={{ background: "#C5F932" }}>DSA Journey</span>
        <h2 className="section-title">Problem solving with <span style={{ color: "#C5F932" }}>Java</span></h2>
        <p style={{ color: "#B5B5B5", maxWidth: 600, marginBottom: 48 }}>
          A structured path through Data Structures & Algorithms — building strong fundamentals one topic at a time.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {topics.map((t, i) => (
            <motion.div key={t}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              style={{
                background: "#1A1A1A", border: "2px solid #2A2A2A", borderRadius: 16,
                padding: "20px 24px", display: "flex", alignItems: "center", gap: 12,
                fontWeight: 500, color: i % 2 === 0 ? "#C5F932" : "#FFD4B8"
              }}>
              <span style={{ fontFamily: "Space Grotesk", fontSize: 14, opacity: 0.6 }}>0{i + 1}</span>
              <span style={{ color: "white" }}>{t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}