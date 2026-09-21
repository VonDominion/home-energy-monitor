import AppliancesHeader from "../components/appliances/AppliancesHeader";
import ApplianceStats from "../components/appliances/ApplianceStats";
import ApplianceFilters from "../components/appliances/ApplianceFilters";
import ApplianceList from "../components/appliances/ApplianceList";

function Appliances() {
  return (
    <>
      <AppliancesHeader />
      <ApplianceStats />
      <ApplianceFilters />
      <ApplianceList />
    </>
  );
}

export default Appliances;