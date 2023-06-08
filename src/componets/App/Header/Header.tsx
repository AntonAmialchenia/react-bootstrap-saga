import React, { FC } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header>
      <Navbar expand="md" className="mb-3">
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="start">
          <Offcanvas.Header
            className="justify-content-end"
            closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className=" flex-grow-1 gap-4 pt-3 pb-3 justify-content-end">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? [styles.active, styles.link].join(" ")
                    : styles.link
                }>
                Posts
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? [styles.active, styles.link].join(" ")
                    : styles.link
                }
                to="user">
                About
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </header>
  );
};
