import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IHistory } from "../../../../interfaces";
import "./scss/shippingAddress.scss";
import { AddressItem } from "./AddressItem";
import AddAddressForm from "./AddAddressForm";

export interface IShippingAddress {
  match: {
    params: {
      id: string;
    };
  };
  history: IHistory;
}

interface IShippingAddState {
  addingAddress: boolean;
}

export interface IStoreDetails {
  operationalDays?: string;
}

export class CheckOutBillingImpl extends React.Component<
  IShippingAddress,
  IShippingAddState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      addingAddress: false
    };
  }

  async componentDidMount() {}

  handleAddingAddress = () => {
    let { addingAddress } = this.state;
    this.setState({
      addingAddress: !addingAddress
    });
  };

  render() {
    let { addingAddress } = this.state;
    return (
      <React.Fragment>
        <div className="row" id="shippingAddress">
          <div className="add_address_box col-12 col-lg-7">
            <button
              className="cc-button-primary add_new_address"
              onClick={this.handleAddingAddress}
            >
              <span>Add New Address</span>
            </button>
          </div>
          {addingAddress && (
            <AddAddressForm handleForm={this.handleAddingAddress} />
          )}
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
