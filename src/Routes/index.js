import AboutUs from "~/pages/AboutUs"
import BookAppoinmentPage from "~/pages/Book_Appoinment"
import FAQ from "~/pages/FAQ"
import HomePage from "~/pages/HomePage"
import PrivatePolicy from "~/pages/PrivatePolicy"
import PromotionPage from "~/pages/PromotionPage"
import ServicesPage from "~/pages/ServicesPage"

//Public Routes
const publicRoutes =[
    {path: "/", component: HomePage},
    {path: "/faq", component: FAQ},
    {path: "/private_policy", component: PrivatePolicy},
    {path:"/promotion", component:PromotionPage},
    {path:"/about_us", component: AboutUs},
    {path:"/services", component: ServicesPage},
    {path:"/book_appoinment", component: BookAppoinmentPage}
]

//Private Routers
const privateRoutes =[

]

export {publicRoutes, privateRoutes}