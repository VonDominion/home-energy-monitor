function ApplianceStats() {
  const stats = [
    {
      title: "Total Appliances",
      value: "14",
      description: "Connected devices",
    },
    {
      title: "Currently Active",
      value: "7",
      description: "Using energy now",
    },
    {
      title: "Highest Consumer",
      value: "AC",
      description: "38% of total usage",
    },
    {
      title: "Today's Usage",
      value: "24.6",
      unit: "kWh",
      description: "Across all devices",
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

          <p className="text-xs text-ink-muted mt-1">
            {stat.description}
          </p>
        </div>
      ))}
    </section>
  );
}

export default ApplianceStats;