import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IHistory } from "../../../../../interfaces";
import "./wallet.scss";
import { PayNowBtn } from "../../../../Common/PayNowBtn/PayNowBtn";

import freeCharge from "../../../../../resource/img/FreeCharge_wallet.jpg";
import airtel from "../../../../../resource/img/airtel-wallet.jpg";
import amazon from "../../../../../resource/img/Amazon_Pay_wallet.jpg";
import paytm from "../../../../../resource/img/Paytm_wallet.jpg";
import phonePay from "../../../../../resource/img/PhonePe-wallet.jpg";
import amex from "../../../../../resource/img/amex-wallet.jpg";

export interface IWallet {
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

class WalletImpl extends React.Component<IWallet, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="wallet_wrapper col-12">
            <ul className="row">
              <li className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <a>
                  <img src={freeCharge} alt="HDFC Bank" />
                </a>
              </li>

              <li className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <a data-bind="click:$parent.bankNameClicked , css:{'selectedCard': $parent.selectedBank() == title}">
                  <img src={airtel} alt="State Bank of India" />
                </a>
              </li>

              <li className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <a data-bind="click:$parent.bankNameClicked , css:{'selectedCard': $parent.selectedBank() == title}">
                  <img src={amazon} alt="Axis Bank" />
                </a>
              </li>

              <li className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <a data-bind="click:$parent.bankNameClicked , css:{'selectedCard': $parent.selectedBank() == title}">
                  <img src={paytm} alt="Kotak Mahindra Bank" />
                </a>
              </li>

              <li className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <a data-bind="click:$parent.bankNameClicked , css:{'selectedCard': $parent.selectedBank() == title}">
                  <img src={phonePay} alt="Standard Chartered Bank" />
                </a>
              </li>

              <li className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <a data-bind="click:$parent.bankNameClicked , css:{'selectedCard': $parent.selectedBank() == title}">
                  <img src={amex} alt="ICICI Bank" />
                </a>
              </li>
            </ul>
            <div className="row control clearfix">
              <select
                name="bankName col-12"
                className="form-control select_wallet"
              >
                <option value="">Select a Wallet</option>
                <option value="FREC">Freecharge</option>
                <option value="AMON">Airtel Money</option>
                <option value="AMZPAY">Amazon Pay</option>
                <option value="paytm">Paytm</option>
                <option value="PHONEPE">PhonePe</option>
                <option value="AMEXZ">Amex easy click</option>
                <option value="ITZC">ItzCash</option>
                <option value="OLAM">Ola Money</option>
                <option value="OXICASH">Oxigen</option>
                <option value="PAYZ">HDFC PayZapp</option>
                <option value="YESW">Yesbank</option>
                <option value="PAYCASH">Paycash</option>
                <option value="JIOM">Jio Money</option>
                <option value="CPMC">Citibank Reward Points</option>
              </select>
            </div>
            <PayNowBtn />
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
export const Wallet = withRouter(
  connect<{}, {}, IWallet>(mapStateToProps)(WalletImpl)
);
