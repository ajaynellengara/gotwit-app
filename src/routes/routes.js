import Contact from "../pages/Contact/Contact";
import FindTrip from "../pages/FindTrip/FindTrip";
import TripDetails from "../pages/FindTrip/TripDetails";
import Home from "../pages/Home/Home";
import OfferTrip from "../pages/OfferTrip/OfferTrip";
import ForgotPassword from "../pages/AuthPages/ForgotPassword";
import Login from "../pages/AuthPages/Login";
import SignUp from "../pages/AuthPages/SignUp";
import Profile from "../pages/Profile/Profile";
import ViewMore from "../pages/FindTrip/ViewMore";

const routes = [
  { path: "/home", exact: true, element: <Home /> },
  { path: "/find-trip", exact: true, element: <FindTrip /> },
  { path: "/offer-trip", exact: true, element: <OfferTrip /> },
  { path: "/view-more", exact: true, element: <ViewMore /> },
  { path: "/contact", exact: true, element: <Contact /> },
  { path: "/login", exact: true, element: <Login /> },
  { path: "/signup", exact: true, element: <SignUp /> },
  { path: "/forgotpassword", exact: true, element: <ForgotPassword /> },
  { path: "/trip-details", exact: true, element: <TripDetails /> },
  { path: "/profile", exact: true, element: <Profile /> },
  { path: "*", exact: true, element: <Home /> },
];

export default routes;
