import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("hogehoge");
  const [isOpen, setIsOpen] = useState(false);

  const changeText = (e) => setText(e.target.value);
  const openChild = () => setIsOpen(true);
  const closeChild = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <div className="App">
      <input value={text} onChange={changeText} />
      <br />
      <p>{text}</p>
      <button onClick={openChild}>開く</button>
      <ChildArea isOpen={isOpen} closeChild={closeChild} />
    </div>
  );
}
