import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { sendMessage } from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(form);
      setStatus("Message sent successfully ✓");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send. Try again.");
    }
  };

  return (
    <section id="contact" style={{ background: "#0A0A0A", color: "white" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="contact-grid">
          <div>
            <span className="section-label" style={{ background: "#C5F932" , color:"black"}}>Get in touch</span>
            <h2 className="section-title">Let's build something <span style={{ color: "#C5F932" }}>great</span> together.</h2>
            <p style={{ color: "#B5B5B5", marginBottom: 32 }}>Open to internships, freelance work, and collaborations.</p>
            <div style={{ display: "grid", gap: 16, marginBottom: 32 }}>
              <a href="mailto:anshikarana1581@gmail.com" style={{ display: "flex", alignItems: "center", gap: 16, background: "#1A1A1A", border: "2px solid #2A2A2A", borderRadius: 16, padding: 20, color: "white", textDecoration: "none" }}>
                <div style={{ background: "#C5F932", color: "#0A0A0A", padding: 12, borderRadius: 12 }}><FiMail size={20} /></div>
                <div><p style={{ fontSize: 12, color: "#B5B5B5" }}>Email</p><p style={{ fontWeight: 500 }}>anshikarana1581@gmail.com</p></div>
              </a>
              <a href="tel:9871685304" style={{ display: "flex", alignItems: "center", gap: 16, background: "#1A1A1A", border: "2px solid #2A2A2A", borderRadius: 16, padding: 20, color: "white", textDecoration: "none" }}>
                <div style={{ background: "#FFD4B8", color: "#0A0A0A", padding: 12, borderRadius: 12 }}><FiPhone size={20} /></div>
                <div><p style={{ fontSize: 12, color: "#B5B5B5" }}>Phone</p><p style={{ fontWeight: 500 }}>+91 9871685304</p></div>
              </a>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://github.com/0xanshika" className="btn"><FiGithub /> GitHub</a>
              <a href="https://linkedin.com/in/anshika-rana-b98425291" className="btn"><FiLinkedin /> LinkedIn</a>
            </div>
          </div>

          <motion.form onSubmit={submit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: "#FFD4B8", color: "#0A0A0A", border: "3px solid black", borderRadius: 24, padding: 32 }}>
            <input type="text" placeholder="Your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
              style={{ width: "100%", padding: 16, border: "2px solid #0A0A0A", borderRadius: 12, marginBottom: 16, fontSize: 15, fontFamily: "Inter", background: "white" }} />
            <input type="email" placeholder="Your email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
              style={{ width: "100%", padding: 16, border: "2px solid #0A0A0A", borderRadius: 12, marginBottom: 16, fontSize: 15, fontFamily: "Inter", background: "white" }} />
            <textarea placeholder="Your message" required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              style={{ width: "100%", padding: 16, border: "2px solid #0A0A0A", borderRadius: 12, marginBottom: 16, fontSize: 15, fontFamily: "Inter", background: "white", resize: "vertical" }} />
            <button type="submit" className="btn btn-dark" style={{ width: "100%", justifyContent: "center" }}><FiSend /> Send Message</button>
            {status && <p style={{ marginTop: 16, textAlign: "center", fontWeight: 600 }}>{status}</p>}
          </motion.form>
        </div>
      </div>
      <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}