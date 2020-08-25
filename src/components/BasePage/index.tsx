import * as React from "react";
import { connect } from "react-redux";
import { Navbar } from "../Navbar";

export interface IBasePageProps {}

export class BasePageImpl extends React.PureComponent<IBasePageProps, {}> {
  render() {
    return (
      <div className="BasePage">
        <Navbar />
        {this.props.children}
        {/* <Footer /> */}
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
