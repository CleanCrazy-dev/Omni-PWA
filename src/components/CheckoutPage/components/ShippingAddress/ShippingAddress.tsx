import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IHistory } from "../../../../interfaces";
import "./scss/shippingAddress.scss";
import { AddressItem } from "./AddressItem";

export interface IShippingAddress {
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

export class CheckOutBillingImpl extends React.Component<IShippingAddress, {}> {
  state: any = {};

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="row" id="shippingAddress">
          <div className="add_address_box col-md-7 col-sm-7 col-xs-12">
            <button className="cc-button-primary add_new_address">
              <span>Add New Address</span>
            </button>
          </div>
          <AddressItem />
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
export const ShippingAddress = withRouter(
  connect<{}, {}, IShippingAddress>(mapStateToProps)(CheckOutBillingImpl)
);
