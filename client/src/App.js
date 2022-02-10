import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { StoreContext, StoreContextProvider } from "./context/store";
import { useContext } from "react";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";

function App() {
  const { user } = useContext(StoreContext);

  return (
    <StoreContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route path="/login">{user ? <ProductList /> : <Login />}</Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </StoreContextProvider>
  );
}

export default App;
