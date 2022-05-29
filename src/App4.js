import { Router } from "./router/Router4";

import "./styles.css";

/** 様々なCSSの当て方 */
export default function App() {
  const user = {
    name: "Kevin",
    image: "https://source.unsplash.com/XHVpWcr5grQ",
    email: "kevin-atomic@example.com",
    phone: "0120-999-8888",
    company: {
      name: "dot ,inc"
    },
    website: "https://google.com"
  };

  return <Router />;
}
