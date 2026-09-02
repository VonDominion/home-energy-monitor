import Card from "../common/Card";

function WhyUsSection() {
  const features = [
    {
      number: "01",
      title: "Track Appliance Usage",
      description:
        "Keep track of how much energy your appliances consume and identify where your electricity is going.",
    },
    {
      number: "02",
      title: "Estimate Your Cost",
      description:
        "Turn your energy consumption into an estimated electricity cost so you can understand your bill better.",
    },
    {
      number: "03",
      title: "Save Energy",
      description:
        "Get practical recommendations based on your usage patterns to reduce unnecessary energy consumption.",
    },
  ];

  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Why Us?
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
            Make your energy usage easier to understand.
          </h2>

          <p className="mt-5 font-sans text-base leading-7 text-ink-muted">
            Home Energy Monitor brings your appliance usage, estimated costs,
            and energy-saving opportunities together in one place.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.number}>
              <span className="font-sans text-xs font-semibold tracking-widest text-ink-faint">
                {feature.number}
              </span>

              <h3 className="mt-8 font-serif text-2xl font-semibold tracking-tight text-ink">
                {feature.title}
              </h3>

              <p className="mt-4 font-sans text-sm leading-6 text-ink-muted">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;