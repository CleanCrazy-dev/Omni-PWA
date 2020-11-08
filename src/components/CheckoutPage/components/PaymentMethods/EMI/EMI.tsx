import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./emi.scss";
import { IHistory } from "../../../../../interfaces";


export interface IEMI {
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

class EMIImpl extends React.Component<
  IEMI,
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
        <div className="emiErrorMessage"><span>EMI facility is available on orders above INR 5000 only.</span></div>
      </React.Fragment>
    );
  }
}
export function mapStateToProps(state: any, ownProps: any) {
  return {
    reduxState: state
  };
}
export const EMI = withRouter(
  connect<{}, {}, IEMI>(mapStateToProps)(EMIImpl)
);
