import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../services/api";

export default function Login() {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await adminLogin(creds);
      localStorage.setItem("token", data.token);
      navigate("/admin");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <form onSubmit={submit} style={{ background: "#FFD4B8", border: "3px solid #0A0A0A", borderRadius: 24, padding: 40, width: "100%", maxWidth: 400 }}>
        <h2 style={{ marginBottom: 8 }}>Admin Login</h2>
        <p style={{ color: "#6B6B6B", marginBottom: 24 }}>Access your dashboard</p>
        <input type="text" placeholder="Username" required value={creds.username} onChange={e => setCreds({ ...creds, username: e.target.value })}
          style={{ width: "100%", padding: 14, border: "2px solid #0A0A0A", borderRadius: 12, marginBottom: 12, fontFamily: "Inter" }} />
        <input type="password" placeholder="Password" required value={creds.password} onChange={e => setCreds({ ...creds, password: e.target.value })}
          style={{ width: "100%", padding: 14, border: "2px solid #0A0A0A", borderRadius: 12, marginBottom: 16, fontFamily: "Inter" }} />
        <button type="submit" className="btn btn-dark" style={{ width: "100%", justifyContent: "center" }}>Login</button>
        {error && <p style={{ color: "red", marginTop: 12, textAlign: "center" }}>{error}</p>}
      </form>
    </div>
  );
}