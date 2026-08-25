import Input from "../common/Input";
import Button from "../common/Button";

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