import React from "react";
import "./creditCards.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IHistory } from "../../../../../interfaces";

export interface ICreditCards {
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

class CreditCardsImpl extends React.Component<ICreditCards, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <h6>Enter your card details</h6>
        <div id="paymentDetails">
          <div className="row">
            <div className="form-group col-sm-6">
              <label
                className="control-label required-label"
                htmlFor="CC-checkoutPaymentDetails-cardNumber"
              >
                Card Number
              </label>
              <div className="control clearfix payment_card_num">
                <input
                  type="text"
                  className="form-control hidden-xs"
                  name="cardNumber"
                  placeholder="Card Number"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-sm-6">
              <label
                className="control-label required-label"
                htmlFor="CC-checkoutPaymentDetails-nameOnCardLabel"
              >
                Name on Card
              </label>
              <div className="control clearfix">
                <input
                  type="text"
                  className="form-control hidden-xs"
                  name="nameOnCard"
                  placeholder="Name on Card"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="form-group expires_label col-sm-12">
              <label className="control-label required-label">Expires On</label>
            </div>
            <div className="form-group expire_box col-md-2 col-sm-2">
              <div className="control clearfix">
                <select className="form-control hidden-xs">
                  <option value="">Month</option>
                  <option value="01">01 - Jan</option>
                  <option value="02">02 - Feb</option>
                  <option value="03">03 - Mar</option>
                  <option value="04">04 - Apr</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - Jun</option>
                  <option value="07">07 - Jul</option>
                  <option value="08">08 - Aug</option>
                  <option value="09">09 - Sep</option>
                  <option value="10">10 - Oct</option>
                  <option value="11">11 - Nov</option>
                  <option value="12">12 - Dec</option>
                </select>
              </div>
            </div>
            <div className="form-group expire_box col-md-2 col-sm-2">
              <div className="control clearfix">
                <select className="form-control hidden-xs" name="endYear">
                  <option value="">Year</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                  <option value="2032">2032</option>
                  <option value="2033">2033</option>
                  <option value="2034">2034</option>
                  <option value="2035">2035</option>
                  <option value="2036">2036</option>
                  <option value="2037">2037</option>
                  <option value="2038">2038</option>
                  <option value="2039">2039</option>
                </select>
              </div>
            </div>
            <div className="form-group expire_box col-md-2 col-sm-3">
              <div className="control clearfix">
                <div className="col-sm-12 no-padding">
                  <input
                    type="password"
                    className="form-control hidden-xs"
                    name="cardCVV"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row hidden-xs" data-bind="visible: user().loggedIn()">
            <div className="form-group col-md-12 col-sm-12">
              <div className="checkbox">
                <label htmlFor="CC-saveCard" className="create_check">
                  <input
                    type="checkbox"
                    id="CC-saveCard"
                    data-bind="checked:storeCard"
                  />
                  <span data-bind="widgetLocaleText: 'saveCard'">
                    Be quick, be safe. Save your card details
                  </span>
                  <span className="checkmarkbox"></span>
                </label>
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
export const CreditCards = withRouter(
  connect<{}, {}, ICreditCards>(mapStateToProps)(CreditCardsImpl)
);
