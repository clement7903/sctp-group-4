import React, { useContext } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { House, BusFront, Sun } from "react-bootstrap-icons";
import styles from "./NavbarComponent.module.css";
import { AuthContext } from "./AuthContextProvider";

export default function NavbarComponent() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {isLoggedIn ? (
          <>
            <Link to="/" className={styles.navbarItems}>
              {" "}
              <House></House> Home
            </Link>
            <Link to="weather" className={styles.navbarItems}>
              {" "}
              <Sun></Sun> Weather
            </Link>
            <Link to="bus" className={styles.navbarItems}>
              {" "}
              <BusFront></BusFront> Bus
            </Link>
          </>
        ) : (
          <></>
        )}
      </nav>
      <Outlet></Outlet>
    </>
  );
}
