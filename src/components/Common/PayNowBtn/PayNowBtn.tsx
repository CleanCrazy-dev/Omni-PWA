import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./payNowBtn.scss";
import { IHistory } from "../../../interfaces";

export interface IPayNowBtn {
  match: {
    params: {
      id: string;
    };
  };
  history: IHistory;
}

export interface IStoreDetails {
  operationalDays?: string;
}

export class PayNowBtnImpl extends React.Component<IPayNowBtn, {}> {
  state: any = {};

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12 no-padding">
            <a href="#" className="cc-button-primary pay-now-btn">
              <span>Pay Now</span>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export function mapStateToProps(state: any, ownProps: any) {
  return {
    reduxState: state
  };
}
export const PayNowBtn = withRouter(
  connect<{}, {}, IPayNowBtn>(mapStateToProps)(PayNowBtnImpl)
);
