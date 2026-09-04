import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Connect to backend via AuthContext/authService
      await login({
        email: formData.email,
        password: formData.password,
      });

      navigate("/dashboard");
    } catch (err) {
      setServerError(err.message || "Invalid email or password.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-canvas flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-surface border border-border p-8 rounded-sm shadow-none">
        {/* Brand Header */}
        <div className="mb-6 text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 font-sans">
            Eco-Monitor Authentication
          </span>
          <h1 className="font-serif text-3xl font-bold text-ink mt-1">
            Sign In
          </h1>
          <p className="text-xs text-ink-muted mt-1 font-sans">
            Access your real-time home energy intelligence
          </p>
        </div>

        {/* Global Server Error Banner */}
        {serverError && (
          <div className="mb-6 p-3 bg-red-50 border border-warn/30 text-warn text-xs rounded-sm font-sans">
            {serverError}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 font-sans" noValidate>
          {/* Email Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="mayank@example.com"
              className={`w-full px-3 py-2 text-sm bg-canvas border rounded-sm focus:outline-none transition-colors ${errors.email ? "border-warn focus:border-warn" : "border-border focus:border-ink"
                }`}
            />
            {errors.email && (
              <p className="text-[11px] text-warn font-semibold mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Input & Forgot Password Link */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-ink">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-[11px] font-sans text-ink-muted hover:text-ink underline transition-colors"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-3 py-2 text-sm bg-canvas border rounded-sm focus:outline-none transition-colors ${errors.password
                  ? "border-warn focus:border-warn"
                  : "border-border focus:border-ink"
                }`}
            />
            {errors.password && (
              <p className="text-[11px] text-warn font-semibold mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 bg-ink text-surface font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-sm hover:bg-stone-800 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Footer Navigation
        <div className="mt-6 text-center border-t border-border pt-4 text-xs text-ink-muted font-sans">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold text-ink underline hover:text-emerald-800 transition-colors"
          >
            Create one
          </Link>
        </div> */}
      </div>
    </div>
  );
}