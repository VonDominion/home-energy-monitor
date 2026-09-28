function ConsumptionHistory() {
  const data = [48, 62, 55, 72, 64, 82, 69];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <section className="bg-surface border border-border p-6 rounded-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
            Consumption History
          </p>

          <h2 className="font-serif text-xl font-bold text-ink mt-1">
            Energy Usage
          </h2>

          <p className="text-xs text-ink-muted mt-1">
            Daily electricity consumption for the selected period.
          </p>
        </div>

        <select
          defaultValue="daily"
          className="w-fit px-3 py-2 text-xs bg-canvas border border-border rounded-sm focus:outline-none"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div className="h-64 mt-8 flex items-end gap-3 border-b border-border">
        {data.map((height, index) => (
          <div
            key={days[index]}
            className="flex-1 h-full flex flex-col justify-end items-center"
          >
            <div
              className="w-full max-w-14 bg-ink rounded-t-sm hover:bg-emerald-800 transition-colors"
              style={{ height: `${height}%` }}
            />

            <span className="text-[10px] text-ink-muted mt-2">
              {days[index]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ConsumptionHistory;