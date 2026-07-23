import "./Header.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets";

export default function Header() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/" end>
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {token ? (
        <div>
          <NavLink className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {user.firstName ?? "userName"}
          </NavLink>
          <NavLink className="main-nav-item" to="/" end>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
}
