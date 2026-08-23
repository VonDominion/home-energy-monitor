function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Add Your Appliances",
      description:
        "Add the appliances you use at home and provide their basic power and usage details.",
    },
    {
      number: "02",
      title: "Track Your Usage",
      description:
        "Monitor how your appliances contribute to your overall electricity consumption.",
    },
    {
      number: "03",
      title: "Understand & Save",
      description:
        "Review your costs and usage patterns, then follow recommendations to reduce unnecessary consumption.",
    },
  ];

  return (
    <section className="border-t border-border bg-canvas">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-muted">
            How It Works
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
            From appliance data to better energy decisions.
          </h2>

          <p className="mt-5 font-sans text-base leading-7 text-ink-muted">
            Start with the appliances in your home and let the monitor turn
            everyday usage into information you can act on.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid border-y border-border md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`py-8 md:px-8 md:py-10 ${
                index !== 0 ? "border-t border-border md:border-l md:border-t-0" : ""
              }`}
            >
              <span className="font-sans text-xs font-semibold tracking-widest text-primary">
                {step.number}
              </span>

              <h3 className="mt-6 font-serif text-2xl font-semibold tracking-tight text-ink">
                {step.title}
              </h3>

              <p className="mt-4 max-w-sm font-sans text-sm leading-6 text-ink-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;