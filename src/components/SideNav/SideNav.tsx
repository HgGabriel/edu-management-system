import { Link, useLocation } from "react-router";
import styles from "./SideNav.module.css";
import React from "react";

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      <button className={styles.menuButton} onClick={toggleNav}>
        <i className={`bi bi-list`}></i>
      </button>
      <div
        className={`${styles.sideNav} ${isOpen ? styles.sideNavOpen : ""}`}
      >
        <div className={styles.logoContainer}>
          <img
            src={isOpen ? "/uninter-logo.png" : "/logo.jpg"}
            alt="Logo"
            className={styles.logo}
          />
        </div>

        <ul>
          {[
            { path: "/", icon: "house", label: "Home" },
            { path: "/calculator", icon: "calculator", label: "Calculator" },
            { path: "/calendar", icon: "calendar", label: "Calendário" },
            { path: "/notes", icon: "journal-bookmark-fill", label: "Notas" },
          ].map((item) => (
            <li
              key={item.path}
              className={location.pathname === item.path ? styles.active : ""}
            >
              <Link to={item.path}>
                <i className={`bi bi-${item.icon}`}></i>
                {isOpen && <p>{item.label}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideNav;
