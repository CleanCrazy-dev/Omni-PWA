import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IHistory } from "../../../../interfaces";
import "./scss/checkoutSummary.scss";
import { CheckoutSummaryBox } from "./CheckoutSummaryBox";

export interface ICheckoutSummary {
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

export class CheckOutSummaryImpl extends React.Component<ICheckoutSummary, {}> {
  state: any = {};

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="checkout-cart-summary">
          <h3>Order Summary</h3>
          <div className="summary_repeat_data">
            <div className="row pt-0 summary_data">
              <div className="col-sm-12 summary_cart_repeat">
                <div className="row pt-0">
                  <div className="col-md-8 col-sm-12">
                    <span className="checkout-cart-summary-product-description">
                      Cotton Hand Block Print Shirt
                    </span>
                    <div className="quantity_box">
                      <span>Qty</span>
                      <span> 1</span>
                    </div>
                    <div className="quantity_box">
                      <span>Size</span>
                      <span> 3-4yrs</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 checkout-cart-summary-product-price no-padding">
                    <span className="pull-right-text">₹590.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="orderSummaryLoadingModal" style={{ position: "relative" }}>
          <CheckoutSummaryBox />
          <CheckoutSummaryBox />
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
export const CheckoutSummary = withRouter(
  connect<{}, {}, ICheckoutSummary>(mapStateToProps)(CheckOutSummaryImpl)
);
