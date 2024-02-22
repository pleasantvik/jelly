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
const Dashboard = () => {
  const { businessMetricData } = useGetBusinessMetrics();

  const { topRevenueData } = useGetTopRevenue();
  const { dealsAndRevenueData } = useGetDealAndRevenue();

  return (
    <PageContainer>
      <PageHeader
        isSearch
        title="Dashboard"
        SecondaryContent={<h2>Hello world</h2>}
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
          <Box className="flex justify-between py-4">
            <h2 className="text-dark-main font-bold text-2xl">
              Deals & Revenue
            </h2>
            <div className="flex justify-between items-center gap-2">
              <p>Details</p>
              <p>Revenue</p>
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
            <h2 className="font-bold text-xl text-dark">
              Campaign Performance
            </h2>
            <span className="bg-gray-300 rounded-lg px-4">Channels: All</span>
          </div>
          <DashboardTable />
        </div>
        <div className="border border-red pt-4 bg-[#fff]">
          <div className="flex justify-between items-center px-4">
            <h2 className="font-bold text-xl text-dark ">
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
