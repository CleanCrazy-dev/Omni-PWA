import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import React from "react";
import { BasePage } from "./components/BasePage";
import { ProductDetails } from "./components/ProductDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = React.lazy(() =>
  import("./components/Home").then(({ Home }) => ({
    default: Home,
  }))
);
const SideCarousel = React.lazy(() =>
  import("./components/docs").then(({ SideCarousel }) => ({
    default: SideCarousel,
  }))
);
const ProductList = React.lazy(() =>
  import("./components/ProductList").then(({ ProductList }) => ({
    default: ProductList,
  }))
);

const WrappedComponent = (Component: any) => {
  return class Wrapper extends React.Component {
    render() {
      return (
        <BasePage>
          <Component />
        </BasePage>
      );
    }
  };
};

// const NotFound = () => <h1>404 Not Found</h1>;

export const Routes = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={<div className="loading-bar loading-bar--active"></div>}>
        <Switch>
          <React.Fragment>
            <Route exact path="/" component={WrappedComponent(Home)} />
            <Route
              exact
              path="/lib/docs"
              component={WrappedComponent(SideCarousel)}
            />
            <Route
              exact
              path="/product-list"
              component={WrappedComponent(ProductList)}
            />
            <Route
              exact
              path="/product-detail/:id"
              component={WrappedComponent(ProductDetails)}
            />
          </React.Fragment>
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};
