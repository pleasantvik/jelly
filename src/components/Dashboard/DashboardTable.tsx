import useGetCampaignPerformance from "@/hooks/useGetCampaignPerformance";
import CustomTable from "../common/Table/CustomTable";
import { capitalize, formatter, numberFormatter } from "@/helpers/formatter";
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
            <span className="font-semibold text-gray-700 text-xl">
              {capitalize(campaign)}
            </span>
            <span className="font-bold text-gray-400">{type}</span>
          </p>
        </div>
      ),
      companies: (
        <span className="text-gray-400 font-bold">
          {numberFormatter(companies)}
        </span>
      ),
      contacts: (
        <span className="text-gray-400 font-bold">
          {numberFormatter(contacts)}
        </span>
      ),
      leads: (
        <span className=" font-bold text-gray-700">
          {numberFormatter(leads)}
        </span>
      ),
      logo,
      type,
      value: (
        <span className="text-lime-500 font-bold ">{formatter(value)}</span>
      ),
      visitors: (
        <span className="text-gray-400 font-bold">
          {numberFormatter(visitors)}
        </span>
      ),
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
