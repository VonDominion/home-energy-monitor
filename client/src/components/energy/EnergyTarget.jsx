function EnergyTarget() {
  const currentUsage = 742;
  const target = 800;
  const percentage = (currentUsage / target) * 100;
  const remaining = target - currentUsage;

  return (
    <section className="bg-surface border border-border p-6 rounded-sm">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
            Monthly Goal
          </p>

          <h2 className="font-serif text-xl font-bold text-ink mt-1">
            Energy Target
          </h2>

          <p className="text-xs text-ink-muted mt-1">
            Keep your monthly consumption within your selected target.
          </p>
        </div>

        <button
          type="button"
          className="w-fit text-xs font-semibold text-ink border border-border px-3 py-2 rounded-sm hover:bg-canvas transition-colors"
        >
          Change Target
        </button>
      </div>

      <div className="mt-7">
        <div className="flex items-end justify-between">
          <div>
            <span className="font-serif text-3xl font-bold text-ink">
              {currentUsage}
            </span>

            <span className="text-xs text-ink-muted ml-1">
              / {target} kWh
            </span>
          </div>

          <span className="text-xs font-semibold text-emerald-800">
            {percentage.toFixed(1)}%
          </span>
        </div>

        <div className="w-full h-2 bg-canvas border border-border mt-4">
          <div
            className="h-full bg-ink transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className="text-xs text-ink-muted mt-3">
          {remaining} kWh remaining before reaching your monthly target.
        </p>
      </div>
    </section>
  );
}

export default EnergyTarget;