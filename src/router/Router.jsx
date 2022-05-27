import { Switch, Route } from "react-router-dom";
import { Page404 } from "../pages/404";
import { Home } from "../pages/Home";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map(({ path, exact, children }) => {
              console.log("# ", path, exact, children);
              return (
                <Route key={path} exact={exact} path={`${url}${path}`}>
                  {children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map(({ path, exact, children }) => {
              return (
                <Route key={path} exact={exact} path={`${url}${path}`}>
                  {children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
      <Route path="*" render={() => <Page404 />} />
    </Switch>
  );
};
