import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../common/Input";
import Button from "../common/Button";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Password reset requested for:", email);
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Account Recovery
        </p>

        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink">
          Forgot your password?
        </h1>

        <p className="mt-3 text-sm leading-6 text-ink/70">
          Enter the email address associated with your account and we'll
          send you a link to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <Button type="submit" variant="primary" className="w-full">
          Send Reset Link
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link
          to="/login"
          className="text-sm font-medium text-primary transition-colors hover:underline"
        >
          ← Back to Sign In
        </Link>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;