function EnergyGraph() {
  const data = [45, 65, 52, 78, 60, 85, 70];

  const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  return (
    <div className="h-64">

      <div className="h-full flex items-end gap-3 border-b border-border">

        {data.map((height, index) => (
          <div
            key={days[index]}
            className="flex-1 h-full flex flex-col justify-end items-center"
          >

            {/* Bar */}
            <div
              className="w-full max-w-12 bg-ink rounded-t-sm transition-all duration-300 hover:bg-emerald-800"
              style={{
                height: `${height}%`,
              }}
            />

            {/* Day */}
            <span className="text-[10px] text-ink-muted mt-2">
              {days[index]}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default EnergyGraph;