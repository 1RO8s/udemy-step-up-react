import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  console.log("#location", location);
  return (
    <div>
      <h1>Page1の詳細A</h1>
    </div>
  );
};
