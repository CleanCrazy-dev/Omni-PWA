import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Row, Col } from "reactstrap";
import "./orderCompletion.scss";
import { IHistory } from "../../interfaces";
import fbIcon from "../../resource/img/facebook-app-logo.svg";
import googleIcon from "../../resource/img/google-plus.svg";
import instagramIcon from "../../resource/img/instagram-logo.svg";
import pinIcon from "../../resource/img/pinterest-logo.svg";
import twIcon from "../../resource/img/twitter-logo-silhouette.svg";


let dummyImg =
  "https://ccstore-stage-zdva.oracleoutsourcing.com/ccstore/v1/images/?source=/file/v1954672517174774058/products/10554351BR.f.181018.jpg&height=300&width=300";

export interface IOrderCompletion {
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

export class OrderCompletionImpl extends React.Component<IOrderCompletion, {}> {
  state: any = {};

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12">
            <div className="confirmation_wrapper">
              <div className="thank_you_message">
                <span className="horizontal_line"></span>
                <h3>Thank you !</h3>
                <span className="horizontal_line horizontal_line_right"></span>
                <p>Your order has been received</p>
              </div>
              <div className="email_sent">
                <p>An email has been sent to you</p>
                <p>
                  <span className="order-number">Order Number </span>
                  <span>o56783368</span>
                </p>
              </div>
              <div className="view_print">
                <a href="#"></a>
              </div>
              <div className="view_account">
                <span>You can further track this order from the</span>{" "}
                <a href="/profile">My Accounts</a> <span>section</span>.
              </div>
              <div className="ship_bill_details">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <h3>
                      Order Summary{" "}
                      <span className="date-span">October 27, 2020</span>
                    </h3>
                    <p>
                      Order Number: <span>o56783368</span>
                    </p>
                    <div className="row" style={{ padding: "0px" }}>
                      <div className="col-md-3 col-sm-4 col-xs-12 no-padding visible-xs">
                        <div className="order_cart_total">
                          <h4>Cart Totals</h4>
                          <div className="cart_span clearfix">
                            <span>Subtotal</span>
                            <span>₹1,670.00</span>
                          </div>
                          <div className="cart_span clearfix">
                            <span>Shipping</span>
                            <span>₹0.00</span>
                          </div>

                          <div className="cart_span last_cart_span clearfix">
                            <span>Total</span>
                            <span className="cart_final_total">₹1,670.00</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-4 col-xs-12 no-padding">
                        <div className="order_address">
                          <h4>Shipping Address</h4>
                          <span>AA HH</span>
                          <span>abcd</span>
                          <span>ghijkl</span>
                          <span>PUNE, Maharashtra. 411033</span>
                          <span>India</span>
                          <p>8149185507</p>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-4 col-xs-12 no-padding">
                        <div className="order_address">
                          <h4>Billing Address</h4>
                          <span>AA HH</span>
                          <span>abcd</span>
                          <span>ghijkl</span>
                          <span>PUNE, Maharashtra. 411033</span>
                          <span>India</span>
                          <p>8149185507</p>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-4 col-xs-12 no-padding hidden-xs pull-right">
                        <div className="order_cart_total">
                          <h4>Cart Totals</h4>
                          <div className="cart_span clearfix">
                            <span>Subtotal</span>
                            <span>₹1,670.00</span>
                          </div>
                          <div className="cart_span clearfix">
                            <span>Shipping</span>
                            <span>₹0.00</span>
                          </div>

                          <div className="cart_span last_cart_span clearfix">
                            <span>Total</span>
                            <span className="cart_final_total">₹1,670.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ordered_items">
                <h4>Items Ordered</h4>
                <div className="items-flex">
                  <div className="items-title hidden-xs">
                    <ul>
                      <li>Product</li>
                      <li>Name</li>
                      <li>Quantity</li>
                      <li>Price</li>
                    </ul>
                  </div>

                  <div className="item-detail">
                    <ul>
                      <li>
                        <a href="/leather-amna-bl-4854-bracelet-jw">
                          <img src={dummyImg} />
                        </a>
                      </li>
                      <li>
                        <div className="item-property">
                          <a href="/leather-amna-bl-4854-bracelet-jw">
                            Leather Amna BL 4854 Bracelet
                          </a>

                          <div className="span-texts">
                            <span>Color</span>
                            <span>:</span>
                            <span>Brown</span>
                          </div>
                          <div className="span-texts">
                            <span>Size</span>
                            <span>:</span>
                            <span>One Size</span>
                          </div>

                          <div className="span-texts visible-xs">
                            <span>Quantity</span>
                            <span>:</span>
                            <span>2</span>
                          </div>

                          <div className="span-texts price-group visible-xs">
                            <span>Total</span>
                            <span>:</span>

                            <span>₹980.00</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span className="hidden-xs">2</span>
                      </li>
                      <li className="price-group hidden-xs">
                        <span className="hidden-xs">₹980.00</span>
                      </li>
                    </ul>
                  </div>

                  <div className="item-detail">
                    <ul>
                      <li>
                        <a href="/cotton-cambric-printed-long-kurta-10617979">
                          <img src={dummyImg} />
                        </a>
                      </li>
                      <li>
                        <div className="item-property">
                          <a href="/cotton-cambric-printed-long-kurta-10617979">
                            Cotton Printed Long Kurta
                          </a>

                          <div className="span-texts">
                            <span>Color</span>
                            <span>:</span>
                            <span>Coral</span>
                          </div>
                          <div className="span-texts">
                            <span>Size</span>
                            <span>:</span>
                            <span>4-6yrs</span>
                          </div>

                          <div className="span-texts visible-xs">
                            <span>Quantity</span>
                            <span>:</span>
                            <span>1</span>
                          </div>

                          <div className="span-texts price-group visible-xs">
                            <span>Total</span>
                            <span>:</span>
                            <span>₹690.00</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span className="hidden-xs">1</span>
                      </li>
                      <li className="price-group hidden-xs">
                        <span className="hidden-xs">₹690.00</span>
                      </li>
                    </ul>
                  </div>

                  <div className="item-detail item_total total-ammount">
                    <ul>
                      <li></li>
                      <li></li>
                      <li className="hidden-xs">
                        <span>Total</span>
                      </li>
                      <li className="visible-xs"></li>
                      <li className="visible-xs mobile-total">
                        <span>Total</span>
                        <span>:</span>
                        <span>₹1,670.00</span>
                      </li>
                      <li className="hidden-xs">
                        <span>₹1,670.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="confirmation_wrapper social-wrapper">
              <div className="follow_us">
                <p>
                  {" "}
                  follow us:
                  <a href="https://www.facebook.com/Fabindia" target="_blank">
                    <img
                      src={fbIcon}
                     style={{height:"17px", width:"17px"}}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/fabindianews/"
                    target="_blank"
                  >
                    <img
                      src={instagramIcon}
                     style={{height:"17px", width:"17px"}}
                    />
                  </a>
                  <a
                    href="https://plus.google.com/u/0/100784677204579355445"
                    target="_blank"
                  >
                    <img
                      src={googleIcon}
                     style={{height:"17px", width:"17px"}}
                    />
                  </a>
                  <a
                    href="https://twitter.com/fabindianews?lang=en"
                    target="_blank"
                  >
                    <img
                      src={twIcon}
                      width="21px"
                      height="17px"
                    />
                  </a>
                  <a
                    href="https://in.pinterest.com/fabindiapin"
                    target="_blank"
                  >
                    <img
                      src={twIcon}
                     style={{height:"17px", width:"17px"}}
                    />
                  </a>
                </p>
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
export const OrderCompletion = withRouter(
  connect<{}, {}, IOrderCompletion>(mapStateToProps)(OrderCompletionImpl)
);
