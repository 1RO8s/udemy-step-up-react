import { StrictMode } from "react";
import ReactDom from "react-dom";
import App from "./App2";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
