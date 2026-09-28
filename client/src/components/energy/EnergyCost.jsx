function EnergyCost() {
  return (
    <section className="bg-surface border border-border p-6 rounded-sm">
      <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
        Electricity Cost
      </p>

      <h2 className="font-serif text-xl font-bold text-ink mt-1">
        Energy Cost
      </h2>

      <div className="mt-6">
        <p className="text-[10px] uppercase tracking-widest text-ink-muted">
          This Month
        </p>

        <div className="flex items-end gap-2 mt-2">
          <h3 className="font-serif text-3xl font-bold text-ink">
            ₹4,860
          </h3>

          <span className="text-xs font-semibold text-emerald-800 mb-1">
            ↓ 6.1%
          </span>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-border space-y-3">
        <div className="flex justify-between text-xs">
          <span className="text-ink-muted">Previous month</span>
          <span className="font-semibold text-ink">₹5,176</span>
        </div>

        <div className="flex justify-between text-xs">
          <span className="text-ink-muted">Average daily cost</span>
          <span className="font-semibold text-ink">₹162</span>
        </div>

        <div className="flex justify-between text-xs">
          <span className="text-ink-muted">Projected bill</span>
          <span className="font-semibold text-ink">₹5,040</span>
        </div>
      </div>
    </section>
  );
}

export default EnergyCost;