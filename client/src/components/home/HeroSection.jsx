import Button from "../common/Button";
import { Link } from "react-router-dom";

function HeroSection() {
  const weeklyUsage = [
    { day: "M", height: "h-8" },
    { day: "T", height: "h-12" },
    { day: "W", height: "h-16" },
    { day: "T", height: "h-10" },
    { day: "F", height: "h-20" },
    { day: "S", height: "h-14" },
    { day: "S", height: "h-24" },
  ];

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* Hero Content */}
          <div>
            <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-primary">
              Home Energy Monitor
            </p>

            <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-tight tracking-tight text-ink md:text-6xl">
              Understand your energy.
              <span className="block text-primary">
                Reduce your bill.
              </span>
            </h1>

            <p className="mt-6 max-w-xl font-sans text-base leading-7 text-ink-muted md:text-lg">
              Track appliance usage, estimate electricity costs, and discover
              practical ways to save energy at home.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link to="/register">
            <Button>Get Started</Button>
          </Link>

              <Button variant="secondary">
                Learn More
              </Button>
            </div>
          </div>

          {/* Energy Summary Preview */}
          <div className="rounded-sm border border-border bg-surface p-6">
            <div className="border-b border-border pb-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Today's Overview
              </p>

              <p className="mt-2 font-serif text-4xl font-semibold tracking-tight text-ink">
                12.4 kWh
              </p>

              <p className="mt-1 font-sans text-sm text-ink-muted">
                Estimated usage today
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-5">
              <div>
                <p className="font-sans text-xs uppercase tracking-wide text-ink-muted">
                  Estimated Cost
                </p>

                <p className="mt-1 font-serif text-2xl font-semibold tracking-tight text-ink">
                  ₹142
                </p>

                <p className="mt-1 font-sans text-xs text-ink-muted">
                  ↓ 12% vs last week
                </p>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-wide text-ink-muted">
                  Appliances
                </p>

                <p className="mt-1 font-serif text-2xl font-semibold tracking-tight text-ink">
                  8
                </p>

                <p className="mt-1 font-sans text-xs text-ink-muted">
                  Currently tracked
                </p>
              </div>
            </div>

            {/* Weekly Chart */}
            <div className="mt-6 border-t border-border pt-5">
              <div className="flex h-24 items-end justify-between gap-2">
                {weeklyUsage.map((item, index) => (
                  <div
                    key={`${item.day}-${index}`}
                    className="flex h-full flex-1 flex-col items-center justify-end"
                  >
                    <div
                      className={`w-full max-w-5 rounded-t-sm bg-primary ${item.height}`}
                    />

                    <span className="mt-2 font-sans text-xs text-ink-faint">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 font-sans text-xs text-ink-faint">
                Weekly consumption overview
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;