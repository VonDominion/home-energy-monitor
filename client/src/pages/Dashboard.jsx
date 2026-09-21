import DashboardHero from "../components/dashboard/DashboardHero";
import StatsSection from "../components/dashboard/StatsSection";
import EnergyOverview from "../components/dashboard/EnergyOverview";
import ActiveAppliances from "../components/dashboard/ActiveAppliances";
import Recommendations from "../components/dashboard/Recommendations";

function Dashboard() {
  return (
    <>
      <DashboardHero />
      <StatsSection />
      <EnergyOverview />
      <ActiveAppliances />
      <Recommendations />
    </>
  );
}

export default Dashboard;