import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Row, Col } from "reactstrap";
import { IHistory } from "../../../../interfaces";
import "./scss/shippingRegistration.scss";
// import fbIcon from "../../resource/img/facebook-app-logo.svg";

export interface ICheckoutRegistration {
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

export class CheckOutRegistration extends React.Component<
  ICheckoutRegistration,
  {}
> {
  state: any = {};

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="checkout-registration">
          <div className="checkout_titles">
            <h3 style={{ display: "contents" }}>Login Details</h3>

            <div className="user_active">
              <span className="fa fa-check hidden-sm hidden-xs"></span>
            </div>

            <div className="col-xs-12">
              <span className="no-outline">nanotest46@gmail.com</span>
              <button className="cc-button-primary change_btn">
                <span>Change</span>
              </button>
              <div className="user_active">
                <span
                  id="fa-user-active"
                  className="fa fa-check visible-xs"
                ></span>
              </div>
            </div>
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
export const ShippingRegistration = withRouter(
  connect<{}, {}, ICheckoutRegistration>(mapStateToProps)(CheckOutRegistration)
);
