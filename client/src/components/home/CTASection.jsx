import Button from "../common/Button";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10 py-14 md:py-20">
        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Take Control
        </p>

        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
          Start understanding your energy today.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-7 text-ink-muted">
          Track your appliances, understand your electricity costs, and find
          practical ways to reduce unnecessary energy consumption.
        </p>

        <div className="mt-8 flex justify-center">
          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;