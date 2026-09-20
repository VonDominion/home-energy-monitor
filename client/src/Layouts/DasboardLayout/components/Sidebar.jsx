import { NavLink } from "react-router-dom";

function Sidebar() {
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "⌂",
    },
    {
      name: "Energy",
      path: "/dashboard/energy",
      icon: "⚡",
    },
    {
      name: "Appliances",
      path: "/dashboard/appliances",
      icon: "▣",
    },
    {
      name: "Analytics",
      path: "/dashboard/analytics",
      icon: "▥",
    },
    {
      name: "Reports",
      path: "/dashboard/reports",
      icon: "▤",
    },
  ];

  const secondaryItems = [
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: "⚙",
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: "○",
    },
  ];

  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-surface border-r border-border flex-col">
      {/* Logo */}
      <div className="h-20 px-6 flex items-center border-b border-border">
        <div>
          <h1 className="font-serif text-xl font-bold text-ink">
            Eco-Monitor
          </h1>

          <p className="text-[9px] uppercase tracking-[0.2em] text-ink-muted mt-1">
            Energy Intelligence
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <p className="px-3 mb-3 text-[10px] font-bold uppercase tracking-widest text-ink-muted">
          Overview
        </p>

        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 text-sm rounded-sm transition-colors ${
                  isActive
                    ? "bg-ink text-surface font-semibold"
                    : "text-ink-muted hover:bg-canvas hover:text-ink"
                }`
              }
            >
              <span className="w-5 text-center text-sm">
                {item.icon}
              </span>

              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>

        <p className="px-3 mt-8 mb-3 text-[10px] font-bold uppercase tracking-widest text-ink-muted">
          Account
        </p>

        <div className="space-y-1">
          {secondaryItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 text-sm rounded-sm transition-colors ${
                  isActive
                    ? "bg-ink text-surface font-semibold"
                    : "text-ink-muted hover:bg-canvas hover:text-ink"
                }`
              }
            >
              <span className="w-5 text-center text-sm">
                {item.icon}
              </span>

              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-border">
        <button
          type="button"
          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-ink-muted hover:text-warn hover:bg-canvas rounded-sm transition-colors"
        >
          <span className="w-5 text-center">↪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;