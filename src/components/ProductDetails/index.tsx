import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Axios from "axios";
import { ProductModel } from "../../models/ProductModel";
import { Row, Col } from "reactstrap";
import "./productDetail.scss";
import { IHistory } from "../../interfaces";
export interface IProductDetailsProps {
  match: {
    params: {
      id: string;
    };
  };
  history: IHistory;
}

export class ProductDetailsImpl extends React.PureComponent<
  IProductDetailsProps,
  {
    productDetails: any;
  }
> {
  state = {
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
            "516a5ecdcemsh2b5192fad8db3b0p12badbjsn10762fa93820",
          useQueryString: true,
        },
      }
    );
    this.setState({
      productDetails: { ...response.data.product, ...productData?.props },
    });
  }

  render() {
    console.log(">> this.state.productData", this.state.productDetails);
    if (!this.state.productDetails) {
      return "";
    }
    const { productDetails } = this.state;
    return (
      <div className="ProductDetails">
        <Row>
          <Col xs={12} md={12} lg={6}>
            <div className="ProductImage">
              <img src={productDetails.images[0].url} />
            </div>
          </Col>
          <Col xs={12} md={12} lg={6} className="Details" >
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
              <div>
                {" "}
                <div className="Quantity">
                  <i className="fa qty fa-plus" />
                  <span className="qty">10</span>
                  <i className="fa qty fa-minus" />
                </div>
                <div>
                  <button className="add">ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className="padding-20">
              <div className="head">Check Delivery Service Availability</div>
              <div className="detail-data pro-details">
                {" "}
                <div>Check Delivery Service Availability</div>
                <input className="input" placeholder="Enter Pincode" />{" "}
                <button className="check">Check</button>
              </div>
            </div>
            <div className="padding-20">
              <div className="head">Connect To A Store</div>
              <div className="detail-data pro-details">
                <input
                  className="input"
                  placeholder="Enter a Pincode or Store Name"
                />{" "}
                <button className="add">Connect To A Store</button>
              </div>
            </div>
            <div className="ProductRow padding-20 ProductDesc">
              <div className="head">Details</div>
              <div className="pro-details">{productDetails.description}</div>
            </div>
          </Col>
        </Row>
      </div>
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
