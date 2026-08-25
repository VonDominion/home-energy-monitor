import Input from "../common/Input";
import Button from "../common/Button";

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
            Access your energy dashboard and continue monitoring your home.
          </p>
        </div>

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

        <p className="mt-6 text-center font-sans text-xs text-ink-faint">
          Your energy data stays connected to your account.
        </p>
      </div>
    </div>
  );
}

export default LoginForm;