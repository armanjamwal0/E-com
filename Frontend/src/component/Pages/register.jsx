import { useState } from "react";
import api from "../../api";
import Inputbutton from "../inputs/input";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({name: "", email: "", password: "" });
  const [err, setErr] = useState("");

  const change = (e) => {
    const {name , value} = e.target;
    setForm({ ...form, [name]: value })
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", form);
      nav("/login"); // when regisetr are complete then go to login page
    } catch (e) {
      setErr(e.response?.data?.msg || "Error");
    }
  };

  return (
    // <form onSubmit={submit} className="card">
    //   <h2>Register</h2>
    //   <input name="email"    placeholder="Email"    value={form.email} onChange={change} required />
    //   <input name="password" placeholder="Password" value={form.password} type="password" onChange={change} required />
    //   <button>Sign up</button>
     
    // </form>
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
              {err && <p style={{ color: "red" }}>{err}</p>}
              <Inputbutton
                label={"Username"}
                type={"name"}
                id={"username"}
                name={"name"}
                placeholder={"username"}
                onchange={change}
                value={form.name}
                required
              />

              <Inputbutton
                label={"Your Email"}
                type={"email"}
                name={"email"}
                id={"email"}
                onchange={change}
                placeholder={"name@company.com"}
                value={form.email}
                required
              />
              <Inputbutton
                label={"Password"}
                type={"password"}
                name={"password"}
                id={"password"}
                onchange={change}
                placeholder={"••••••••"}
                value={form.password}
                required
              />
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <Link
                      to={'#'}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Terms and conditions
                    </Link>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white  bg-blue-500 hover:bg-blue-900  focus:ring-primary-300    font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Register;
