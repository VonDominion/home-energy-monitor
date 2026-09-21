function ActiveAppliances() {
  const appliances = [
    {
      name: "Air Conditioner",
      room: "Living Room",
      usage: "2.4 kWh",
      status: "Running",
      icon: "❄",
    },
    {
      name: "Refrigerator",
      room: "Kitchen",
      usage: "1.8 kWh",
      status: "Running",
      icon: "▣",
    },
    {
      name: "Water Heater",
      room: "Bathroom",
      usage: "1.2 kWh",
      status: "Running",
      icon: "♨",
    },
    {
      name: "Washing Machine",
      room: "Utility Room",
      usage: "0.8 kWh",
      status: "Idle",
      icon: "◉",
    },
  ];

  return (
    <section className="bg-surface border border-border rounded-sm p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
            Appliances
          </p>

          <h2 className="font-serif text-xl font-bold text-ink mt-1">
            Active Appliances
          </h2>

          <p className="text-xs text-ink-muted mt-1">
            Monitor the appliances currently using energy.
          </p>
        </div>

        <button
          type="button"
          className="w-fit text-xs font-semibold text-ink border border-border px-3 py-2 rounded-sm hover:bg-canvas transition-colors"
        >
          View All
        </button>
      </div>

      <div className="divide-y divide-border">
        {appliances.map((appliance) => (
          <div
            key={appliance.name}
            className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-10 h-10 shrink-0 bg-canvas border border-border flex items-center justify-center text-lg text-ink">
                {appliance.icon}
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-ink truncate">
                  {appliance.name}
                </h3>

                <p className="text-[11px] text-ink-muted mt-0.5">
                  {appliance.room}
                </p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <p className="text-sm font-semibold text-ink">
                {appliance.usage}
              </p>

              <div className="flex items-center justify-end gap-1.5 mt-1">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    appliance.status === "Running"
                      ? "bg-emerald-700"
                      : "bg-stone-400"
                  }`}
                />

                <span className="text-[10px] text-ink-muted">
                  {appliance.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActiveAppliances;