import { motion } from "framer-motion";
import {
  FiAward,
  FiVideo,
  FiUsers
} from "react-icons/fi";

const achievements = [
  {
    title: "Three-Time University Rank Holder",
    desc: "Achieved university ranks across multiple semesters, securing 2nd position in the 3rd semester, 4th position in the 4th semester, and 5th position in the 5th semester among students of affiliated colleges under Kurukshetra University.",
    icon: FiAward
  },
  {
    title: "Digital & Videography Coordinator",
    desc: "Managed digital promotions, videography, and outreach activities for the college cultural fest.",
    icon: FiVideo
  },
  {
    title: "Co-Convener, Personality Development Club",
    desc: "Planned and organized events including Zest Day and Professional Fiesta.",
    icon: FiUsers
  }
];

export default function Achievements() {
  return (
    <section style={{ background: "#0A0A0A", color: "white" }}>
      <div className="container">
        <span
          className="section-label"
          style={{ background: "#C5F932", color:"black" }}
        >
          Achievements
        </span>

        <h2 className="section-title">
          Milestones along the way.
        </h2>

        <div style={{ display: "grid", gap: 20 }}>
          {achievements.map((a, i) => {
            const Icon = a.icon;

            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 24,
                  alignItems: "center",
                  background: "#1A1A1A",
                  border: "2px solid #2A2A2A",
                  borderRadius: 20,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "#C5F932",
                    color: "#0A0A0A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid #0A0A0A",
                  }}
                >
                  <Icon size={30} />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: 20,
                      marginBottom: 6,
                    }}
                  >
                    {a.title}
                  </h3>

                  <p
                    style={{
                      color: "#B5B5B5",
                      lineHeight: 1.6,
                    }}
                  >
                    {a.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}