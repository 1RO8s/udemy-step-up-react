import { CSSModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

/** 様々なCSSの当て方 */
export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CSSModules />
      <StyledJsx />
    </div>
  );
}
