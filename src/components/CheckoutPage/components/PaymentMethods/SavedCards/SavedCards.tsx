import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IHistory } from "../../../../../interfaces";
import "./savedCards.scss";
import { PayNowBtn } from "../../../../Common/PayNowBtn/PayNowBtn";

export interface ISavedCards {
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

class SavedCardsImpl extends React.Component<ISavedCards, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="row lower-width">
          <div className="col-12">
            <div className="row payUSavedCards_wrapper">
              <div className="checkbox_card col-lg-1 col-md-1 col-sm-1 col-xs-1">
                <input
                  type="radio"
                  name="savedCards"
                  className="savedCards_input-0"
                />
                <span></span>
                <span className="checkmarkboxCard"></span>
              </div>
              <div className="payUcardImg col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <img src="https://ccstore-stage-zdva.oracleoutsourcing.com/file/general/mastercard.jpg" />
              </div>
              <div className="payU_bankDetails col-lg-5 col-md-5 col-sm-5 col-xs-5">
                <span className="payU_bankname">mastercard</span>
                <span className="payU_cardNumber">XXXXX234</span>
              </div>
              <div className="payU_Cvv col-lg-3 col-md-3 col-sm-3 col-xs-3 hidden-xs hidden-sm">
                <input
                  aria-required="true"
                  type="password"
                  className="8f3583fe827b211f00927"
                  name="CVV"
                  placeholder="CVV"
                />
              </div>
              <div className="payU_Cvv col-lg-3 col-md-3 col-sm-3 col-xs-3 hidden-md hidden-lg">
                <input
                  aria-required="true"
                  type="password"
                  className="8f3583fe827b211f00927"
                  name="CVV"
                  placeholder="CVV"
                />
              </div>
              <span className="cvvErrorMsg-8f3583fe827b211f00927 text-danger"></span>
            </div>
          </div>
          <div className="col-12">
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
export const SavedCards = withRouter(
  connect<{}, {}, ISavedCards>(mapStateToProps)(SavedCardsImpl)
);
