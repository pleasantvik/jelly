export interface BusinessMetrics {
  visitors: {
    count: number;
    changePercentage: number;
  };
  contacts: {
    count: number;
    changePercentage: number;
  };
  attributableDeals: {
    count: number;
    changePercentage: number;
  };
  revenue: {
    count: number;
    changePercentage: number;
  };
}

export interface IDealsAndRevenue {
  month: string;
  deals: number;
  revenue: number;
}
export interface ICampaignAndPerformance {
  campaign: string;
  type: string;
  visitors: number;
  contacts: number;
  companies: number;
  leads: number;
  value: number;
  logo: string;
}
export interface ITopRevenue {
  direct: number;
  paid: number;
  social: number;
  other: number;
  total: number;
}
