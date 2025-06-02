import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { AuthContext } from "../AuthContext";

const SignIn = () => {
  const { setToken } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const token = await login(formData.email, formData.password);
      setToken(token);
      navigate("/");
    } catch (err) {
      setError("Login failed: " + err.message);
    }
  };

  return (
    <div className="mt-8 flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src="/Logo.png" alt="Logo" className="w-auto h-10 mx-auto" />
        <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white border border-gray-200 shadow-md rounded-lg p-6">
        {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              E-mail Address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-[#e6e6ff] px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-[#e6e6ff] px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="mt-7">
            <button
              type="submit"
              disabled={loading}
              className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white ${
                loading ? "bg-gray-400" : "bg-[#2A65B5] hover:bg-[#234f8c]"
              }`}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>

          <div className="flex flex-row items-center justify-center">
            <p className="text-center text-sm/6 text-gray-500">
              Not a member?
              <Link
                to={"/register"}
                className="font-semibold text-[#2A65B5] hover:text-indigo-500 ml-2"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
