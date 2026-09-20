import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

export default function RegisterForm() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Field-level validation rules
  const validateField = (field) => {
    let error = "";

    if (field === "name") {
      if (!formData.name.trim()) {
        error = "Full name is required";
      } else if (formData.name.trim().length < 3) {
        error = "Name must be at least 3 characters";
      }
    }

    if (field === "email") {
      if (!formData.email.trim()) {
        error = "Email address is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        error = "Please enter a valid email address";
      }
    }

    if (field === "password") {
      if (!formData.password) {
        error = "Password is required";
      } else if (formData.password.length < 8) {
        error = "Password must be at least 8 characters";
      } else if (!/[A-Z]/.test(formData.password)) {
        error = "Must contain at least one uppercase letter";
      } else if (!/[a-z]/.test(formData.password)) {
        error = "Must contain at least one lowercase letter";
      } else if (!/[0-9]/.test(formData.password)) {
        error = "Must contain at least one number";
      }
    }

    if (field === "confirmPassword") {
      if (!formData.confirmPassword) {
        error = "Confirm password is required";
      } else if (formData.confirmPassword !== formData.password) {
        error = "Passwords do not match";
      }
    }

    return error;
  };

  // Debounced real-time validation
  useEffect(() => {
    const timer = setTimeout(() => {
      const fields = ["name", "email", "password", "confirmPassword"];

      fields.forEach((field) => {
        if (!touched[field]) return;

        const error = validateField(field);

        setErrors((prev) => ({
          ...prev,
          [field]: error,
        }));
      });
    }, 400);

    return () => clearTimeout(timer);
  }, [formData, touched]);

  // Validate entire form on submit
  const validateForm = () => {
    const newErrors = {};
    const fields = ["name", "email", "password", "confirmPassword"];

    fields.forEach((field) => {
      const error = validateField(field);
      if (error) newErrors[field] = error;
    });

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setServerError("");

    const newErrors = validateForm();
    setErrors(newErrors);

    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      // Connect to backend via register in AuthContext
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      navigate("/dashboard");
    } catch (err) {
      setServerError(err.message || "Registration failed. Please try again later.");
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
            Eco-Monitor Registration
          </span>
          <h1 className="font-serif text-3xl font-bold text-ink mt-1">
            Create Account
          </h1>
          <p className="text-xs text-ink-muted mt-1 font-sans">
            Start monitoring your home's energy usage and solar metrics
          </p>
        </div>

        {/* Global Server Error Banner */}
        {serverError && (
          <div className="mb-6 p-3 bg-red-50 border border-warn/30 text-warn text-xs rounded-sm font-sans">
            {serverError}
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4 font-sans" noValidate>
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Mayank Chhipa"
              className={`w-full px-3 py-2 text-sm bg-canvas border rounded-sm focus:outline-none transition-colors ${
                errors.name
                  ? "border-warn focus:border-warn"
                  : "border-border focus:border-ink"
              }`}
            />
            {errors.name && (
              <p className="text-[11px] text-warn font-semibold mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Address */}
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
              className={`w-full px-3 py-2 text-sm bg-canvas border rounded-sm focus:outline-none transition-colors ${
                errors.email
                  ? "border-warn focus:border-warn"
                  : "border-border focus:border-ink"
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-warn font-semibold mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className={`w-full px-3 py-2 text-sm bg-canvas border rounded-sm focus:outline-none transition-colors ${
                errors.password
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

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className={`w-full px-3 py-2 text-sm bg-canvas border rounded-sm focus:outline-none transition-colors ${
                errors.confirmPassword
                  ? "border-warn focus:border-warn"
                  : "border-border focus:border-ink"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-[11px] text-warn font-semibold mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 bg-ink text-surface font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-sm hover:bg-stone-800 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Footer Navigation
        <div className="mt-6 text-center border-t border-border pt-4 text-xs text-ink-muted font-sans">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-ink underline hover:text-emerald-800 transition-colors"
          >
            Sign in
          </Link>
        </div> */}
      </div>
    </div>
  );
}