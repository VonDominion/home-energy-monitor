import Input from "../common/Input";
import Button from "../common/Button";
import { useState, useEffect } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    // Name validation
    if (field === "name") {
      if (!formData.name.trim()) {
        error = "Name is required";
      } else if (formData.name.trim().length < 3) {
        error = "Name must be at least 3 characters";
      }
    }

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
      } else if (formData.password.length < 8) {
        error = "Password must be at least 8 characters";
      } else if (!/[A-Z]/.test(formData.password)) {
        error = "Password must contain at least one uppercase letter";
      } else if (!/[a-z]/.test(formData.password)) {
        error = "Password must contain at least one lowercase letter";
      } else if (!/[0-9]/.test(formData.password)) {
        error = "Password must contain at least one number";
      }
    }

    // Confirm password validation
    if (field === "confirmPassword") {
      if (!formData.confirmPassword) {
        error = "Confirm password is required";
      } else if (
        formData.confirmPassword !== formData.password
      ) {
        error = "Passwords do not match";
      }
    }

    return error;
  };

  // Real-time validation after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      const fields = [
        "name",
        "email",
        "password",
        "confirmPassword",
      ];

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

    const fields = [
      "name",
      "email",
      "password",
      "confirmPassword",
    ];

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
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    // Stop submission if errors exist
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log("Registration successful");
    console.log(formData);

    // Later:
    // Send formData to backend API
  };


function RegisterForm() {
  return (
    <div className="flex h-full items-center justify-center px-8 py-10 md:px-12">
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Get Started
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink">
            Create an account
          </h2>

          <p className="mt-3 font-sans text-sm leading-6 text-ink-muted">
            Start monitoring your home's energy usage and make smarter
            decisions.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <Input
              label="Name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-[11px] mt-1 font-semibold text-warn">
                {errors.name}
              </p>
            )}
          </div>

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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-[11px] mt-1 font-semibold text-warn">
                {errors.password}
              </p>
            )}
          </div>

          <div>
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-[11px] mt-1 font-semibold text-warn">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        <form className="space-y-5">
          <Input
            label="Name"
            type="text"
            name="name"
            placeholder="Your name"
          />

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
            placeholder="Create a password"
          />

          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
          />

          <div className="pt-2">
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>

        <p className="mt-6 text-center font-sans text-xs text-ink-faint">
          Your account will keep your energy data connected and accessible.
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;