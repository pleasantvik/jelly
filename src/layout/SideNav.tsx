import { ADMIN_SIDENAV, ADMIN_SIDENAV_CENTER } from "@/constants/sideNav";
import { NavLink } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import { Divider } from "@mui/material";

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
    <div className="flex h-screen bg-dark flex-col gap-4 py-8 px-8">
      <p className="text-2xl text-white mb-6">Company</p>
      <div className=" text-white flex flex-col gap-6">
        {ADMIN_SIDENAV.map((sideNav) => (
          <NavLink style={active} to={sideNav.path} key={sideNav.name}>
            <span className="flex items-center gap-2">
              <sideNav.icon
                style={{
                  height: "2rem",
                  width: "2rem",
                }}
              />
              {sideNav.name}
            </span>
          </NavLink>
        ))}
      </div>
      <hr className="h-1 bg-gray-400 block mx-auto" />
      <div className=" text-white flex mt-10 flex-col gap-2">
        {ADMIN_SIDENAV_CENTER.map((sideNav) => (
          <NavLink style={active} to={sideNav.path} key={sideNav.name}>
            <span className="flex items-center gap-2">
              <sideNav.icon
                style={{
                  height: "2rem",
                  width: "2rem",
                }}
              />
              {sideNav.name}
            </span>
          </NavLink>
        ))}
      </div>

      <Divider />

      <footer className="mt-auto text-white ">
        <hr className="h-[1px] w-full bg-gray-400 text-red-500 block mx-auto mt-auto mb-2" />

        <div className="flex items-center justify-between gap-2">
          <div>
            <img
              src="/jake.jpg"
              alt="Jake profile"
              className="rounded-full h-8 w-8"
            />
          </div>
          <p>Bolu Adeboye</p>
          <HiDotsVertical />
        </div>
      </footer>
    </div>
  );
};

export default SideNav;
