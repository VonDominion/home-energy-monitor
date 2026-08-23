import Button from "../common/Button";

function HeroSection() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          
          {/* Hero Content */}
          <div>
            <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-primary">
              Home Energy Monitor
            </p>

            <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-tight text-ink md:text-6xl">
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
              <Button>
                Get Started
              </Button>

              <Button variant="secondary">
                Learn More
              </Button>
            </div>
          </div>

          {/* Energy Summary Preview */}
          <div className="border border-border bg-surface p-6 rounded-sm">
            <div className="border-b border-border pb-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Today's Overview
              </p>

              <p className="mt-2 font-serif text-4xl font-semibold text-ink">
                12.4 kWh
              </p>

              <p className="mt-1 font-sans text-sm text-ink-muted">
                Estimated usage today
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-5">
              <div>
                <p className="font-sans text-xs uppercase tracking-wide text-ink-muted">
                  Estimated Cost
                </p>

                <p className="mt-1 font-serif text-2xl font-semibold text-ink">
                  ₹142
                </p>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-wide text-ink-muted">
                  Appliances
                </p>

                <p className="mt-1 font-serif text-2xl font-semibold text-ink">
                  8
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-5">
              <div className="flex items-end gap-2">
                <div className="h-8 w-4 bg-primary" />
                <div className="h-12 w-4 bg-primary" />
                <div className="h-16 w-4 bg-primary" />
                <div className="h-10 w-4 bg-primary" />
                <div className="h-20 w-4 bg-primary" />
                <div className="h-14 w-4 bg-primary" />
                <div className="h-24 w-4 bg-primary" />
              </div>

              <p className="mt-3 font-sans text-xs text-ink-faint">
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