import { useQuery } from "@tanstack/react-query";

import { getBusinessMetrics } from "../api/dashboardApi";

export const useGetBusinessMetrics = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["business-metrics"],
    queryFn: getBusinessMetrics,
  });

  return {
    businessMetricData: data?.data,
    isLoadingBusiness: isLoading,
    isBusinessError: isError,
  };
};
