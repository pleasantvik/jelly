import useGetCampaignPerformance from "@/hooks/useGetCampaignPerformance";
import CustomTable from "../common/Table/CustomTable";
import { formatter, numberFormatter } from "@/helpers/formatter";
import { tableHeadNames } from "./constants";

export type IDashboardTableKey = {
  campaign: string;
  companies: number;
  contacts: number;
  leads: number;
  logo: string;
  type: string;
  value: number;
  visitors: number;
  id: number;
};
const DashboardTable = () => {
  const { campaignPerformanceData, isLoadingCampaign } =
    useGetCampaignPerformance();

  const createData = ({
    campaign,
    companies,
    contacts,
    leads,
    logo,
    type,
    value,
    visitors,
    id,
  }: IDashboardTableKey) => {
    return {
      campaign: (
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full">
            <img src={logo} alt="Logo" />
          </div>
          <p className="flex flex-col gap-1">
            <span className="font-bold text-xl">{campaign}</span>
            <span>{type}</span>
          </p>
        </div>
      ),
      companies,
      contacts,
      leads,
      logo,
      type,
      value: (
        <span className="text-primary font-bold ">{formatter(value)}</span>
      ),
      visitors: numberFormatter(visitors),
      id,
    };
  };

  const dataResult =
    campaignPerformanceData &&
    campaignPerformanceData?.map(
      (
        { campaign, companies, contacts, leads, logo, type, value, visitors },
        index
      ) =>
        createData({
          campaign,
          companies,
          contacts,
          leads,
          logo,
          type,
          value,
          visitors,
          id: index + 1,
        })
    );
  return (
    <div>
      <CustomTable
        results={dataResult}
        tableHeads={tableHeadNames}
        isLoading={isLoadingCampaign}
        handleChangePage={() => {}}
        page={1}
      />
    </div>
  );
};

export default DashboardTable;
