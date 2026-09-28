function LiveConsumption() {
  const readings = [35, 48, 42, 58, 52, 68, 61, 74, 65, 82, 70, 76];

  return (
    <section className="bg-surface border border-border p-6 rounded-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
            Live Monitoring
          </p>

          <h2 className="font-serif text-xl font-bold text-ink mt-1">
            Current Energy Consumption
          </h2>

          <p className="text-xs text-ink-muted mt-1">
            Real-time overview of your home's current power usage.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-700 rounded-full" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800">
            Live
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="shrink-0">
          <p className="text-[10px] uppercase tracking-widest text-ink-muted">
            Current Power
          </p>

          <div className="flex items-end gap-2 mt-2">
            <h3 className="font-serif text-4xl font-bold text-ink">
              2.84
            </h3>

            <span className="text-sm text-ink-muted mb-1">
              kW
            </span>
          </div>

          <p className="text-xs text-ink-muted mt-2">
            Updated a few seconds ago
          </p>
        </div>

        <div className="flex-1 h-36 flex items-end gap-1 border-b border-border">
          {readings.map((height, index) => (
            <div
              key={index}
              className="flex-1 h-full flex items-end"
            >
              <div
                className="w-full bg-ink rounded-t-sm"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LiveConsumption;