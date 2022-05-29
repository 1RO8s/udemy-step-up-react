import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  const { state } = location;
  const history = useHistory();
  console.log("#location:", location);
  console.log("#state:", state);

  return (
    <div>
      <h1>Page1の詳細A</h1>
      <button onClick={() => history.goBack()}>戻る</button>
    </div>
  );
};
