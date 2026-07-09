import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const certs = [
  {
    title: "MERN Stack Development",
    org: "Apna College",
    image: "/certificate-images/MERN.png",
    pdf: "/certificates/apnaClgMERN.pdf",
  },
  {
    title: "Data Structures & Algorithms",
    org: "Apna College",
    image: "/certificate-images/DSA.png",
    pdf: "/certificates/apnaClgDSA.pdf",
  },
  {
    title: "Second Position Holder",
    org: "Kurukshetra University",
    image: "/certificate-images/uniPos.jpeg",
    pdf: "/certificates/UniversityPosition.pdf",
  },
  {
    title: "Technical Team Coordinator",
    org: "JMIT Cultural Fest",
    image: "/certificate-images/enchanteTechCerti.jpeg",
    pdf: "/certificates/enchante.pdf",
  },
];

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="container">
        <span className="section-label">Certificates</span>
        <h2 className="section-title">Recognitions & certifications.</h2>
        <div className="grid grid-3">
          {certs.map((c, i) => (
            <motion.div key={c.title} className="card" style={{ background: i % 2 === 0 ? "#FFD4B8" : "#C5F932", padding: 0, overflow: "hidden" }}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <div
                style={{
                  height: 220,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: "#C5F932",
                    color: "#0A0A0A",
                    borderRadius: "50px",
                    padding: "4px 12px",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  VERIFIED
                </div>
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 18, marginBottom: 6 }}>{c.title}</h3>
                <p style={{ color: "#0A0A0A", fontWeight: 500, fontSize: 14, marginBottom: 4 }}>{c.org}</p>
                <a
                  href={c.pdf}
                  download
                  className="btn"
                  style={{
                    padding: "8px 16px",
                    fontSize: 13,
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  Download Certificate <FiExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}