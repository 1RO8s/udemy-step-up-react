import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Top />} />
        <Router path="/users" render={() => <Users />} />
      </Switch>
    </BrowserRouter>
  );
};
