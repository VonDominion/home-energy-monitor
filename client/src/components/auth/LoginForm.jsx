import Input from "../common/Input";
import Button from "../common/Button";
import { useState, useEffect } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Mark field as touched
    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    // Clear old error while typing
    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  // Validate a single field
  const validateField = (field) => {
    let error = "";

    // Email validation
    if (field === "email") {
      if (!formData.email.trim()) {
        error = "Email is required";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ) {
        error = "Enter a valid email address";
      }
    }

    // Password validation
    if (field === "password") {
      if (!formData.password) {
        error = "Password is required";
      }
    }

    return error;
  };

  // Real-time validation after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      const fields = ["email", "password"];

      fields.forEach((field) => {
        // Don't validate untouched fields
        if (!touched[field]) {
          return;
        }

        const error = validateField(field);

        setErrors((previous) => ({
          ...previous,
          [field]: error,
        }));
      });
    }, 500);

    // Cancel previous timer when user types again
    return () => clearTimeout(timer);
  }, [formData, touched]);

  // Validate entire form on submit
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

  // Submit form
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    // Mark all fields as touched
    setTouched({
      email: true,
      password: true,
    });

    // Stop submission if errors exist
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log("Login valid, ready to send to API");
    console.log(formData);

    // Later:
    // Send formData to backend API
  };


  function LoginForm() {
    return (
      <div className="flex h-full items-center justify-center px-8 py-10 md:px-12">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Welcome Back
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink">
              Sign in
            </h2>

            <p className="mt-3 font-sans text-sm leading-6 text-ink-muted">
              Access your dashboard to check your latest energy analytics.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <Input
                label="Email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-[11px] mt-1 font-semibold text-warn">
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
              />

              {/* Flex container to align the error message and forgot password link */}
              <div className="flex items-start justify-between mt-1">
                <div className="flex-1">
                  {errors.password && (
                    <p className="text-[11px] font-semibold text-warn">
                      {errors.password}
                    </p>
                  )}
                </div>
                <a
                  href="/forgot-password"
                  className="text-ink text-sm hover:text-primary underline-offset-4 hover:underline ml-4"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <p>
              Access your energy dashboard and continue monitoring your home.
            </p>
          </form>

          <form className="space-y-5">
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="you@example.com"
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />

            <div className="pt-2">
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </div>
          </form>

          {/* <p className="mt-6 text-center font-sans text-xs text-ink-faint">
          Don't have an account yet? <a href="/register" className="text-ink hover:text-primary underline underline-offset-4 hover:underline">Register here</a>.
        </p> */}
          <p className="mt-6 text-center font-sans text-xs text-ink-faint">
            Your energy data stays connected to your account.
          </p>
        </div>
      </div >
    );
  }
}

export default LoginForm;