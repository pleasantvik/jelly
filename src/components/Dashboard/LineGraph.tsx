import { IDealsAndRevenue } from "@/types/dashboard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineGraph = ({
  data,
  dataName,
  primaryKey,
  secKey,
}: {
  data: IDealsAndRevenue[];
  dataName: string;
  primaryKey: string;
  secKey: string;
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataName} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={primaryKey}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey={secKey} stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
