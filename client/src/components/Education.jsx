import { motion } from "framer-motion";

const edu = [
  { level: "Bachelor of Technology", field: "Computer Science Engineering", school: "Seth Jai Parkash Mukand Lal Institute of Engineering and Technology", score: "CGPA: 8.5/10" },
  { level: "Intermediate", field: "D.A.V. Public School, Radaur", school: "", score: "91.6%" },
  { level: "Matriculation", field: "D.A.V. Public School, Radaur", school: "", score: "93.33%" }
];

export default function Education() {
  return (
    <section>
      <div className="container">
        <span className="section-label">Education</span>
        <h2 className="section-title">Academic background.</h2>
        <div style={{ display: "grid", gap: 20 }}>
          {edu.map((e, i) => (
            <motion.div key={e.level} className="card" style={{ background: i === 0 ? "#C5F932" : "#FFD4B8" }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
                <div>
                  <h3 style={{ fontSize: 22, marginBottom: 4 }}>{e.level}</h3>
                  <p style={{ fontWeight: 500, marginBottom: 4 }}>{e.field}</p>
                  {e.school && <p style={{ color: "#0A0A0A", fontSize: 14 }}>{e.school}</p>}
                </div>
                <span style={{ background: "#0A0A0A", color: "#C5F932", padding: "8px 16px", borderRadius: 50, fontWeight: 600, fontSize: 14 }}>{e.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}