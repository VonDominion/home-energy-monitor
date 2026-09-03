import Input from "../common/Input";
import Button from "../common/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { loginApi } from "../../services/AuthService";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
    
    if (apiError) setApiError("");
  };

  const validateField = (field) => {
    let error = "";

    if (field === "email") {
      if (!formData.email.trim()) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        error = "Enter a valid email address";
      }
    }

    if (field === "password") {
      if (!formData.password) {
        error = "Password is required";
      }
    }

    return error;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const fields = ["email", "password"];

      fields.forEach((field) => {
        if (!touched[field]) return;

        const error = validateField(field);

        setErrors((previous) => ({
          ...previous,
          [field]: error,
        }));
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [formData, touched]);

  const validateForm = () => {
    const newErrors = {};
    const fields = ["email", "password"];

    fields.forEach((field) => {
      const error = validateField(field);
      if (error) {
        newErrors[field] = error;
      }
    });

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    setTouched({
      email: true,
      password: true,
    });

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setApiError("");

    try {
      // 1. Call Mock API
      const response = await loginApi(formData);
      
      // 2. Save user payload to AuthContext
      login(response.user);

      // 3. Programmatically navigate to Dashboard
      navigate("/dashboard");
    } catch (err) {
      setApiError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-full items-center justify-center px-8 py-10 md:px-12">
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Welcome Back
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink">
            Sign in to your account
          </h2>

          <p className="mt-3 font-sans text-sm leading-6 text-ink-muted">
            Access your real-time energy analytics and system settings.
          </p>
        </div>

        {apiError && (
          <div className="mb-4 rounded-sm border border-warn/20 bg-warn/10 p-3 text-xs text-warn font-medium">
            {apiError}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-[11px] font-semibold text-warn">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.password && (
              <p className="mt-1 text-[11px] font-semibold text-warn">
                {errors.password}
              </p>
            )}
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Signing In..." : "Sign In"}
            </Button>
          </div>
        </form>

        <p className="mt-6 text-center font-sans text-xs text-ink-faint">
          Need an account? Create one above to get started.
        </p>
      </div>
    </div>
  );
}

export default LoginForm;