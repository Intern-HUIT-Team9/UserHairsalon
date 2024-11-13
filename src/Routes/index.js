import FAQ from "~/pages/FAQ"
import HomePage from "~/pages/HomePage"
import PrivatePolicy from "~/pages/PrivatePolicy"
import PromotionPage from "~/pages/PromotionPage"

//Public Routes
const publicRoutes =[
    {path: "/", component: HomePage},
    {path: "/faq", component: FAQ},
    {path: "/private_policy", component: PrivatePolicy},
    {path:"/promotion", component:PromotionPage}
]

//Private Routers
const privateRoutes =[

]

export {publicRoutes, privateRoutes}