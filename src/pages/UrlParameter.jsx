import { useParams, useLocation } from "react-router-dom";
export const UrlParameter = (props) => {
  const { id } = useParams();
  const { search } = useLocation();
  console.log("# search:", search);
  const query = new URLSearchParams(search);
  //console.log("#values:", query.values().next());
  let entries = {};
  Array.from(query.entries()).forEach(([k, v]) => {
    //console.log();
    entries[k] = v;
  });
  console.log(entries);
  return (
    <div>
      <h1>Parameter</h1>
      <p>パラメータは{id}です</p>
      <p>クエリは{search}です</p>
    </div>
  );
};
