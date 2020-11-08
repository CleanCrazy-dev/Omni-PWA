import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IHistory } from "../../../../../interfaces";
import "./netBanking.scss";
import { PayNowBtn } from "../../../../Common/PayNowBtn/PayNowBtn";

import hdfcBank from "../../../../../resource/img/HDFC_netbanking.jpg";
import sbiBank from "../../../../../resource/img/state-bank-of-india-netbanking.jpg";
import axisBank from "../../../../../resource/img/Axis_Bank_netbanking.jpg";
import kotakBank from "../../../../../resource/img/Kotak_Mahindra_Bank_netbanking.jpg";
import standardBank from "../../../../../resource/img/Standard_Chartered_netbanking.jpg";
import iCIBank from "../../../../../resource/img/ICICI_Bank_netbanking.jpg";

export interface INetBanking {
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

class NetBankingImpl extends React.Component<INetBanking, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="netbanking_wrapper col-12">
            <ul className="row">
              <li className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <a>
                  <img src={hdfcBank} alt="HDFC Bank" />
                </a>
              </li>

              <li className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <a data-bind="click:$parent.bankNameClicked , css:{'selectedCard': $parent.selectedBank() == title}">
                  <img src={sbiBank} alt="State Bank of India" />
                </a>
              </li>

              <li className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <a data-bind="click:$parent.bankNameClicked , css:{'selectedCard': $parent.selectedBank() == title}">
                  <img src={axisBank} alt="Axis Bank" />
                </a>
              </li>

              <li className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <a data-bind="click:$parent.bankNameClicked , css:{'selectedCard': $parent.selectedBank() == title}">
                  <img src={kotakBank} alt="Kotak Mahindra Bank" />
                </a>
              </li>

              <li className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <a data-bind="click:$parent.bankNameClicked , css:{'selectedCard': $parent.selectedBank() == title}">
                  <img src={standardBank} alt="Standard Chartered Bank" />
                </a>
              </li>

              <li className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <a data-bind="click:$parent.bankNameClicked , css:{'selectedCard': $parent.selectedBank() == title}">
                  <img src={iCIBank} alt="ICICI Bank" />
                </a>
              </li>
            </ul>
            <div className="row control clearfix">
              <select
                name="bankName col-12"
                className="form-control select_netbanking"
              >
                <option value="">Select a bank</option>
                <option value="AvenuesTest">AvenuesTest</option>
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
export const NetBanking = withRouter(
  connect<{}, {}, INetBanking>(mapStateToProps)(NetBankingImpl)
);
