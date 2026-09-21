import EnergyGraph from "./graphs";

function EnergyOverview() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

      {/* Energy Usage Graph */}
      <div className="xl:col-span-2 bg-surface border border-border p-6 rounded-sm">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
              Consumption
            </p>

            <h2 className="font-serif text-xl font-bold text-ink mt-1">
              Energy Usage
            </h2>

            <p className="text-xs text-ink-muted mt-1">
              Your home's energy consumption over time.
            </p>
          </div>

          {/* Time Range */}
          <select
            defaultValue="7"
            className="w-fit text-xs border border-border bg-canvas px-3 py-2 rounded-sm text-ink focus:outline-none"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
          </select>
        </div>

        {/* Graph */}
        <div className="mt-6">
          <EnergyGraph />
        </div>
      </div>


      {/* Energy Summary */}
      <div className="bg-ink text-surface p-6 rounded-sm">

        <p className="text-[10px] uppercase tracking-widest opacity-60">
          Energy Summary
        </p>

        <h2 className="font-serif text-2xl font-bold mt-3">
          Your usage is improving.
        </h2>

        <p className="text-sm opacity-70 mt-3 leading-relaxed">
          Your average energy consumption is lower than the previous
          period. Continue monitoring your appliances to maintain
          efficient energy usage.
        </p>

        <div className="mt-8 pt-5 border-t border-white/20">

          <div className="flex justify-between text-xs">
            <span className="opacity-60">
              Weekly average
            </span>

            <span className="font-semibold">
              27.4 kWh
            </span>
          </div>

          <div className="flex justify-between text-xs mt-3">
            <span className="opacity-60">
              Previous week
            </span>

            <span className="font-semibold">
              30.8 kWh
            </span>
          </div>

          <div className="flex justify-between text-xs mt-3">
            <span className="opacity-60">
              Difference
            </span>

            <span className="font-semibold">
              -11%
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}

export default EnergyOverview;