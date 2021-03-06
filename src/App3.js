import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

import "./styles.css";

/** ルーティングの基礎 */
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
      <Router />
    </BrowserRouter>
  );
}
