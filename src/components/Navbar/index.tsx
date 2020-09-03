import React, { useState } from "react";
import TreeMenu from "react-simple-tree-menu";
import {
  Collapse,
  Nav,
  Navbar as RNav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { CurrencySwitch } from "../CurrencySwitch";
import Logo from "./fabLogo.png";
import "./navbar.scss";
import navConfig from "./config.json";
import { SignUpPage } from "../AccountPage/SignUpPage";
import { Login } from "../AccountPage/Login";

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

const tree = navConfig.items.map((item) => {
  const obj = {
    key: item.id,
    label: item.displayName,
    nodes: (item.childCategoriesMain as any).map((i: any) => {
      return { label: i.displayName, key: i.id, nodes: [] };
    }),
  };
  return obj;
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [isLogin, isOpenLogin] = useState(false);
  const [isSignUp, isOpenSignUp] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  console.log(">> isLogin", isLogin);
  return (
    <RNav color="light" light fixed="top" expand="md">
      <Login isOpen={isLogin} />
      <SignUpPage isOpen={isSignUp} />
      <NavbarBrand>
        <i
          className="fa fa-bars hidden-lg"
          aria-hidden="true"
          onClick={() => setIsOpenBurger(true)}
        >
          {" "}
        </i>
        <a href="/">
          {" "}
          <img
            className="LogoOnHamburger"
            width="120px"
            src={Logo}
            alt="Logo"
          />
        </a>
      </NavbarBrand>
      <div
        className={`HambburgerSideMenu ${
          isOpenBurger ? "HM-open" : "HM-close"
        }`}
      >
        <div className="MainLogo">
          {" "}
          <a href="/">
            {" "}
            <img
              className="LogoOnHamburger"
              width="120px"
              src={Logo}
              alt="Logo"
            />
          </a>
        </div>{" "}
        <div className="AuthButtons">
          <div style={{ margin: "0px 10px" }} onClick={() => isOpenLogin(true)}>
            Login
          </div>
          &nbsp;&nbsp;
          <div
            style={{ margin: "0px 10px" }}
            onClick={() => isOpenSignUp(true)}
          >
            SignUp
          </div>
        </div>
        <div className="TreeNode hidden-lg">
          <TreeMenu data={tree as any} hasSearch={false} />
        </div>{" "}
        <i
          onClick={() => setIsOpenBurger(false)}
          className="fa fa-times"
          aria-hidden="true"
        ></i>
      </div>
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
          <div style={{ margin: "0px 10px" }} onClick={() => isOpenLogin(true)}>
            Login
          </div>
          &nbsp;&nbsp;
          <div
            style={{ margin: "0px 10px" }}
            onClick={() => isOpenSignUp(true)}
          >
            SignUp
          </div>
          <CurrencySwitch />
          {/* <NavbarText>
            Sign In | Sign Up | Track Your Order | Store Locator
          </NavbarText> */}
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
