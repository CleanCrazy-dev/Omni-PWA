import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Row, Col } from "reactstrap";
import "./cartPage.scss";
import { IHistory } from "../../interfaces";
import removeIcon from "../../resource/img/round-delete-button.svg";

export interface ICartPage {
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

export class CartPageImpl extends React.Component<
  ICartPage,
  {
    productDetails: any;
    storePinCode: string;
    storeError: boolean;
    storeDetails: IStoreDetails[];
    selectedStore: IStoreDetails;
  }
> {
  state: any = {};

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-8">
            <div className="cart_widget">
              <h2 className="cartHeader">Your Shopping Cart</h2>
              <div className="cart-viewer-pane hidden-xs hidden-sm">
                <a href="/collection/face-masks">
                  <img
                    src="https://www.fabindia.com/file/general/mask-promo-desk-cart.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="cart_inner">
                <div className="cart_table">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="cart_content">
                        <p className="discount_banner alert-warning">
                          Mens Jacket Offer
                        </p>

                        {[1, 2].map((v, i) => {
                          return (
                            <div className="cart_row_repeat" key={i}>
                              <div className="row item">
                                <div className="parent_row clearfix">
                                  <div className="cart_image_container">
                                    <img
                                      src="https://www.fabindia.com/ccstore/v1/images/?source=/file/v8377890516980632066/products/10602091GY.f.28082019.jpg&height=100&width=100"
                                      alt=""
                                    />
                                  </div>
                                  <div className="cart_item_detail">
                                    <div>
                                      <p className="hidden-xs">Item</p>
                                      <a href="/viscose-silk-brocade-nehru-jacket-10602091">
                                        Viscose Silk Brocade Nehru Jacket
                                      </a>
                                      <div className="cart_color_code">
                                        <span>Color</span>
                                        <span>: </span>
                                        <span> Grey</span>
                                      </div>
                                      <div className="cart_item_size">
                                        <span>Size</span>
                                        <span>: </span>
                                        <span> 36</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cart_item_qty">
                                    <p>Quantity</p>
                                    <div className="quantity">
                                      <button>-</button>
                                      <span>2</span>
                                      <button>+</button>
                                    </div>
                                  </div>
                                  <div className="cart_item_price">
                                    <p>Price</p>
                                    <div className="cart_item_price_group">
                                      <span>1</span>
                                      <span>@</span>
                                      <span>₹3,290.00</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="cart_view_details hidden-xs">
                                  <a href="/viscose-silk-brocade-nehru-jacket-10602091">
                                    View Details
                                  </a>
                                </div>
                              </div>
                              <button className="removeIcon">
                                <img src={removeIcon} alt="remove" />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="order_summary">
              <div className="summary">
                <h3 className="order_summary_text">Order Summary</h3>

                <div className="order_summary_info clearfix">
                  <div className="order_total clearfix">
                    <div className="cc_total_align clearfix">
                      <span className="order_summary_text">
                        Cart Sub Total :
                      </span>
                      <span className="ordersumprice cart-sub-total pull-right">
                        ₹4,470.00
                      </span>
                    </div>
                    <div className="cc_total_border">
                      <div id="CC-orderSummaryLoadingModal"></div>
                      <div className="cc_total_align clearfix">
                        <span>Total Cart Amount :</span>
                        <span className="ordersumprice cc_final_price pull-right">
                          ₹4,470.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="coupen"></div>
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
export const CartPage = withRouter(
  connect<{}, {}, ICartPage>(mapStateToProps)(CartPageImpl)
);
