import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar as RNav,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import Logo from "./LogoSmall.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <RNav color="light" light fixed="top" expand="md">
      <NavbarBrand href="/">
        <img src={Logo} alt="Logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <input
              className="SearchInput"
              placeholder="Enter your search text here..."
            />
          </NavItem>
        </Nav>
        <NavbarText>
          Sign In | Sign Up | Track Your Order | Store Locator
        </NavbarText>
      </Collapse>
    </RNav>
  );
};
