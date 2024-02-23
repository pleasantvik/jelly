import { ITopRevenue } from "@/types/dashboard";
import { useDrawingArea } from "@mui/x-charts";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { styled } from "@mui/material/styles";
import { formatter } from "@/helpers/formatter";

const StyledText = styled("text")(() => ({
  fill: "#374151",
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
  fontWeight: 700,
}));

const sizing = {
  margin: { right: 5 },
  width: 500,
  height: 500,
  legend: { hidden: true },
};

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const DashboardPieChart = ({ data }: { data: ITopRevenue }) => {
  const transformedData = [
    { value: data?.direct, color: "#0088FE", label: "Direct" },
    { value: data?.other, color: "#00C49F", label: "Other" },
    { value: data?.paid, color: "#FFBB28", label: "Paid" },
    { value: data?.social, color: "#FF8042", label: "Social" },
  ];

  return (
    <PieChart
      series={[
        {
          outerRadius: 120,
          innerRadius: 80,
          data: transformedData,
          cx: 250,
          cy: 250,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 14,
        },
      }}
      {...sizing}
    >
      <PieCenterLabel>{formatter(data?.total)}</PieCenterLabel>
    </PieChart>
  );
};

export default DashboardPieChart;
