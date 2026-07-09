import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function AdminDashboard() {
  const [tab, setTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [certs, setCerts] = useState([]);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/projects").then(r => setProjects(r.data));
    API.get("/certificates").then(r => setCerts(r.data));
    API.get("/contact").then(r => setMessages(r.data)).catch(() => {});
  }, []);

  const logout = () => { localStorage.removeItem("token"); navigate("/"); };

  return (
    <div style={{ minHeight: "100vh", background: "#FAF7F0" }}>
      <header style={{ background: "#0A0A0A", color: "white", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ fontSize: 20 }}>Admin Dashboard</h2>
        <button onClick={logout} className="btn btn-primary" style={{ padding: "8px 20px", fontSize: 14 }}>Logout</button>
      </header>
      <div style={{ display: "flex", gap: 12, padding: 24, borderBottom: "3px solid #0A0A0A" }}>
        {["projects", "certificates", "messages"].map(t => (
          <button key={t} onClick={() => setTab(t)} className="btn" style={{ background: tab === t ? "#C5F932" : "white" }}>{t}</button>
        ))}
      </div>
      <div style={{ padding: 40 }}>
        {tab === "projects" && (
          <div>
            <h2 style={{ marginBottom: 24 }}>Projects ({projects.length})</h2>
            {projects.map(p => (
              <div key={p._id} className="card" style={{ background: "white", marginBottom: 16, display: "flex", justifyContent: "space-between" }}>
                <div><h3>{p.title}</h3><p style={{ color: "#6B6B6B" }}>{p.description}</p></div>
                <button className="btn btn-dark">Delete</button>
              </div>
            ))}
          </div>
        )}
        {tab === "certificates" && (
          <div>
            <h2 style={{ marginBottom: 24 }}>Certificates ({certs.length})</h2>
            {certs.map(c => (
              <div key={c._id} className="card" style={{ background: "white", marginBottom: 16 }}>
                <h3>{c.title}</h3><p style={{ color: "#6B6B6B" }}>{c.organization}</p>
              </div>
            ))}
          </div>
        )}
        {tab === "messages" && (
          <div>
            <h2 style={{ marginBottom: 24 }}>Messages ({messages.length})</h2>
            {messages.map(m => (
              <div key={m._id} className="card" style={{ background: "white", marginBottom: 16 }}>
                <h3>{m.name}</h3><p style={{ color: "#6B6B6B" }}>{m.email}</p><p style={{ marginTop: 8 }}>{m.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}