import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { StoreContext, StoreContextProvider } from "./context/store";
import { useContext } from "react";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NavBar from "./components/navbar/NavBar";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";
import StripeContainer from "./components/stripe-container/StripeContainer";
import FavouriteProducts from "./pages/favouriteProducts/FavouriteProducts";

function App() {
  const { user } = useContext(StoreContext);

  return (
    <StoreContextProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route path="/login">{user ? <ProductList /> : <Login />}</Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/products/:title">
              <Product />
            </Route>
            <Route path="/checkout">
              {user ? <StripeContainer /> : <Register />}
            </Route>
            <Route path="/favourites">
              {user ? <FavouriteProducts /> : <Register />}
            </Route>
          </Switch>
          <Newsletter />
          <Footer />
        </div>
      </Router>
    </StoreContextProvider>
  );
}

export default App;
