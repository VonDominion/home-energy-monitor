function PeakUsage() {
  return (
    <section className="bg-ink text-surface p-6 rounded-sm">
      <p className="text-[10px] uppercase tracking-widest opacity-60">
        Usage Pattern
      </p>

      <h2 className="font-serif text-xl font-bold mt-1">
        Peak Usage
      </h2>

      <div className="mt-6">
        <p className="text-[10px] uppercase tracking-widest opacity-60">
          Highest consumption
        </p>

        <div className="flex items-end gap-2 mt-2">
          <h3 className="font-serif text-3xl font-bold">
            8.2
          </h3>

          <span className="text-xs opacity-60 mb-1">
            kWh
          </span>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-white/20 space-y-3">
        <div className="flex justify-between text-xs">
          <span className="opacity-60">Peak period</span>
          <span className="font-semibold">7 PM – 10 PM</span>
        </div>

        <div className="flex justify-between text-xs">
          <span className="opacity-60">Peak day</span>
          <span className="font-semibold">Saturday</span>
        </div>

        <div className="flex justify-between text-xs">
          <span className="opacity-60">Average peak</span>
          <span className="font-semibold">6.8 kWh</span>
        </div>
      </div>
    </section>
  );
}

export default PeakUsage;