import Axios from "axios";
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Col, Row } from "reactstrap";
import { IHistory } from "../../interfaces";
import { ProductModel } from "../../models/ProductModel";
import "./productList.scss";
import onex from "../../resource/img/onex.webp";
import twox from "../../resource/img/twox.png";
import { Login } from "../AccountPage/Login";
import { isMobile } from "../../generalUtils";


let dummyProduct :object = {
  props: {
    id: "123",
    price: { currencyIso: "USD", value: "123" },
    name: "name here",
    images: [
      {
        url:
          "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
      }
    ]
  }
}


export interface IProductListProps {
  productList: ProductModel[];
  history: IHistory;
}

export class ProductListImpl extends React.PureComponent<
  IProductListProps,
  {
    showRef: boolean;
    showCate: boolean;
    colNums: number;
  }
> {
  state = {
    colNums: isMobile() ? 6 : 3,
    showRef: false,
    showCate: false
  };

  async componentDidMount() {
    const response = await Axios.get(
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_all&sortBy=stock&concepts=H%2526M%20MAN&country=us&lang=en&currentpage=0&pagesize=30",
      {
        headers: {
          "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "3320af976bmsh4cfc14f0be3fcccp1ead0bjsn8d7a9dab2022",
          useQueryString: true
        }
      }
    );
    response.data.results.forEach((element: any) => {
      element.id = element.code;
      new ProductModel(element).$save();
    });
  }

  productsDummy = [{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  },{
    props: {
      id: "123",
      price: { currencyIso: "USD", value: "123" },
      name: "name here",
      images: [
        {
          url:
            "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3480208276982492861/products/10660133BU.f.290920.jpg&height=475&width=475"
        }
      ]
    }
  }];

  render() {
    console.log("this.props.productList", this.props.productList);
    return (
      <div className="ProductListPageContainer M-Full-Width">
        {/* <Login /> */}
        <div className="productInfodetail">
          <div className="ProductPath hidden-lg">Home / Collections</div>
          <div className="FilterMobileContainer hidden-lg">
            <div
              onClick={() =>
                this.setState({
                  showRef: false,
                  showCate: !this.state.showCate
                })
              }
              className="Category"
            >
              CATEGORY{" "}
              <i
                className={`${
                  !this.state.showCate ? "fa fa-plus" : "fa fa-minus"
                }`}
              />
            </div>
            <div
              onClick={() =>
                this.setState({
                  showCate: false,
                  showRef: !this.state.showRef
                })
              }
              className="Category"
            >
              REFINE BY{" "}
              <i
                className={`${
                  !this.state.showRef ? "fa fa-plus" : "fa fa-minus"
                }`}
              />
            </div>
          </div>
          <div className={`filterOptions ${this.state.showCate && "pdl-open"}`}>
            <div>View BY</div>
            <div>Sort BY</div>
            <div>Kurta BY</div>
            <div>Grocceries BY</div>
          </div>
          <div className={`filterOptions ${this.state.showRef && "pdl-open"}`}>
            <div>
              <i className="fa fa-plus"></i> Price
            </div>
            <div>
              <i className="fa fa-plus"></i> Size
            </div>
            <div>
              <i className="fa fa-plus"></i> Brand
            </div>
          </div>
          <div className="FilterMobileContainer Views hidden-lg">
            <div className="ViewBy">
              <span>View By:</span>
              <div className="BoxContainer">
                <div
                  className="ViewType1"
                  onClick={() => this.setState({ colNums: 12 })}
                >
                  <img src={onex} alt="onex" />
                </div>
                <div
                  className="ViewType2"
                  onClick={() => this.setState({ colNums: 6 })}
                >
                  {/* <div className="sorted-with"></div>
                  <div className="sorted-with"></div> */}
                  <img src={twox} alt="twox" />
                </div>
              </div>
            </div>
            <div className="SortBy">
              <span>Sort By:</span>
              <div className="BoxContainer">
                <select className="SortSelect">
                  <option>New to old</option>
                </select>
              </div>
            </div>
          </div>
          <div className="ProductFilters hidden-xs">
            <div className="FilterOptions">
              <div className="FilterName">Category</div>
              <div className="panel-body">
                <li>
                  <a href="/shop/beauty">
                    <span className="label_txt">Beauty</span>
                    <span className="count_txt">(115)</span>
                  </a>
                </li>

                <li>
                  <a href="/collection/gifting-ideas-giftboxes">
                    <span className="label_txt">Gift Boxes</span>
                    <span className="count_txt">(21)</span>
                  </a>
                </li>

                <li>
                  <a href="/collection/gifting-ideas-for-him">
                    <span className="label_txt">Gifts for Him</span>
                    <span className="count_txt">(43)</span>
                  </a>
                </li>

                <li>
                  <a href="/collection/gifting-ideas-for-kids">
                    <span className="label_txt">Gifts For Kids</span>
                    <span className="count_txt">(157)</span>
                  </a>
                </li>

                <li>
                  <a href="/collection/gifting-ideas-home-decor">
                    <span className="label_txt">Home Decor</span>
                    <span className="count_txt">(62)</span>
                  </a>
                </li>

                <li>
                  <a href="/collection/gifting-ideas-jewellery">
                    <span className="label_txt">Jewellery</span>
                    <span className="count_txt">(109)</span>
                  </a>
                </li>

                <li>
                  <a href="/collection/gifting-ideas-stoles">
                    <span className="label_txt">Stoles</span>
                    <span className="count_txt">(216)</span>
                  </a>
                </li>
              </div>
            </div>
            <div className="FilterOptions">
              <div className="FilterName">
                {" "}
                <i className="fa fa-plus" /> Price
              </div>
            </div>
            <div className="FilterOptions">
              <div className="FilterName">
                {" "}
                <i className="fa fa-plus" /> Color
              </div>
            </div>
            <div className="FilterOptions">
              <div className="FilterName">
                {" "}
                <i className="fa fa-plus" /> Size
              </div>
            </div>
            <div className="FilterOptions">
              <div className="FilterName">
                {" "}
                <i className="fa fa-plus" /> Material
              </div>
            </div>
            <div className="FilterOptions">
              <div className="FilterName">
                {" "}
                <i className="fa fa-plus" /> Sleeves
              </div>
            </div>
            <div className="FilterOptions">
              <div className="FilterName">
                {" "}
                <i className="fa fa-plus" /> Neck
              </div>
            </div>
            <div className="FilterOptions">
              <div className="FilterName">
                {" "}
                <i className="fa fa-plus" /> Pattern
              </div>
            </div>
            <div className="FilterOptions">
              <div className="FilterName">
                {" "}
                <i className="fa fa-plus" /> Craft
              </div>
            </div>
            <div className="FilterOptions">
              <div className="FilterName">
                {" "}
                <i className="fa fa-plus" /> Style
              </div>
            </div>
          </div>
        </div>

        <div className="DesktopProductListHeader">
          <div className="ProductHeader hidden-xs">
            <div className="ProductTitle">Gifting Ideas </div>
            <div className="FilterContainer">
              <div className="ViewBy">
                <span className="viewByText">View By:</span>
                <div className="BoxContainer">
                  <div
                    className="ViewType1"
                    onClick={() => this.setState({ colNums: 4 })}
                  >
                    <div className="sorted-with"></div>
                    <div className="sorted-with"></div>
                    <div className="sorted-with"></div>
                  </div>
                  <div
                    className="ViewType2"
                    onClick={() => this.setState({ colNums: 3 })}
                  >
                    <div className="sorted-with"></div>
                    <div className="sorted-with"></div>
                    <div className="sorted-with"></div>
                    <div className="sorted-with"></div>
                  </div>
                </div>
              </div>
              <div className="SortBy">
                <span className="viewByText">Sort By:</span>
                <div className="BoxContainer">
                  <select className="SortSelect">
                    <option>New to old</option>
                  </select>
                </div>
              </div>{" "}
            </div>
          </div>
          <Row className="ProductListPage">
            {/* {this.props.productList.map((product, index) => { */}
            {this.productsDummy.map((product, index) => {

              return (
                <Col
                  xs={this.state.colNums}
                  md={6}
                  sm={this.state.colNums}
                  lg={this.state.colNums}
                  className="Product"
                >
                  <div className="Image">
                    {/* <i
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
                    ></i> */}
                    {product.props.images.map((img, i) => (
                      <img
                        onClick={() =>
                          this.props.history.push(
                            `/product-detail/${product.props.id}`
                          )
                        }
                        style={{ width: "100%" }}
                        alt={product.props.name}
                        src={img.url}
                      />
                    ))}{" "}
                    <div className="QuickView">Quick View</div>
                  </div>
                  <div
                    onClick={() =>
                      this.props.history.push(
                        `/product-detail/${product.props.id}`
                      )
                    }
                    className="ProductConfig"
                  >
                    <div className="ProductName">{product.props.name}</div>
                    <div className="ProductPrice">
                      {product.props.price.currencyIso +
                        " " +
                        product.props.price.value}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}
export function mapStateToProps(state: any) {
  return {
    productList: ProductModel.list(state)
  };
}
export const ProductList = withRouter(connect<{}, {}, IProductListProps>(
  mapStateToProps
)(ProductListImpl) as any);
