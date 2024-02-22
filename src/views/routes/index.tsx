import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "..";
import Dashboard from "../Dashboard";
// import Dashboard from "@/components/Dashboard";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<Admin />}>
        <Route index path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
