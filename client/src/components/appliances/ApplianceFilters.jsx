function ApplianceFilters() {
  return (
    <div className="bg-surface border border-border p-4 rounded-sm mb-6">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search appliances..."
            className="w-full px-3 py-2.5 text-sm bg-canvas border border-border rounded-sm focus:outline-none focus:border-ink transition-colors"
          />
        </div>

        <select
          defaultValue="all"
          className="w-full lg:w-48 px-3 py-2.5 text-sm bg-canvas border border-border rounded-sm text-ink focus:outline-none"
        >
          <option value="all">All Appliances</option>
          <option value="active">Active</option>
          <option value="idle">Idle</option>
        </select>

        <select
          defaultValue="all"
          className="w-full lg:w-48 px-3 py-2.5 text-sm bg-canvas border border-border rounded-sm text-ink focus:outline-none"
        >
          <option value="all">All Rooms</option>
          <option value="living-room">Living Room</option>
          <option value="kitchen">Kitchen</option>
          <option value="bedroom">Bedroom</option>
          <option value="bathroom">Bathroom</option>
        </select>
      </div>
    </div>
  );
}

export default ApplianceFilters;