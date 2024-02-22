import { ITopRevenue } from "@/types/dashboard";
import { PieChart, Pie, Cell } from "recharts";

const DashboardPieChart = ({ data }: { data: ITopRevenue }) => {
  const transformedData = [
    { value: data?.direct, colors: "#0088FE" },
    { value: data?.other, colors: "#00C49F" },
    { value: data?.paid, colors: "#FFBB28" },
    { value: data?.social, colors: "#FF8042" },
  ];
  return (
    <div className="flex items-center justify-center">
      <PieChart
        width={400}
        height={400}
        className="flex items-center justify-center"
      >
        <Pie
          data={transformedData}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {transformedData?.map((item, index) => (
            <Cell
              key={`cell-${index}`}
              // fill={COLORS[index % COLORS.length]}
              fill={item.colors}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default DashboardPieChart;
