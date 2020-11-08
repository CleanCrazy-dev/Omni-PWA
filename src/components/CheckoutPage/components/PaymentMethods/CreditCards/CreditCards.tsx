import React from "react";
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

class CreditCardsImpl extends React.Component<
  ICreditCards,
  {}
> {
  constructor(props: any) {
    super(props);
    this.state = {
     
    };
  }

  async componentDidMount() {}

  
  render() {
  
    return (
      <React.Fragment>
        Credit Cards
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
