function ApplianceList() {
  const appliances = [
    {
      name: "Air Conditioner",
      room: "Living Room",
      usage: "2.4 kWh",
      monthly: "72.4 kWh",
      status: "Running",
      icon: "❄",
    },
    {
      name: "Refrigerator",
      room: "Kitchen",
      usage: "1.8 kWh",
      monthly: "54.2 kWh",
      status: "Running",
      icon: "▣",
    },
    {
      name: "Water Heater",
      room: "Bathroom",
      usage: "1.2 kWh",
      monthly: "36.8 kWh",
      status: "Running",
      icon: "♨",
    },
    {
      name: "Washing Machine",
      room: "Utility Room",
      usage: "0.8 kWh",
      monthly: "24.5 kWh",
      status: "Idle",
      icon: "◉",
    },
    {
      name: "Television",
      room: "Living Room",
      usage: "0.3 kWh",
      monthly: "18.2 kWh",
      status: "Idle",
      icon: "▤",
    },
    {
      name: "Microwave",
      room: "Kitchen",
      usage: "0.2 kWh",
      monthly: "12.6 kWh",
      status: "Idle",
      icon: "▦",
    },
  ];

  return (
    <section className="bg-surface border border-border rounded-sm">
      <div className="p-6 border-b border-border">
        <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
          Connected Devices
        </p>

        <h2 className="font-serif text-xl font-bold text-ink mt-1">
          All Appliances
        </h2>

        <p className="text-xs text-ink-muted mt-1">
          View energy consumption and current status of your devices.
        </p>
      </div>

      <div className="divide-y divide-border">
        {appliances.map((appliance) => (
          <div
            key={appliance.name}
            className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-canvas transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 shrink-0 bg-canvas border border-border flex items-center justify-center text-lg">
                {appliance.icon}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-ink">
                  {appliance.name}
                </h3>

                <p className="text-[11px] text-ink-muted mt-1">
                  {appliance.room}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-10">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-ink-muted">
                  Current
                </p>

                <p className="text-sm font-semibold text-ink mt-1">
                  {appliance.usage}
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-wider text-ink-muted">
                  This Month
                </p>

                <p className="text-sm font-semibold text-ink mt-1">
                  {appliance.monthly}
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-wider text-ink-muted">
                  Status
                </p>

                <div className="flex items-center gap-1.5 mt-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      appliance.status === "Running"
                        ? "bg-emerald-700"
                        : "bg-stone-400"
                    }`}
                  />

                  <span className="text-[11px] text-ink-muted">
                    {appliance.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ApplianceList;