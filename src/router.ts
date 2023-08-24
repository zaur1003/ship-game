import HomePage from "./pages/home/index.page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: HomePage(),
  },
]);

export default router;
