import PageContainer from "@/layout/PageContainer";
import PageHeader from "@/components/common/PageHeader";
import Box from "@/components/common/Box";
import Card from "@/components/Dashboard/Card";
import { useGetBusinessMetrics } from "@/hooks/useFetchBusinessMetrics";

import { useGetTopRevenue } from "@/hooks/useGetTopRevenue";
import useGetDealAndRevenue from "@/hooks/useGetDealAndRevenue";
import LineGraph from "@/components/Dashboard/LineGraph";
import DashboardTable from "@/components/Dashboard/DashboardTable";
import DashboardPieChart from "@/components/Dashboard/DashboardPieChart";
import { IDealsAndRevenue, ITopRevenue } from "@/types/dashboard";
import { HiChevronRight } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
const Dashboard = () => {
  const { businessMetricData } = useGetBusinessMetrics();

  const { topRevenueData } = useGetTopRevenue();
  const { dealsAndRevenueData } = useGetDealAndRevenue();

  return (
    <PageContainer>
      <PageHeader
        isSearch
        title="Dashboard"
        SecondaryContent={
          <div
            className={`flex h-9 w-[300px] items-center  border border-red px-4 `}
          >
            <CiSearch className="h-8 w-8" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full border-[0px] bg-white p-2  text-xs outline-[0px] placeholder:text-[18.5px] placeholder:lowercase focus:border-none focus:outline-0"
            />
          </div>
        }
      />
      <Box className="grid grid-cols-2">
        <Box className="grid grid-cols-2  grid-rows-2 ">
          <Card
            isbg
            color="green"
            title="Visitors"
            count={businessMetricData?.visitors?.count as number}
            percent={businessMetricData?.visitors?.changePercentage as number}
          />
          <Card
            title="Contacts"
            count={businessMetricData?.contacts?.count as number}
            percent={businessMetricData?.contacts?.changePercentage as number}
          />
          <Card
            title="Attribute Deals"
            count={businessMetricData?.attributableDeals?.count as number}
            percent={
              businessMetricData?.attributableDeals?.changePercentage as number
            }
          />
          <Card
            title="Revenue"
            count={businessMetricData?.revenue?.count as number}
            percent={businessMetricData?.revenue?.changePercentage as number}
          />
        </Box>
        <Box className="border border-red flex flex-col px-4">
          <Box className="flex justify-between py-4 items-center">
            <h2 className="text-gray-700 font-bold text-2xl">
              Deals & Revenue
            </h2>
            <div className="flex justify-between items-center gap-2">
              <p className="flex items-center gap-2">
                <span className="h-2 w-2  rounded-full bg-red-400"></span>
                <span className="text-sm"> Deals</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2 w-2  rounded-full bg-purple-400"></span>
                <span className="text-sm"> Revenue</span>
              </p>
            </div>
          </Box>
          <LineGraph
            data={dealsAndRevenueData as IDealsAndRevenue[]}
            dataName="month"
            primaryKey="revenue"
            secKey="deals"
          />
        </Box>
      </Box>
      <Box className="grid grid-cols-[3fr_1fr] mt-10 gap-4">
        <div className="border border-red pt-4">
          <div className="flex justify-between items-center px-4 mb-4">
            <h2 className="font-bold text-2xl text-gray-700">
              Campaign Performance
            </h2>
            <div className="flex gap-2 items-center ">
              <span className="bg-[#eee] rounded-lg p-2">
                <CiSearch />
              </span>
              <span className="bg-[#eee] rounded-lg px-4 py-1">
                Channels:
                <span className="text-gray-700 font-bold ml-1">All</span>
              </span>
            </div>
          </div>
          <DashboardTable />
        </div>
        <div className="border border-red pt-4 bg-[#fff]">
          <div className="flex justify-between items-center px-4">
            <h2 className="font-bold text-2xl text-gray-700 ">
              Top Revenue Channels
            </h2>
            <HiChevronRight />
          </div>
          <DashboardPieChart data={topRevenueData as ITopRevenue} />
        </div>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
