import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IHistory } from "../../../../../interfaces";


export interface IGiftCards {
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
export interface IGiftCardsState {
  otpGenerated: boolean;
}

class GiftCardsImpl extends React.Component<
  IGiftCards,
  IGiftCardsState
> {
  constructor(props: any) {
    super(props);
    this.state = {
     otpGenerated : false
    };
  }

  async componentDidMount() {}

  
  render() {
    let { otpGenerated } = this.state;
    return (
      <React.Fragment>
        {!otpGenerated && (
          <div className="generate_otp">
            <span>
              Clicking on "Generate OTP" button will send a One Time Password to
              the below mobile number.{" "}
            </span>
            <span>Please use this OTP to continue with the transaction.</span>
            <div className="mob_no_cod">
              <span>Mobile Number:</span>
              <span>8149185507</span>
            </div>
            <div className="checkout gen_otp_btn row">
              <button className="cc-button-primary" onClick={() => this.setState({ otpGenerated : true })}>
                <span>Generate OTP</span>
              </button>
              <span className="otp_txt">(One Time Password)</span>
            </div>
          </div>
        )}
        {otpGenerated && (
          <div
            data-bind="visible: ppCodPayment.expandCODTab()"
            className="cod_payment"
          >
            <div>
              <div className="enter_otp">
                <span>
                  One time password has been sent successfully to your Mobile
                  no.
                </span>
                <div className="cod_otp">
                  <span>Mobile Number:</span>
                  <span>8149185507</span>
                </div>
                <div className="control clearfix">
                  <label className="control-label otp_label">
                    One Time Password
                  </label>
                  <input
                    type="tel"
                    className="form-control required-label"
                    name="sOTP"
                    id="CC-paymentGatewayOptions-codPayment-sotp"
                    placeholder="One Time Password"
                  />
                  <span className="text-danger"></span>
                </div>
                <div className="resend_otp">
                  <span>Not Received OTP?</span>
                  <a href="#CC-RESEND_OTP">Resend OTP</a>
                </div>
                <div
                  id="CC-paymentGatewayOptions-placeOrder"
                  className="checkout cod_placeorder row"
                >
                  <button className="cc-button-primary">
                    <span>Confirm Order</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
export function mapStateToProps(state: any, ownProps: any) {
  return {
    reduxState: state
  };
}
export const GiftCards = withRouter(
  connect<{}, {}, IGiftCards>(mapStateToProps)(GiftCardsImpl)
);
