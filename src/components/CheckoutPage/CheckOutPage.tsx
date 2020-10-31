import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./scss/checkoutPage.scss";
import { IHistory } from "../../interfaces";
import { ShippingRegistration } from "./components/ShippingRegistration/ShippingRegistration";
import { ShippingAddress } from "./components/ShippingAddress/ShippingAddress";
import { CheckoutPayment } from "./components/PaymentMethods/CheckOutPayment";
import { CheckoutSummary } from "./components/CheckoutSummary/CheckoutSummary";

export interface ICheckoutPage {
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

export class CheckOutImpl extends React.Component<ICheckoutPage, {}> {
  state: any = {};

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="checkout-main-process col-sm-9">
            <ShippingRegistration />
            <ShippingAddress />
            <CheckoutPayment />
          </div>
          <div className="col-sm-3">
            <CheckoutSummary />
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
export const CheckoutPage = withRouter(
  connect<{}, {}, ICheckoutPage>(mapStateToProps)(CheckOutImpl)
);
