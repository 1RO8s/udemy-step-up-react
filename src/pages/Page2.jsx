import { Link } from "react-router-dom";

export const Page2 = () => {
  const id = 122;
  return (
    <div>
      <h1>Page2!!</h1>
      <Link to={`page2/${id}`}>page2/{id}</Link>
      <br />
      <Link to={`page2/${id}?name=hiro&age=30`}>
        page2/{id}?name=hiro&age=30
      </Link>
    </div>
  );
};
