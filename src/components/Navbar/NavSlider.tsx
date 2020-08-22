import * as React from "react";
import Sidebar from "react-sidebar";
import "./navbar.scss";

export class NavSideBar extends React.Component<any> {
  render() {
    console.log(">> this.props", this.props);
    return (
      <Sidebar
        sidebar={this.props.children}
        open={this.props.isOpen}
        rootClassName="MySideNav"
        styles={{ sidebar: { background: "white" } }}
      ></Sidebar>
    );
  }
}
