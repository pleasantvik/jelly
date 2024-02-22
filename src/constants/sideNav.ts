import { DashboardPath } from "./path";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAnalytics } from "react-icons/md";
import { HiMap } from "react-icons/hi";
import { HiDatabase } from "react-icons/hi";
import { RiSettingsFill } from "react-icons/ri";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

type SvgInHtml = typeof LuLayoutDashboard;

interface INavLInk {
  name: string;
  path: string;
  icon: SvgInHtml;
}
const ADMIN_SIDENAV: INavLInk[] = [
  {
    name: "Dashboard",
    path: DashboardPath.DASHBOARD,
    icon: LuLayoutDashboard,
  },
  {
    name: "Revenue Analytics",
    path: DashboardPath.REVENUE,
    icon: MdAnalytics,
  },
  {
    name: "Journey",
    path: DashboardPath.JOURNEY,
    icon: HiMap,
  },
  {
    name: "Performance",
    path: DashboardPath.PERFORMANCE,
    icon: LuLayoutDashboard,
  },
  {
    name: "Data Platform",
    path: DashboardPath.DATA,
    icon: HiDatabase,
  },
];
const ADMIN_SIDENAV_CENTER: INavLInk[] = [
  {
    name: "Settings",
    path: DashboardPath.SETTINGS,
    icon: RiSettingsFill,
  },
  {
    name: "Help",
    path: DashboardPath.HELP,
    icon: HiChatBubbleBottomCenterText,
  },
];

export { ADMIN_SIDENAV, ADMIN_SIDENAV_CENTER };
