import DetailPage from "../pages/detail-page";
import HomePage from "../pages/home-page";

export const publicRoutes = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/detail",
    element: DetailPage,
  },
];
