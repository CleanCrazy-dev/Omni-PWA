import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./upi.scss";
import { IHistory } from "../../../../../interfaces";

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
        <div className="row no-padding">
          <div className="form-group col-12">
            <div className="control clearfix">
              <div className="pay-UPI clearfix">
                <p className="payuUPI-p">Enter your details</p>
                <p className="payuUPI-p vpa">Enter your VPA</p>
                <input
                  type="text"
                  className="form-control"
                  name="UPI"
                  placeholder="yourname@bankname"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row no-padding">
          <div className="col-md-12">
            <a href="#" className="cc-button-primary upi">
              <span>Pay Now</span>
            </a>
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
export const UPI = withRouter(
  connect<{}, {}, ISavedCards>(mapStateToProps)(SavedCardsImpl)
);
