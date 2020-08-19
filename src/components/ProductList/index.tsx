import * as React from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { ProductModel } from "../../models/ProductModel";
import { Col, Row } from "reactstrap";
import "./productList.scss";
export interface IProductListProps {
  productList: ProductModel[];
}

export class ProductListImpl extends React.PureComponent<
  IProductListProps,
  {}
> {
  async componentDidMount() {
    const response = await Axios.get(
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_all&sortBy=stock&concepts=H%2526M%20MAN&country=us&lang=en&currentpage=0&pagesize=30",
      {
        headers: {
          "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "516a5ecdcemsh2b5192fad8db3b0p12badbjsn10762fa93820",
          useQueryString: true,
        },
      }
    );
    response.data.results.forEach((element: any) => {
      element.id = element.code;
      new ProductModel(element).$save();
    });
  }

  render() {
    return (
      <div className="ProductListPageContainer M-Full-Width">
        <div className="Filters">
          <h1>Filters</h1>
        </div>
        <Row className="ProductListPage">
          {this.props.productList.map((product, index) => {
            return (
              <Col xs={12} md={3} sm={3} className="Product">
                <div className="Image">
                  <i
                    title="Click to add into Favorites"
                    onClick={() => {
                      if (!product.props.isFavorite) {
                        product.props.isFavorite = true;
                      } else {
                        product.props.isFavorite = false;
                      }
                      new ProductModel(product.props).$save();
                    }}
                    className={`fa ${
                      product.props.isFavorite ? "fa-heart" : "fa-heart-o"
                    }`}
                    aria-hidden="true"
                  ></i>
                  {product.props.images.map((img, i) => (
                    <img
                      className="ProductImage"
                      alt={product.props.name}
                      src={img.url}
                    />
                  ))}{" "}
                  <div className="QuickView">Quick View</div>
                </div>
                <div className="ProductConfig">
                  <div className="ProductName">{product.props.name}</div>
                  <div className="ProductPrice">
                    {product.props.price.currencyIso}
                    &nbsp;
                    {product.props.price.value}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
export function mapStateToProps(state: any) {
  return {
    productList: ProductModel.list(state),
  };
}
export const ProductList = connect<{}, {}, IProductListProps>(mapStateToProps)(
  ProductListImpl
);
