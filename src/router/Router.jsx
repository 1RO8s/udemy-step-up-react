import { Switch, Route } from "react-router-dom";
import { Page404 } from "../pages/404";
import { Home } from "../pages/Home";
import { Page1 } from "../pages/Page1";
import { Page1DetailA } from "../pages/Page1DetailA";
import { Page1DetailB } from "../pages/Page1DetailB";
import { Page2 } from "../pages/Page2";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route exact path={`${url}/DetailA`}>
              <Page1DetailA path={`${url}/DetailA`} />
            </Route>
            <Route exact path={`${url}/DetailB`}>
              <Page1DetailB path={`${url}/DetailB`} />
            </Route>
          </Switch>
        )}
      />
      <Route exact path="/page2" render={() => <Page2 />} />
      <Router path="*" render={() => <Page404 />} />
    </Switch>
  );
};
