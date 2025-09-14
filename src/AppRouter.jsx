import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration, useLocation } from "react-router"
import HomePage from "./features/pages/Home"
import AboutPage from "./features/pages/About"
import HireExperts from "./features/pages/HireExperts"
import StudentDiscount from "./features/pages/StudentsDiscounts"
import AfricanBusiness from "./features/pages/AfricanBusiness"
import WebsiteBuilder from "./features/pages/AiBuilder"
import Contact from "./features/pages/contact"
import PrivacyPolicy from "./features/pages/PrivacyPolicy&LinkedScreens"
import TermsAndService from "./features/pages/PrivacyPolicy&LinkedScreens/TermsOfService"
import GeneralConduct from "./features/pages/PrivacyPolicy&LinkedScreens/GeneralConducts"
import CustomerSupport from "./features/pages/PrivacyPolicy&LinkedScreens/CustomerSupport"
import SMEPolicy from "./features/pages/PrivacyPolicy&LinkedScreens/SMEPolicy"
import StudentDiscountPolicy from "./features/pages/PrivacyPolicy&LinkedScreens/StudentDiscountPolicy"
import PaymentPolicy from "./features/pages/PrivacyPolicy&LinkedScreens/PaymentsPolicy"
import TerminationPolicy from "./features/pages/PrivacyPolicy&LinkedScreens/TerminationPolicy"
import PolicyUpdates from "./features/pages/PrivacyPolicy&LinkedScreens/PolicyUpdates"
import { useLayoutEffect } from "react"


const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

function RouteLayout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
const router = createBrowserRouter([
    {
        element:<RouteLayout/>,
        children:[

            { path: '/', element: <HomePage /> },
            {path:"/about",element:<AboutPage/>},
            {path:"/hire",element:<HireExperts/>},
            {path:"/student",element:<StudentDiscount/>},
            {path:"/african-businesses",element:<AfricanBusiness/>},
            {path:"/website-builder",element:<WebsiteBuilder/>},
            {path:"/contact",element:<Contact/>},
            {path:"/privacy-policy",element:<PrivacyPolicy/>},
            {path:"/terms",element:<TermsAndService/>},
            {path:"/general",element:<GeneralConduct/>},
            {path:"/customer-support",element:<CustomerSupport/>},
            {path:"/SME-Policy",element:<SMEPolicy/>},
            {path:"/student-policy",element:<StudentDiscountPolicy/>},
            {path:"/payments",element:<PaymentPolicy/>},
            {path:"/termination",element:<TerminationPolicy/>},
            {path:"/policy-updates",element:<PolicyUpdates/>}
        ]
    }
   
])


export const RouterProviderApp = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}