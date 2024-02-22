import { getDealsAndRevenue } from "@/api/dashboardApi";
import { useQuery } from "@tanstack/react-query";

const useGetDealAndRevenue = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["deal-revenue"],
    queryFn: getDealsAndRevenue,
  });

  return {
    dealsAndRevenueData: data?.data,
    isLoadingDealsAndRevenue: isLoading,
    isDealsAndRevenueError: isError,
  };
};

export default useGetDealAndRevenue;
