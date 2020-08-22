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
import Logo from "./fabLogo.png";
import { map } from "ramda";
import "./navbar.scss";
import navConfig from "./config.json";
import { isMobile } from "../../generalUtils";
import { NavSideBar } from "./NavSlider";
// as an array
const treeData = [
  {
    key: "first-level-node-1",
    label: "Node 1 at the first level",
    nodes: [
      {
        key: "second-level-node-1",
        label: "Node 1 at the second level",
        nodes: [
          {
            key: "third-level-node-1",
            label: "Last node of the branch",
            nodes: [], // you can remove the nodes property or leave it as an empty array
          },
        ],
      },
    ],
  },
  {
    key: "first-level-node-2",
    label: "Node 2 at the first level",
  },
];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const toggle = () => setIsOpen(!isOpen);
  return (
    <RNav color="light" light fixed="top" expand="md">
     
      <NavbarBrand href="/">
        <img width="120px" src={Logo} alt="Logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <div className="MyNavContainer">
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <div className="SearchInp">
                {" "}
                <input
                  className="SearchInput"
                  placeholder="Enter your search text here..."
                />
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
            </NavItem>
          </Nav>
          <NavbarText>
            Sign In | Sign Up | Track Your Order | Store Locator
          </NavbarText>
        </Collapse>
        <div className="MenuItemContainer hidden-xs ">
          {navConfig.items.map((itemData, index) => {
            return (
              <>
                <div
                  onMouseEnter={() => setActiveItem(itemData.repositoryId)}
                  className="NavItem"
                  key={index}
                >
                  {itemData.displayName}
                  <i className="fa fa-chevron-down"></i>
                  {activeItem === itemData.repositoryId && (
                    <div
                      onMouseLeave={() => setActiveItem("")}
                      className="HoverElement"
                    >
                      <h1>Items Goes Here for {itemData.displayName}</h1>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </RNav>
  );
};
