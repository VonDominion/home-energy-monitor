function Recommendations() {
  const recommendations = [
    {
      title: "Reduce AC usage",
      description:
        "Your air conditioner is consuming more energy than other appliances. Consider increasing the temperature by 1–2°C.",
      impact: "High impact",
      icon: "⚡",
    },
    {
      title: "Run washing machine during off-peak hours",
      description:
        "Scheduling heavy appliances during lower-demand periods can help reduce your overall energy cost.",
      impact: "Medium impact",
      icon: "◉",
    },
    {
      title: "Check standby appliances",
      description:
        "Several devices are consuming small amounts of energy while idle. Unplug devices that are not being used.",
      impact: "Low impact",
      icon: "○",
    },
  ];

  return (
    <section className="bg-surface border border-border rounded-sm p-6">
      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
          Smart Suggestions
        </p>

        <h2 className="font-serif text-xl font-bold text-ink mt-1">
          Energy Recommendations
        </h2>

        <p className="text-xs text-ink-muted mt-1">
          Simple ways to improve your home's energy efficiency.
        </p>
      </div>

      <div className="space-y-4">
        {recommendations.map((recommendation) => (
          <div
            key={recommendation.title}
            className="border border-border bg-canvas p-4 rounded-sm flex gap-4"
          >
            <div className="w-10 h-10 shrink-0 bg-surface border border-border flex items-center justify-center text-lg">
              {recommendation.icon}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-sm font-semibold text-ink">
                  {recommendation.title}
                </h3>

                <span className="text-[9px] uppercase tracking-wider font-bold text-emerald-800">
                  {recommendation.impact}
                </span>
              </div>

              <p className="text-xs text-ink-muted leading-relaxed mt-2">
                {recommendation.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recommendations;