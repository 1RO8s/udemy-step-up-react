import { container, title, button } from "./CssModules.module.scss";
export const CSSModules = () => {
  return (
    <div className={container}>
      <p className={title}>- CSS Modules -</p>
      <button className={button}>FIGHT!!</button>
    </div>
  );
};
