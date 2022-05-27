import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Page1 } from "./pages/Page1";
import { Page1DetailA } from "./pages/Page1DetailA";
import { Page1DetailB } from "./pages/Page1DetailB";
import { Page2 } from "./pages/Page2";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>
        <br />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route exact path={`${url}/DetailA`}>
                <Page1DetailA />
              </Route>
              <Route exact path={`${url}/DetailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
