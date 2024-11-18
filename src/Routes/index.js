import FAQ from "~/pages/FAQ";
import HomePage from "~/pages/HomePage";
import PrivatePolicy from "~/pages/PrivatePolicy";
import Product from "~/pages/Product";
import PromotionPage from "~/pages/PromotionPage";
import ServicesPage from "~/pages/ServicesPage";

//Public Routes
const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/faq", component: FAQ },
  { path: "/private_policy", component: PrivatePolicy },
  { path: "/promotion", component: PromotionPage },
  { path: "/service", component: ServicesPage },
  { path: "/product", component: Product },
];

//Private Routers
const privateRoutes = [];

export { publicRoutes, privateRoutes };
