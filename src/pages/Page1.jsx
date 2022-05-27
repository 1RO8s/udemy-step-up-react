import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1!!</h1>
      <Link to="/page1/DetailA">詳細A</Link>
      <br />
      <Link to="/page1/DetailB">詳細B</Link>
    </div>
  );
};
