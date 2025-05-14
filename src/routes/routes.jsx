import Home from "../pages/home";
import Contact from "../pages/contact";
import Products from "../pages/products/page";

const routes = [
  {
    path: "/",
    element: <Home />,
    exact: "true",
    type: "public",
  },
  {
    path: "/contact-us",
    element: <Contact />,
    exact: "true",
    type: "public",
  },
  {
    path: "/products",
    element: <Products />,
    exact: "true",
    type: "public",
  },
];

export default routes;
