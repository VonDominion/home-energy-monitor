import Button from "../../../components/common/Button";
import { Link } from "react-router-dom";

function PublicNavbar() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl font-semibold tracking-tight text-ink"
        >
          Home Energy Monitor
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="font-sans text-sm font-medium text-ink-muted hover:text-ink"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="font-sans text-sm font-medium text-ink-muted hover:text-ink"
          >
            Login
          </Link>

          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </nav>

        {/* Mobile CTA */}
        <Link to="/register" className="md:hidden">
          <Button>Get Started</Button>
        </Link>
      </div>
    </header>
  );
}

export default PublicNavbar;