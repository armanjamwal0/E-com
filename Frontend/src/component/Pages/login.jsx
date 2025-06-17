import { useState } from "react";
import api from "../../api";
import { useNavigate, Link } from "react-router-dom";
import Inputbutton from "../inputs/input";
function Login({ setAuthenticated }) {
  const nav = useNavigate(); // this function use for redirect the user to another page
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");

  const change = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault(); // This prevents the page from refreshing when the form is submitted.
    try {
      const { data } = await api.post("/login", form);
      setAuthenticated(true);
      console.log("login");
      nav("/home");
    } catch (e) {
      setErr(e.response?.data?.msg || "Error");
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            {err && <p style={{ color: "red" }}>{err}</p>}
            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
              <Inputbutton
                label={"Your email"}
                type={"email"}
                name={"email"}
                id={"email"}
                onchange={change}
                placeholder={"name@company.com"}
              />
              <Inputbutton
                label={"Password"}
                type={"password"}
                name={"password"}
                id={"password"}
                onchange={change}
                placeholder={"••••••••"}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white  bg-blue-500 hover:bg-blue-900  focus:ring-primary-300    font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
