import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Axios from "axios";
import { ProductModel } from "../../models/ProductModel";
import { Row, Col } from "reactstrap";
import "./productDetail.scss";
import { IHistory } from "../../interfaces";
import { StoreSelectionModal } from "./StoreSelectionModal";
import tdImg1 from "../../resource/img/t1.jpg";
import tdImg2 from "../../resource/img/t2.jpg";
import tdImg3 from "../../resource/img/t3.jpg";
import Slider from "react-slick";
import { isIPad, isMobile } from "../../generalUtils";
import ReactImageMagnify from "react-image-magnify";

export interface IProductDetailsProps {
  match: {
    params: {
      id: string;
    };
  };
  history: IHistory;
}

export interface IStoreDetails {
  operationalDays?: string;
  operationalTime?: string;
  phoneNo?: string;
  servicablePinCode?: string;
  storeAddress?: string;
  storeCode?: string;
  storeManager?: string;
  storeName: string;
}

export class ProductDetailsImpl extends React.Component<
  IProductDetailsProps,
  {
    productDetails: any;
    storePinCode: string;
    storeError: boolean;
    storeDetails: IStoreDetails[];
    codeErrorStore: boolean;
    availableError: boolean;
    isOpen: boolean;
    codeErrorDel: boolean;
    selectedStore: IStoreDetails;
    isDeliverable: boolean;
    detailHeightD: string;
    detailHeightF: string;
    detailHeightDe: string;
  }
> {
  state = {
    codeErrorStore: false,
    availableError: false,
    detailHeightD: "none",
    detailHeightF: "none",
    detailHeightDe: "none",
    isDeliverable: false,
    codeErrorDel: false,
    storeError: false,
    isOpen: false,
    selectedStore: {
      storeName: "",
    },
    storeDetails: [],
    storePinCode: "",
    productDetails: {
      name: "",
      code: "",
      sizeScaleProductType: "",
      whitePrice: {
        price: "",
        value: "",
      },
      images: [{ url: "" }],
      description: "",
    },
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const productData = ProductModel.get(id);
    if (!productData) {
      this.props.history.push("/product-list");
      return;
    }

    const productCode = id.split("_")[0] + id.split("_")[2];
    const response = await Axios.get(
      `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?country=us&lang=en&productcode=${productCode}`,
      {
        headers: {
          "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "3320af976bmsh4cfc14f0be3fcccp1ead0bjsn8d7a9dab2022",
          useQueryString: true,
        },
      }
    );
    this.setState({
      productDetails: { ...response.data.product, ...productData?.props },
    });
  }

  onCheckStore = async () => {
    if (isNaN(Number(this.state.storePinCode))) {
      this.setState({
        codeErrorStore: true,
        storeError: false,
      });
      return;
    }
    const storeDetails = await Axios.get(
      // "https://run.mocky.io/v3/a5693cf1-adf3-4086-96a0-05d35425cd4c"
      `https://www.fabindia.com/ccstorex/custom/v1/fetchStoreDetails?identifier=${this.state.storePinCode}`
    );
    if (storeDetails.data.status === "error") {
      this.setState({ storeError: true, codeErrorStore: false });
      return;
    }
    if (storeDetails.data.result) {
      this.setState({
        storeDetails: storeDetails.data.result,
        storeError: false,
        codeErrorStore: false,
      });
    }
  };

  checkAvailability = async () => {
    if (!this.state.storePinCode || isNaN(Number(this.state.storePinCode))) {
      this.setState({
        codeErrorDel: true,
        availableError: false,
        isDeliverable: false,
      });
      return;
    }
    const storeDetails = await Axios.get(
      // "https://run.mocky.io/v3/b6cf8fb5-9f0d-4bbd-8633-1c6e8f4aa9fa"
      `https://www.fabindia.com/ccstorex/custom/v1/serviceabilityCheck?postalCode=${this.state.storePinCode}`
    );
    const { cod, furniture, prepaid } = storeDetails.data.message;
    if (!cod && !furniture && !prepaid) {
      this.setState({
        availableError: true,
        isDeliverable: false,
        codeErrorDel: false,
      });
      return;
    }
    if (cod || furniture || prepaid) {
      this.setState({
        isDeliverable: true,
        availableError: false,
        codeErrorDel: false,
      });
    }
  };

  render() {
    if (!this.state.productDetails) {
      return "";
    }
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: isIPad() ? 2 : isMobile() ? 1 : 4,
      slidesToScroll: 1,
    };
    const tImages = [
      tdImg1,
      tdImg2,
      tdImg3,
      tdImg1,
      tdImg2,
      tdImg3,
      tdImg1,
      tdImg2,
      tdImg3,
    ];

    const { productDetails } = this.state;
    return (
      <React.Fragment>
        <div className="ProductDetails">
          <StoreSelectionModal
            onValueChange={(e: any) =>
              this.setState({ storePinCode: e.target.value })
            }
            onClickSearch={this.onCheckStore}
            onStoreClick={(store) => this.setState({ selectedStore: store })}
            storeData={this.state.storeDetails}
            isOpen={this.state.isOpen}
          />
          <Row>
            <Col xs={12} md={12} lg={6}>
              <div className="ProductImage">
                <ReactImageMagnify
                  enlargedImageContainerClassName="ImageLarge"
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: productDetails.images[0].url,
                    },
                    largeImage: {
                      src: productDetails.images[0].url,
                      width: 1200,
                      height: 1800,
                    },
                  }}
                />
                {/* <img alt="" src={productDetails.images[0].url} /> */}
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} className="Details">
              <div className="ProductRow ProductName padding-20">
                {productDetails.name}
              </div>
              <div className="ProductRow ProductCode">
                Code: &nbsp; {productDetails.code}
              </div>
              <div className="padding-20">
                <div className="ProductRow ProductPrice">
                  $
                  {productDetails.whitePrice.price ||
                    productDetails.whitePrice.value}
                </div>
                <div className="ColorItems">
                  <span>Select Color</span>
                  <div className="Colors">
                    {["red", "green", "blue"].map((color, index) => {
                      return (
                        <div key={index} className="ColorName">
                          <div style={{ backgroundColor: color }} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="SizeItems">
                  <span>Select Size</span>
                  <div className="SizeChart">
                    {["S", "M", "L", "XL", "XXL"].map((size: any, ind: any) => {
                      return (
                        <div className="SizeName" key={ind}>
                          {size}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="quantity-box">
                  {" "}
                  <div className="Quantity">
                    <i className="fa qty fa-plus" />
                    <span className="qty">10</span>
                    <i className="fa qty fa-minus" />
                  </div>
                  <div>
                    <button className="add add-to-cart">ADD TO CART</button>
                  </div>
                </div>
              </div>
              <div className="padding-20">
                <div className="head">Check Delivery Service Availability</div>
                <div className="detail-data pro-details">
                  {" "}
                  <div className="check-service">Check Delivery Service Availability</div>
                  <input
                    onChange={(e) =>
                      this.setState({ storePinCode: e.target.value })
                    }
                    className="input"
                    placeholder="Enter Pincode"
                  />
                  <button onClick={this.checkAvailability} className="check">
                    Check
                  </button>
                </div>
                {this.state.isDeliverable && (
                  <span style={{ color: "green" }}>Service is available</span>
                )}
                {this.state.availableError && (
                  <span style={{ color: "red" }}>
                    This item cannot be delivered at the provided pincode.
                  </span>
                )}
                {this.state.codeErrorDel && (
                  <span style={{ color: "red" }}>
                    Please enter a valid pincode
                  </span>
                )}
              </div>
              <div className="StoreCheckMain">
                <div className="StoreSelection">
                  <i className="fa fa-home"></i>
                  <span>Home Delivery</span>
                </div>
                <div onClick={() => this.setState({isOpen: !this.state.isOpen})} className="StoreSelection">
                  <i className="fa fa-truck"></i>
                  {this.state.selectedStore.storeName ? (
                    <span>
                      {this.state.selectedStore.storeName}
                      <button onClick={() => this.setState({isOpen: !this.state.isOpen})}>Change Store</button>
                    </span>
                  ) : (
                    <span>Store Pickup</span>
                  )}
                </div>
                {/* <div className="head">Connect To A Store</div>
                <div className="detail-data pro-details">
                  <input
                    className="input"
                    onChange={(e) =>
                      this.setState({ storePinCode: e.target.value })
                    }
                    placeholder="Enter a Pincode or Store Name"
                  />{" "}
                  <button onClick={this.onCheckStore} className="add">
                    Connect To A Store
                  </button>
                </div>
                {this.state.storeError && (
                  <span style={{ color: "red" }}>
                    This item cannot be delivered at the provided pincode.
                  </span>
                )}
                {this.state.codeErrorStore && (
                  <span style={{ color: "red" }}>
                    Please enter a valid pincode
                  </span>
                )} */}
              </div>
              
              <div className="ProductRow padding-20 ProductDesc">
                <div
                  onClick={() =>
                    this.setState({
                      detailHeightD:
                        this.state.detailHeightD === "block" ? "none" : "block",
                    })
                  }
                  className="head"
                >
                  {this.state.detailHeightD === "none" ? (
                    <i className="fa fa-plus"></i>
                  ) : (
                    <i className="fa fa-minus"></i>
                  )}{" "}
                  Details
                </div>
                <div
                  style={{ display: this.state.detailHeightD }}
                  className="pro-details"
                >
                  {productDetails.description}
                </div>
                <div
                  onClick={() =>
                    this.setState({
                      detailHeightF:
                        this.state.detailHeightF === "block" ? "none" : "block",
                    })
                  }
                  className="head"
                >
                  {this.state.detailHeightF === "none" ? (
                    <i className="fa fa-plus"></i>
                  ) : (
                    <i className="fa fa-minus"></i>
                  )}{" "}
                  Features
                </div>
                <div
                  style={{ display: this.state.detailHeightF }}
                  className="pro-details"
                >
                  {productDetails.description}
                </div>
                <div
                  onClick={() =>
                    this.setState({
                      detailHeightDe:
                        this.state.detailHeightDe === "block"
                          ? "none"
                          : "block",
                    })
                  }
                  className="head"
                >
                  {this.state.detailHeightDe === "none" ? (
                    <i className="fa fa-plus"></i>
                  ) : (
                    <i className="fa fa-minus"></i>
                  )}{" "}
                  Description
                </div>
                <div
                  style={{ display: this.state.detailHeightDe }}
                  className="pro-details"
                >
                  {productDetails.description}
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="FeaturedItems">
          <div className="Featured">You May Also Like</div>
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((x, i) => {
              return (
                <div key={i} className="TradCarouselSlide">
                  <img src={tImages[i]} alt="" className="SlideImageTrad" />
                  <div className="ProductConfig">
                    <div className="ProductName">Text</div>
                    <div className="ProductPrice">$ &nbsp; 200</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </React.Fragment>
    );
  }
}
export function mapStateToProps(state: any, ownProps: any) {
  return {
    state,
  };
}
export const ProductDetails = withRouter(
  connect<{}, {}, IProductDetailsProps>(mapStateToProps)(ProductDetailsImpl)
);
