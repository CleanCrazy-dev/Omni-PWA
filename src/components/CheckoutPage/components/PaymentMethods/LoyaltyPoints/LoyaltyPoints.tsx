import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
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

class SavedCardsImpl extends React.Component<
  ISavedCards,
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
      </React.Fragment>
    );
  }
}
export function mapStateToProps(state: any, ownProps: any) {
  return {
    reduxState: state
  };
}
export const LoyaltyPoints = withRouter(
  connect<{}, {}, ISavedCards>(mapStateToProps)(SavedCardsImpl)
);
