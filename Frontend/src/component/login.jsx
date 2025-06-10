import { useState } from "react";
import api, { setAuthToken } from "../api";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const nav = useNavigate();// this function use for redirect the user to another page
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr]   = useState("");

  const change = (evt) => setForm({ ...form, [evt.target.name]: evt.target.value });

  const submit = async (e) => {
    e.preventDefault();// This prevents the page from refreshing when the form is submitted.
    try {
      const { data } = await api.post("/login", form);
      setAuthToken(data.token);
      onLogin(data.token);
      nav("/");
    } catch (e) {
      setErr(e.response?.data?.msg || "Error");
    }
  };

  return (
    <form onSubmit={submit} className="card">
      <h2>Login</h2>
      <input name="email"    placeholder="Email"    value={form.email} onChange={change} required />
      <input name="password" placeholder="Password" value={form.password} type="password" onChange={change} required />
      <button>Sign in</button>
      {err && <p style={{ color: "red" }}>{err}</p>}
    </form>
  );
}
export default  Login;