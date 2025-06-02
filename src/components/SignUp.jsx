import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.email !== formData.confirmEmail) {
      setError("Email and confirm email do not match.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Password and confirm password do not match.");
      return;
    }
    if (!formData.level) {
      setError("Please select your level.");
      return;
    }

    try {
      setLoading(true);

      await register(
        formData.name,
        formData.surname,
        formData.email,
        formData.password,
        formData.level
      );

      setSuccess("Account successfully created.");
      setFormData({
        name: "",
        surname: "",
        level: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setError("An error occurred during registration: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <img src="/Logo.png" alt="Logo" className="w-auto h-10 mx-auto" />
        <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-2xl bg-white border border-gray-200 shadow-md rounded-lg p-6">
        {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}
        {success && (
          <div className="mb-4 text-green-600 font-medium">{success}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-row gap-5 items-center">
            <div className="flex flex-col w-full">
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-[#e6e6ff] px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="surname"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Surname
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-[#e6e6ff] px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="level"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Choose your level
            </label>
            <select
              name="level"
              id="level"
              value={formData.level}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-md bg-[#e6e6ff] px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              <option value="">— Select —</option>
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          <div className="flex flex-row gap-5 items-center">
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                E-Mail
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
            <div className="w-full">
              <label
                htmlFor="confirmEmail"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Confirm E-Mail
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="confirmEmail"
                  id="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-[#e6e6ff] px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-5 items-center">
            <div className="w-full">
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
                  className="block w-full rounded-md bg-[#e6e6ff] px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="confirmPassword"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-[#e6e6ff] px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
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
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
