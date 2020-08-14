import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import React from "react";
import { BasePage } from "./components/BasePage";

// const Home = asyncComponent(() => {
//   return import('./components/Home');
// });

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
      <React.Suspense fallback={<h1>Loding...</h1>}>
        <Switch>
          <React.Fragment>
            <Route exact path="/" component={WrappedComponent(Home)} />
            <Route exact path="/lib/docs" component={WrappedComponent(SideCarousel)} />
          </React.Fragment>
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};
