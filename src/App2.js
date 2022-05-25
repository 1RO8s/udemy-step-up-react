import { CSSModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CSSModules />
    </div>
  );
}
