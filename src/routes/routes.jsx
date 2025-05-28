import Home from "../pages/home";
import Contact from "../pages/contact";
import Products from "../pages/products/page";
import Gallery from "../pages/gallery/page";
import AboutUs from "../pages/about";
import Brands from "../pages/brands";
import Certification from "../pages/certification/certification";
import CartPage from "../pages/cart/cart";

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
  {
    path: "/gallery",
    element: <Gallery />,
    exact: "true",
    type: "public",
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    exact: "true",
    type: "public",
  },
  {
    path: "/brands",
    element: <Brands />,
    exact: "true",
    type: "public",
  },
  {
    path: "/certifications",
    element: <Certification />,
    exact: "true",
    type: "public",
  },
  {
    path: "/cart-page",
    element: <CartPage />,
    exact: "true",
    type: "public",
  },
];

export default routes;
