import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IHistory } from "../../../../interfaces";
import "./scss/checkOutPayment.scss";
import { PayNowBtn } from "../../../Common/PayNowBtn/PayNowBtn";

export interface ICheckoutPayMethodsState {
  activePaymentMethod?: any;
}

export interface ICheckoutPayment {
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

export class CheckOutPayment extends React.Component<
  ICheckoutPayment,
  ICheckoutPayMethodsState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      activePaymentMethod: this.paymentMetods[0]
    };
  }

  async componentDidMount() {}

  paymentMetods: { id: string; title: string }[] = [
    {
      id: "0",
      title: "saved card"
    },
    {
      id: "1",
      title: "credit / debit card"
    },
    {
      id: "2",
      title: "Net Banking"
    },
    {
      id: "3",
      title: "Cash on Delivery"
    },
    {
      id: "4",
      title: "UPI"
    },
    {
      id: "5",
      title: "Google Pay"
    },
    {
      id: "6",
      title: "Wallet"
    },
    {
      id: "7",
      title: "EMI"
    },
    {
      id: "8",
      title: "Gift Card"
    },
    {
      id: "9",
      title: "Loyalty Paints"
    }
  ];

  setActiveMethod = (method: any) => {
    this.setState({
      activePaymentMethod: method
    });
  };

  render() {
    let { activePaymentMethod } = this.state;
    return (
      <React.Fragment>
        <div className="row pb-0">
          <div className="col-12 payments-bar no-padding">
            <button>
              <span>Payment Details</span>
            </button>
          </div>

          <div className="col-12">
            <div
              className="row main_payments_wrapper pt-0 pb-0"
              style={{ paddingTop: "0px" }}
            >
              <div className="col-12 no-padding">
                <div className="header">Make Payment</div>
              </div>
              <div className="col-12">
                <div className="row pb-0 pt-0">
                  <div className="col-3 no-padding">
                    <div className="payment_methods_list">
                      {this.paymentMetods.map(method => (
                        <div
                          className={`payment_button ${
                            activePaymentMethod.id === method.id
                              ? "activePayment"
                              : ""
                          }`}
                          key={method.id}
                          onClick={() => this.setActiveMethod(method)}
                        >
                          <button>
                            <span>{method.title}</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="payment_desc">
                      <PayNowBtn />
                    </div>
                  </div>
                </div>
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
export const CheckoutPayment = withRouter(
  connect<{}, {}, ICheckoutPayment>(mapStateToProps)(CheckOutPayment)
);
