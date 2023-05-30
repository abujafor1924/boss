import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";

const Deshboard = () => {
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054] ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-base-content">
          <li>
            <NavLink>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaWallet /> Payment Hisotry
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/mycart"}>
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Deshboard;
