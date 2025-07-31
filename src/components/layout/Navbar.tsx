import "../../Pages/dashboard.css";
import { useLocation } from "react-router-dom";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoOrganization } from "react-icons/go";
import { RiLinkUnlinkM } from "react-icons/ri";
import { CiPower } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

interface NavbarProps {
  setNavbar: (input: boolean) => void;
  navbar: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ setNavbar, navbar }) => {
  const location = useLocation();
const pathname = location.pathname;


  return (
    <div className={`navbar ${!navbar ? "closeNav" : ""}`}>
      <div className="head">
        <div className="logo">
          <h1>WorkSync.</h1>
          {navbar && (
            <div className="closeIcon" onClick={() => setNavbar(false)}>
              <GrClose />
            </div>
          )}
        </div>

        <div className="company">
          <div className="companyLogo">
            <img src="./images/alignLabs2.png" alt="logo" />
          </div>
          <div className="companyName">
            <h5>Your Company</h5>
            <p>Align Labs</p>
          </div>
        </div>

        <div>
          <div className="menu">
            <h3>Menu</h3>
          </div>

          <a
            className={`navLink ${pathname === "/dashboard" ? "selected" : ""}`}
            href="/dashboard"
          >
            <MdOutlineSpaceDashboard size={20} />
            <p>Dashboard</p>
          </a>

          <hr className="menu" />

          <a
            className={`navLink ${pathname === "/students" ? "selected" : ""}`}
            href="/students"
          >
            <PiSuitcaseSimpleLight size={20} />
            <p>Students</p>
          </a>

          <a
            className={`navLink ${pathname === "/lectures" ? "selected" : ""}`}
            href="/lectures"
          >
            <FaPeopleGroup size={20} />
            <p>Lecturers</p>
          </a>

          <a
            className={`navLink ${pathname === "/courses" ? "selected" : ""}`}
            href="/courses"
          >
            <GoOrganization size={20} />
            <p>Courses</p>
          </a>

          <a
            className={`navLink ${pathname === "/payments" ? "selected" : ""}`}
            href="/payments"
          >
            <RiLinkUnlinkM size={20} />
            <p>Payments</p>
          </a>
        </div>
      </div>

      <div className="toe">
        <hr className="menu" />

        <a className="navLink toeBtn" href="/">
          <IoSettingsOutline size={20} />
          <p>Settings</p>
        </a>

        <a
          className="navLink toeBtn"
          style={{ marginTop: 5, backgroundColor: "#fff" }}
          href="/"
        >
          <CiPower size={20} color="#000" />
          <p style={{ color: "#000" }}>Logout</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
