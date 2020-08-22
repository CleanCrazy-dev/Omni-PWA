import * as React from "react";
import { connect } from "react-redux";
import { Navbar } from "../Navbar";
import { Footer } from "./Footer";
import { NavSideBar } from "../Navbar/NavSlider";
import TreeMenu from "react-simple-tree-menu";

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
export interface IBasePageProps {}

export class BasePageImpl extends React.PureComponent<
  IBasePageProps,
  { sideBarOpen: boolean }
> {
  state = {
    sideBarOpen: false,
  };

  render() {
    return (
      <div className="BasePage">
        {" "}
        <div className="TreeNode">
          <div
            onClick={() => {
              alert("Hello");
              this.setState({ sideBarOpen: !this.state.sideBarOpen });
            }}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <NavSideBar isOpen={this.state.sideBarOpen}>
            <TreeMenu data={treeData} hasSearch={false} />
            <button
              onClick={() =>
                this.setState({ sideBarOpen: !this.state.sideBarOpen })
              }
            >
              Closee
            </button>
          </NavSideBar>
        </div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
export function mapStateToProps() {
  return {};
}
export const BasePage = connect<{}, {}, IBasePageProps>(mapStateToProps)(
  BasePageImpl
);
