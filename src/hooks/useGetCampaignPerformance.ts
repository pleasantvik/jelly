import { getCampaignPerformance } from "@/api/dashboardApi";
import { useQuery } from "@tanstack/react-query";

const useGetCampaignPerformance = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["campaign-performance"],
    queryFn: getCampaignPerformance,
  });

  return {
    campaignPerformanceData: data?.data,
    isLoadingCampaign: isLoading,
    isCampaignError: isError,
  };
};

export default useGetCampaignPerformance;
