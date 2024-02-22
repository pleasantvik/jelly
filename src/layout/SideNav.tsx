import { ADMIN_SIDENAV, ADMIN_SIDENAV_CENTER } from "@/constants/sideNav";
import { NavLink } from "react-router-dom";

const active = ({ isActive }: { isActive: boolean }) => {
  return {
    color: isActive ? "#DCFFBF" : "#454851",
    fill: isActive ? "#DCFFBF" : "#454851",

    transition: "all .3s",
  };
};
const SideNav = () => {
  //   const location = useLocation();

  //   const pathname = location.pathname.split("/")[1];

  return (
    <div className="flex h-screen bg-dark flex-col gap-4 py-8 px-6">
      <p className="text-2xl text-white">Company</p>
      <div className=" text-white flex flex-col gap-2">
        {ADMIN_SIDENAV.map((sideNav) => (
          <NavLink style={active} to={sideNav.path} key={sideNav.name}>
            {sideNav.name}
          </NavLink>
        ))}
      </div>
      <hr className="h-1 bg-gray-400 block mx-auto" />
      <div className=" text-white flex mt-10 flex-col gap-2">
        {ADMIN_SIDENAV_CENTER.map((sideNav) => (
          <NavLink style={active} to={sideNav.path} key={sideNav.name}>
            {sideNav.name}
          </NavLink>
        ))}
      </div>

      <footer className="mt-auto text-white">
        <p>Hello</p>
      </footer>
    </div>
  );
};

export default SideNav;
