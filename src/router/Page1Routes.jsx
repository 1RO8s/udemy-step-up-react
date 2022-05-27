import { Page1 } from "../pages/Page1";
import { Page1DetailA as DetailA } from "../pages/Page1DetailA";
import { Page1DetailB as DetailB } from "../pages/Page1DetailB";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <DetailA />
  },
  {
    path: "/detailb",
    exact: false,
    children: <DetailB />
  }
];
