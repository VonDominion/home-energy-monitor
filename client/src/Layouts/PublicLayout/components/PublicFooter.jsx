import { Link } from "react-router-dom";

function PublicFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-serif text-lg font-semibold tracking-tight text-ink"
            >
              Home Energy Monitor
            </Link>

            <p className="mt-2 max-w-md font-sans text-sm leading-6 text-ink-muted">
              Understand your energy usage, estimate your costs, and make
              better decisions at home.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="font-sans text-sm text-ink-muted hover:text-ink"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="font-sans text-sm text-ink-muted hover:text-ink"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="font-sans text-sm text-ink-muted hover:text-ink"
            >
              Register
            </Link>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-5">
          <p className="font-sans text-xs text-ink-faint">
            © {new Date().getFullYear()} Home Energy Monitor. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default PublicFooter;