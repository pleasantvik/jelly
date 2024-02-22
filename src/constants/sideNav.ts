import { DashboardPath } from "./path";

interface INavLInk {
  name: string;
  path: string;
}
const ADMIN_SIDENAV: INavLInk[] = [
  {
    name: "Dashboard",
    path: DashboardPath.DASHBOARD,
  },
  {
    name: "Revenue Analytics",
    path: DashboardPath.REVENUE,
  },
  {
    name: "Journey",
    path: DashboardPath.JOURNEY,
  },
  {
    name: "Performance",
    path: DashboardPath.PERFORMANCE,
  },
  {
    name: "Data Platform",
    path: DashboardPath.DATA,
  },
];
const ADMIN_SIDENAV_CENTER: INavLInk[] = [
  {
    name: "Settings",
    path: DashboardPath.SETTINGS,
  },
  {
    name: "Help",
    path: DashboardPath.HELP,
  },
];

export { ADMIN_SIDENAV, ADMIN_SIDENAV_CENTER };
