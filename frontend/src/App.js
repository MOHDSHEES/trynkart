import { useEffect } from "react";
import { useSelector } from "react-redux";
import Homepage from "./components/homepage";
import NavbarHomepage from "./components/navbarComponents/navbarHomepage";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import Category from "./components/category";
import SignInUpmodal from "./components/signIn-UpComponent/signInUpModal";
import Signinuppage from "./components/signIn-UpComponent/SignInUpPage";
import Cart from "./components/cart";
import Error404 from "./components/error404";
import ProtectedRoute from "./components/functions/protectedRoute";
import Itempage from "./components/itemPage";
import Profile from "./components/profile";
import Navbar from "./components/navbarComponents/navbar";
import Footer from "./components/footerComponents/footer";
import Contactpage from "./components/contactPage";
import OrderDetails from "./components/orderComponents/orderDetails";
import Checkout from "./components/orderComponents/checkout";
import Categorybanner from "./components/categoryComponents/categorybanner";
import OrderSummary from "./components/orderComponents/orderSummary";
import ForgetPassword from "./components/forgetPassword";
import Faq from "./components/faq";
import Privacypolicy from "./components/privacyPolicy";

function App() {
  const usersInfo = useSelector((state) => state.loginCheck);
  const { user } = usersInfo;

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  // console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <ForgetPassword />
        <SignInUpmodal />
        <ScrollToTop />

        <Switch>
          <Route exact path="/">
            <NavbarHomepage />
            <Homepage />
          </Route>
          <Route exact path="/contact">
            <Contactpage />
          </Route>
          <ProtectedRoute
            exact
            path="/cart"
            user={user}
            query="/cart"
            redirectTo="/signin"
            components={[
              <Cart userId={user && user.user ? user.user._id : ""} />,
            ]}
          />
          <ProtectedRoute
            exact
            path="/account"
            user={user}
            query="/account"
            redirectTo="/signin"
            components={[
              <Navbar />,
              <Profile
                userId={user && user.user ? user.user._id : ""}
                user={user && user.user}
              />,
              <Footer />,
            ]}
          />

          <ProtectedRoute
            exact
            path="/account/orderDetails"
            user={user}
            // query="/account"
            redirectTo="/signin"
            components={[<Navbar />, <OrderDetails />, <Footer />]}
          />
          <Route exact path="/signin">
            <Signinuppage />
          </Route>
          <Route exact path="/signup">
            <Signinuppage />
          </Route>

          <Route exact path="/products/:category">
            {/* <SignInUpmodal /> */}
            <Category />
          </Route>
          <Route exact path="/product/:category/:id">
            {/* <SignInUpmodal /> */}
            <Itempage />
          </Route>
          <Route exact path="/order/summary">
            <Navbar />
            <OrderSummary />
            <Footer />
          </Route>
          <Route exact path="/order/:id">
            <Navbar />
            <Categorybanner name="Checkout" />
            <Checkout />
            <Footer />
          </Route>
          <Route exact path="/faq">
            <Navbar />
            <Faq />
            <Footer />
          </Route>
          <Route exact path="/privacypolicy">
            <Navbar />
            <Privacypolicy />
            <Footer />
          </Route>
          {/* <Route exact path="/cart">
            <Cart />
          </Route> */}

          <Route path="/404">
            <Error404 />
          </Route>

          <Redirect to="/404" />
        </Switch>
        <button id="scroll-top" title="Back to Top">
          <i className="icon-arrow-up"></i>
        </button>
      </BrowserRouter>
    </div>
  );
}

export default App;
