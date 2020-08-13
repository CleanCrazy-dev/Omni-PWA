import React from "react";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";

const Home = React.lazy(() =>
  import("./components/Home").then(({ Home }) => ({
    default: Home,
  }))
);
const Docs = React.lazy(() =>
  import("./components/docs").then(({ Docs }) => ({
    default: Docs,
  }))
);

const WrappedComponent = (Component: any) => {
  return class Wrapper extends React.Component {
    render() {
      return <Component />;
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
            <Route exact path="/lib/docs" component={WrappedComponent(Docs)} />
            {/* <Route exact component={NotFound} /> */}
          </React.Fragment>
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};