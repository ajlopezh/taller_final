import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import smile from "../assets/smile.png";
import { useUserStore } from "../store/userStore";

const Login = () => {
  const navigate = useNavigate();
  const loginUser = useUserStore((state) => state.loginUser);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = loginUser(formData.email, formData.password);

    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

    setErrorMessage("");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
        <div className="mb-12 flex flex-col items-center">
          <div className="mb-4">
            <img src={smile} alt="Smile Icon" className="h-[64px] w-[64px]" />
          </div>

          <h1 className="mb-2 text-4xl font-bold text-slate-800">Welcome!</h1>
          <p className="text-lg text-slate-400">Sign in to your account</p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="relative group">
            <label className="mb-1 block text-lg text-slate-400 transition-colors group-focus-within:text-blue-500">
              Email
            </label>

            <div className="relative border-b border-gray-200 transition-all group-focus-within:border-blue-500">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent py-2 pr-10 text-slate-700 focus:outline-none"
                placeholder="Ingresa tu correo"
              />
            </div>
          </div>

          <div className="relative group">
            <label className="mb-1 block text-lg text-slate-400 transition-colors group-focus-within:text-blue-500">
              Password
            </label>

            <div className="relative border-b border-gray-200 transition-all group-focus-within:border-blue-500">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent py-2 pr-10 text-slate-700 focus:outline-none"
                placeholder="Ingresa tu contraseña"
              />
            </div>
          </div>

          {errorMessage && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="flex w-3/5 items-center justify-center space-x-3 rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 active:scale-95"
          >
            <span className="text-xl">Login</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>

          <p className="text-sm text-slate-500">
            ¿No tienes cuenta?{" "}
            <Link to="/registro" className="font-medium text-blue-600 hover:text-blue-700">
              Regístrate aquí
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;