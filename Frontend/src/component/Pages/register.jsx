import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr]   = useState("");

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", form);
      nav("/login");// when regisetr are complete then go to login page
    } catch (e) {
      setErr(e.response?.data?.msg || "Error");
    }
  };

  return (
    <form onSubmit={submit} className="card">
      <h2>Register</h2>
      <input name="email"    placeholder="Email"    value={form.email} onChange={change} required />
      <input name="password" placeholder="Password" value={form.password} type="password" onChange={change} required />
      <button>Sign up</button>
      {err && <p style={{ color: "red" }}>{err}</p>}
    </form>
  );
}
export default  Register;