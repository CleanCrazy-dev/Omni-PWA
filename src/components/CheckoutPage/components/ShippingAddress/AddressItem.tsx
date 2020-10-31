import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IHistory } from "../../../../interfaces";
import "./scss/addressItem.scss";

export interface IAddressItem {
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

export class AddressItemImpl extends React.Component<IAddressItem, {}> {
  state: any = {};

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <address className="shipping-address-view col-md-7 col-sm-7 col-xs-12">
          <button title="Select Default Address">
            <span className="fa fa-check check_active"></span>
          </button>
          <button className="edit-button">Edit</button>
          <div className="address-info">
            <div className="address-full-name">
              <span className="address-field address-name">AA</span>
              <span className="address-field address-name">HH</span>
            </div>
            <div className="default_true">
              <span className="default-address">Default</span>
            </div>
          </div>
          <span className="address-field">abcd</span>
          <span className="address-field">ghijkl</span>
          <span className="address-field">PUNE</span>,{" "}
          <span className="address-field">Maharashtra</span>
          <div className="address_postal">
            <span className="address-field">India</span>
            <span className="address-field">411033</span>
          </div>
          <div className="address_phone_no">
            <span className="address-field">8149185507</span>
          </div>
          <div className="deliver_here">
            <span className="inactive_address">Select Address</span>
          </div>
        </address>
      </React.Fragment>
    );
  }
}
export function mapStateToProps(state: any, ownProps: any) {
  return {
    reduxState: state
  };
}
export const AddressItem = withRouter(
  connect<{}, {}, IAddressItem>(mapStateToProps)(AddressItemImpl)
);
