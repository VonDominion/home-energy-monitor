function EnergyHeader() {
  return (
    <section className="mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-800">
        Energy Monitoring
      </p>

      <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mt-2">
        Energy
      </h1>

      <p className="text-sm text-ink-muted mt-2 max-w-2xl">
        Track your home's electricity consumption, monitor energy costs,
        and understand how your usage changes over time.
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        <button
          type="button"
          className="px-4 py-2 bg-ink text-surface text-xs font-semibold rounded-sm"
        >
          Today
        </button>

        <button
          type="button"
          className="px-4 py-2 bg-surface border border-border text-ink-muted text-xs font-semibold rounded-sm hover:text-ink hover:bg-canvas transition-colors"
        >
          This Week
        </button>

        <button
          type="button"
          className="px-4 py-2 bg-surface border border-border text-ink-muted text-xs font-semibold rounded-sm hover:text-ink hover:bg-canvas transition-colors"
        >
          This Month
        </button>
      </div>
    </section>
  );
}

export default EnergyHeader;