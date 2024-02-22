import { useQuery } from "@tanstack/react-query";

import { getTopRevenues } from "../api/dashboardApi";

export const useGetTopRevenue = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["top-revenue"],
    queryFn: getTopRevenues,
  });

  return {
    topRevenueData: data?.data,
    isTopRevenueLoading: isLoading,
    isTopRevenueError: isError,
  };
};
