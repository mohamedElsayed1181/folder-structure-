import Favorite from "@/components/Favorite/Favorite";
import Home from "@/components/Home/Home";
import MainLayOut from "@/layout/MainLayOut";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorite />,
      },
    ],
  },
]);

export default function AppRoute() {
  return <RouterProvider router={router} />;
}
