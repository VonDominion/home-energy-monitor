import EnergyHeader from "../components/energy/EnergyHeader";
import EnergyStats from "../components/energy/EnergyStats";
import LiveConsumption from "../components/energy/LiveConsumption";
import ConsumptionHistory from "../components/energy/ConsumptionHistory";
import EnergyCost from "../components/energy/EnergyCost";
import DailyConsumption from "../components/energy/DailyConsumption";
import PeakUsage from "../components/energy/PeakUsage";
import EnergyTarget from "../components/energy/EnergyTarget";

function Energy() {
  return (
    <>
      <EnergyHeader />

      <EnergyStats />

      <div className="space-y-6">
        <LiveConsumption />

        <ConsumptionHistory />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EnergyCost />
          <PeakUsage />
        </div>

        <DailyConsumption />

        <EnergyTarget />
      </div>
    </>
  );
}

export default Energy;