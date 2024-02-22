import {
  BusinessMetrics,
  ICampaignAndPerformance,
  IDealsAndRevenue,
  ITopRevenue,
} from "../types/dashboard";
import api from "./api";

const URLS = {
  fetchBusinessMetricsUrl: `/api/business-metrics`,
  fetchTopRevenuesUrl: `/api/top-revenue-channel`,
  fetchCampaignPerformanceUrl: `/api/campaign-performance`,
  fetchDealsAndRevenueUrl: `/api/deals-and-revenue`,
};

export const getBusinessMetrics = () => {
  return api.get<BusinessMetrics>(URLS.fetchBusinessMetricsUrl);
};
export const getTopRevenues = () => {
  return api.get<ITopRevenue>(URLS.fetchTopRevenuesUrl);
};
export const getCampaignPerformance = () => {
  return api.get<ICampaignAndPerformance[]>(URLS.fetchCampaignPerformanceUrl);
};
export const getDealsAndRevenue = () => {
  return api.get<IDealsAndRevenue[]>(URLS.fetchDealsAndRevenueUrl);
};
