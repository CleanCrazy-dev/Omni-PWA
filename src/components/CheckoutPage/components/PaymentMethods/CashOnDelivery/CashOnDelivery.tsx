import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./cashOnDelivery.scss";
import { IHistory } from "../../../../../interfaces";

export interface ICashOnDelivery {
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
export interface ICashOnDelState {
  otpGenerated: boolean;
}
class CashOnDeliveryImpl extends React.Component<
  ICashOnDelivery,
  ICashOnDelState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      otpGenerated: false
    };
  }

  async componentDidMount() {}

  render() {
    let { otpGenerated } = this.state;
    return (
      <React.Fragment>
        {!otpGenerated && (
          <div className="row generate_otp">
           <div className="col-12">
           <span>
              Clicking on "Generate OTP" button will send a One Time Password to
              the below mobile number.{" "}
            </span>
            <span>Please use this OTP to continue with the transaction.</span>
            <div className="mob_no_cod">
              <span>Mobile Number:</span>
              <span>8149185507</span>
            </div>
            <div className="checkout gen_otp_btn">
              <button className="cc-button-primary" onClick={() => this.setState({ otpGenerated : true })}>
                <span>Generate OTP</span>
              </button>
              <span className="otp_txt">(One Time Password)</span>
            </div>
           </div>
          </div>
        )}
        {otpGenerated && (
          <div
            className="payment_code"
          >
            <div>
              <div className="otp">
                <span className="otp_success">
                  One time password has been sent successfully to your Mobile
                  no.
                </span>
                <div className="otp_code">
                  <span>Mobile Number:</span>
                  <span>8149185507</span>
                </div>
                <div className="control clearfix">
                  <label className="control-label otp_label">
                    One Time Password
                  </label>
                  <input
                    type="tel"
                    className="form-control required-label otp-input"
                    name="sOTP"
                    placeholder="One Time Password"
                  />
                  <span className="text-danger"></span>
                </div>
                <div className="resend_otp">
                  <span>Not Received OTP?</span>
                  <a href="#CC-RESEND_OTP">Resend OTP</a>
                </div>
                <div
                  className="checkout cod_placeorder"
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
export const CashOnDelivery = withRouter(
  connect<{}, {}, ICashOnDelivery>(mapStateToProps)(CashOnDeliveryImpl)
);
