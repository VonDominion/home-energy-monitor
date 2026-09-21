function StatsSection() {
  const stats = [
    {
      title: "Today's Usage",
      value: "24.6",
      unit: "kWh",
      change: "↓ 8.4%",
      changeText: "vs yesterday",
    },
    {
      title: "Estimated Cost",
      value: "₹124",
      unit: "today",
      change: "↓ 5.2%",
      changeText: "vs yesterday",
    },
    {
      title: "Active Appliances",
      value: "7",
      unit: "of 14 devices",
      change: "50%",
      changeText: "currently active",
    },
    {
      title: "Efficiency",
      value: "82%",
      unit: "this month",
      change: "Good",
      changeText: "overall efficiency",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-surface border border-border p-5 rounded-sm"
        >
          {/* Card Header */}
          <p className="text-[10px] uppercase tracking-widest font-bold text-ink-muted">
            {stat.title}
          </p>

          {/* Main Value */}
          <div className="flex items-end justify-between mt-4">
            <div>
              <h2 className="font-serif text-3xl font-bold text-ink">
                {stat.value}
              </h2>

              <p className="text-xs text-ink-muted mt-1">
                {stat.unit}
              </p>
            </div>

            {/* Change / Status */}
            <div className="text-right">
              <span className="text-xs font-semibold text-emerald-800">
                {stat.change}
              </span>

              <p className="text-[9px] text-ink-muted mt-0.5">
                {stat.changeText}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default StatsSection;