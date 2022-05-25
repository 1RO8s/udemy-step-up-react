import { memo } from "react";

export const ChildArea = memo(({ isOpen, closeChild }) => {
  console.log("# reder ChildArea");
  const data = [...Array(2000).keys()];
  data.forEach((e) => {
    console.log("data!");
  });

  return (
    <>
      {isOpen ? (
        <div>
          <p>Child Area！！</p>
          <button onClick={closeChild}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
