import { useLocation } from "react-router-dom";

function DashboardNavbar() {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;

    if (path === "/dashboard") {
      return "Dashboard";
    }

    if (path.includes("/energy")) {
      return "Energy";
    }

    if (path.includes("/appliances")) {
      return "Appliances";
    }

    if (path.includes("/analytics")) {
      return "Analytics";
    }

    if (path.includes("/reports")) {
      return "Reports";
    }

    if (path.includes("/settings")) {
      return "Settings";
    }

    if (path.includes("/profile")) {
      return "Profile";
    }

    return "Dashboard";
  };

  return (
    <header className="h-20 bg-surface border-b border-border flex items-center justify-between px-4 md:px-6">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden w-9 h-9 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-canvas rounded-sm transition-colors"
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Page Title */}
        <div>
          <h2 className="font-serif text-xl font-bold text-ink">
            {getPageTitle()}
          </h2>

          <p className="hidden sm:block text-[10px] uppercase tracking-widest text-ink-muted mt-0.5">
            Energy Intelligence
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Notification */}
        <button
          type="button"
          className="relative w-9 h-9 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-canvas rounded-sm transition-colors"
          aria-label="Notifications"
        >
          <span className="text-lg">♧</span>

          {/* Notification Indicator */}
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-emerald-700 rounded-full" />
        </button>

        {/* Divider */}
        <div className="hidden sm:block h-8 w-px bg-border" />

        {/* User */}
        <button
          type="button"
          className="flex items-center gap-3 px-2 py-1.5 hover:bg-canvas rounded-sm transition-colors"
        >
          {/* Avatar */}
          <div className="w-9 h-9 bg-ink text-surface flex items-center justify-center rounded-full text-xs font-bold">
            M
          </div>

          {/* User Information */}
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold text-ink">
              Mayank
            </p>

            <p className="text-[10px] text-ink-muted">
              Home Manager
            </p>
          </div>

          {/* Dropdown Arrow */}
          <span className="hidden sm:block text-xs text-ink-muted">
            ▾
          </span>
        </button>
      </div>
    </header>
  );
}

export default DashboardNavbar;