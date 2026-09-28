function DailyConsumption() {
  const readings = [
    { date: "20 Sep", usage: "24.6 kWh", cost: "₹162" },
    { date: "19 Sep", usage: "26.8 kWh", cost: "₹176" },
    { date: "18 Sep", usage: "25.1 kWh", cost: "₹165" },
    { date: "17 Sep", usage: "28.4 kWh", cost: "₹187" },
    { date: "16 Sep", usage: "22.9 kWh", cost: "₹151" },
    { date: "15 Sep", usage: "27.2 kWh", cost: "₹179" },
  ];

  return (
    <section className="bg-surface border border-border rounded-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
          Daily Records
        </p>

        <h2 className="font-serif text-xl font-bold text-ink mt-1">
          Daily Consumption
        </h2>

        <p className="text-xs text-ink-muted mt-1">
          Recent electricity usage and estimated daily cost.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-border bg-canvas">
              <th className="text-left px-6 py-3 text-[9px] uppercase tracking-wider text-ink-muted">
                Date
              </th>

              <th className="text-right px-6 py-3 text-[9px] uppercase tracking-wider text-ink-muted">
                Consumption
              </th>

              <th className="text-right px-6 py-3 text-[9px] uppercase tracking-wider text-ink-muted">
                Estimated Cost
              </th>
            </tr>
          </thead>

          <tbody>
            {readings.map((reading) => (
              <tr
                key={reading.date}
                className="border-b border-border last:border-0 hover:bg-canvas transition-colors"
              >
                <td className="px-6 py-4 text-xs font-semibold text-ink">
                  {reading.date}
                </td>

                <td className="px-6 py-4 text-right text-xs text-ink-muted">
                  {reading.usage}
                </td>

                <td className="px-6 py-4 text-right text-xs font-semibold text-ink">
                  {reading.cost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DailyConsumption;