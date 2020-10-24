import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Row, Col } from "reactstrap";
import "./cartPage.scss";
import { IHistory } from "../../interfaces";
import removeIcon from "../../resource/img/round-delete-button.svg";
import SBILogo from "../../resource/img/SBI Logo.png";

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
          <div className="ccol-sm-12 col-md-8">
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
                                      <p>Item</p>
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

                <section className="continue_shop">
                  <div className="buttons hidden-xs total-cart-padding-top">
                    <a
                      id="CC-shoppingCart-continueShopping"
                      className="cc-button-secondary"
                      href="/home"
                    >
                      <span>Continue Shopping</span>
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="order_summary col-md-12 col-xl-10">
              <div className="summary">
                <h3 className="order_summary_text">Order Summary</h3>

                <div className="order_summary_info clearfix">
                  <div className="order_price_summary clearfix">
                    <div className="order_subtotal clearfix">
                      <span className="title">Cart Sub Total :</span>
                      <span className="sub_price pull-right">₹4,470.00</span>
                    </div>
                    <div className="order_total">
                      <span className="title">Total Cart Amount :</span>
                      <span className="price pull-right">₹4,470.00</span>
                    </div>
                  </div>
                </div>

                <div className="checkout_wrapper clearfix">
                  {/*                   
                  <div className="visible-xs pull-left view_details_scroll">
                    <span
                      className="ordersumprice cc_final_price"
                      data-bind="currency: {price: cart().total(), currencyObj: $data.site().selectedPriceListGroup().currency}"
                    >
                      ₹4,470.00
                    </span>
                    <span>View Details</span>
                  </div>
                   */}
                  <div id="summary-checkout" className="checkout_proceed">
                    <a
                      className="cc-button-primary btn-checkout"
                      aria-label="Checkout"
                    >
                      <span className="hidden-xs">Proceed to Checkout</span>
                      <span className="visible-xs">Checkout</span>
                    </a>
                  </div>
                </div>

                <div className="offer_banner">
                  <img src={SBILogo} alt="SBI Logo" />
                  <span>
                    Get <strong>10% discount</strong> on{" "}
                    <strong>Rs. 5000/-</strong> or above with your SBI credit
                    card. T&amp;C apply.
                  </span>
                </div>
              </div>
            </div>
            <div className="promotion col-sm-12 col-md-12 col-xl-10">
              <h4>
                <a className="panel-toggle" href="#couponToggle">
                  Coupon Code
                </a>
              </h4>

              <div className="coupen-form-wrapper">
                <fieldset>
                  {/* <div className="hidden-xs">
                      <p
                        className="text-danger"
                        id="CC-promotionDetails-promoCode-error"
                      ></p>

                      <p className="text-danger">
                        Please enter a valid coupon code
                      </p>
                    </div> */}
                  {/* <div className="visible-xs col-xs-12">
                      <p className="text-danger"></p>

                      <p className="text-danger">
                        Please enter a valid coupon code
                      </p>
                    </div> */}

                  <div className="coupen-input-group clearfix">
                    <input
                      type="text"
                      className="form-control input-inline"
                      name="promoCode"
                      id="CC-promotionDetails-promoCode"
                    />
                  </div>
                  <div className="coupen-input-group">
                    <a
                      href="/"
                      id="CC-promotion-applyCode"
                      className="cc-button-primary cc_applyBtn"
                    >
                      <span id="CC-promotion-applyCodeButton">Apply</span>
                    </a>
                  </div>
                </fieldset>
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
export const CartPage = withRouter(
  connect<{}, {}, ICartPage>(mapStateToProps)(CartPageImpl)
);
