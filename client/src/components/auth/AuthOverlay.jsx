function AuthOverlay({ isRegister, onShowLogin, onShowRegister }) {
  return (
    <div className="relative flex h-full w-full overflow-hidden bg-primary text-ink">
      {/* Decorative curved edge */}
      <div className="absolute inset-y-0 -right-10 w-20 rounded-full bg-primary" />

      {/* Register message */}
      <div
        className={`absolute inset-0 flex items-center justify-center px-8 text-center transition-opacity duration-500 ${
          isRegister
            ? "pointer-events-none opacity-0"
            : "opacity-100"
        }`}
      >
        <div className="relative z-10 max-w-sm">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest">
            New Here?
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight">
            Create your account
          </h2>

          <p className="mt-4 font-sans text-sm leading-6">
            Start monitoring your home's energy usage and make smarter
            decisions.
          </p>

          <button
            type="button"
            onClick={onShowRegister}
            className="mt-7 border border-ink px-5 py-2.5 font-sans text-sm font-semibold transition-colors duration-200 hover:bg-ink hover:text-surface focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-primary"
          >
            Register
          </button>
        </div>
      </div>

      {/* Login message */}
      <div
        className={`absolute inset-0 flex items-center justify-center px-8 text-center transition-opacity duration-500 ${
          isRegister
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="relative z-10 max-w-sm">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest">
            Welcome Back
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight">
            Already have an account?
          </h2>

          <p className="mt-4 font-sans text-sm leading-6">
            Sign in to continue monitoring your home's energy usage and costs.
          </p>

          <button
            type="button"
            onClick={onShowLogin}
            className="mt-7 border border-ink px-5 py-2.5 font-sans text-sm font-semibold transition-colors duration-200 hover:bg-ink hover:text-surface focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-primary"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthOverlay;