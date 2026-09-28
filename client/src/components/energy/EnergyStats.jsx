function EnergyStats() {
  const stats = [
    {
      title: "Today's Usage",
      value: "24.6",
      unit: "kWh",
      change: "↓ 8.4%",
      description: "vs yesterday",
    },
    {
      title: "This Month",
      value: "742",
      unit: "kWh",
      change: "↓ 5.2%",
      description: "vs previous month",
    },
    {
      title: "Estimated Cost",
      value: "₹4,860",
      unit: "",
      change: "↓ 6.1%",
      description: "vs previous month",
    },
    {
      title: "Current Power",
      value: "2.84",
      unit: "kW",
      change: "● Live",
      description: "currently consuming",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-surface border border-border p-5 rounded-sm"
        >
          <p className="text-[10px] uppercase tracking-widest font-bold text-ink-muted">
            {stat.title}
          </p>

          <div className="flex items-end gap-1 mt-4">
            <h2 className="font-serif text-3xl font-bold text-ink">
              {stat.value}
            </h2>

            {stat.unit && (
              <span className="text-xs text-ink-muted mb-1">
                {stat.unit}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-[11px] font-semibold text-emerald-800">
              {stat.change}
            </span>

            <span className="text-[10px] text-ink-muted">
              {stat.description}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default EnergyStats;