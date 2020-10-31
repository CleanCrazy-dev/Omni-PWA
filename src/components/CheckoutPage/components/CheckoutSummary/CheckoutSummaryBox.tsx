import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./scss/checkoutSummaryBox.scss";
import { IHistory } from "../../../../interfaces";

export interface ICheckoutSummaryBox {
  match: {
    params: {
      id: string;
    };
  };
  history: IHistory;
}

export interface IStoreDetails {}

export class CheckOutSumBoxImpl extends React.Component<
  ICheckoutSummaryBox,
  {}
> {
  constructor(props: ICheckoutSummaryBox) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="order_sum_box">
          <div className="row">
            <div className="col-xs-7 no-padding">
              <div>Sub Total: </div>
            </div>
            <div className="col-xs-5 no-padding">
              <span
                id="checkoutOrderSummary-subTotal"
                className="ordersumprice pull-right no-outline"
              >
                ₹590.00
              </span>
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
export const CheckoutSummaryBox = withRouter(
  connect<{}, {}, ICheckoutSummaryBox>(mapStateToProps)(CheckOutSumBoxImpl)
);
