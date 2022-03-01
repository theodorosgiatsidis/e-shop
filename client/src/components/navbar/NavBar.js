import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { StoreContext } from "../../context/store";
import { Popup } from "@progress/kendo-react-popup";
import "./navbar.css";

const NavBar = () => {
  const { user, dispatch } = useContext(StoreContext);
  const { cartItems, setCartItems } = useContext(StoreContext);
  const { favouriteProducts, setFavouriteProducts } = useContext(StoreContext);
  const anchor = React.useRef();
  const [show, setShow] = React.useState(false);
  const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
  const history = useHistory();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location = "/";
  };

  React.useEffect(() => {
    setShow(true);
  }, []);

  const onClick = () => {
    setShow(!show);
  };

  const handleRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const handleClick = () => {
    history.push("/checkout");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="navLeft">
          <Link to="/">
            <img
              className="navImg"
              src="https://www.nameslook.com/names/gevris-nameslook.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="navCentre">
          <form className="search-bar">
            <input type="search" placeholder="Search" />
            <i className="nav-icon fas fa-search"></i>
          </form>
        </div>
        <div className="navRight">
          {user && <i className="fas fa-user-circle"></i>}
          <i
            ref={anchor}
            onClick={onClick}
            className="icon fas fa-shopping-cart"
          ></i>
          <i className="icon fas fa-heart"></i>
          <Link className="link" to="/login">
            {!user && <span>LOGIN</span>}
          </Link>
          <Link className="link" to="/register">
            {!user && <span>REGISTER</span>}
          </Link>

          <Popup
            anchor={anchor.current}
            show={show}
            popupClass={"popup-content"}
          >
            <div className="Basket">
              {cartItems.length === 0 && <h2>Cart Is Empty</h2>}
              {cartItems.map((product) => (
                <div className="BasketItems" key={product._id}>
                  <h2>{product.title}</h2>
                  <img className="img-basket" src={product.picture} />
                  <span>Price:{product.price}$</span>
                  <span>Quantity: {product.quantity}</span>
                  <span>Size: {product.size}</span>
                  <span>Color: {product.color}</span>
                  <i
                    onClick={() => handleRemove(product)}
                    className="icon-basket far fa-trash-alt"
                  ></i>{" "}
                </div>
              ))}
              <div className="totalPrice">
                {itemsPrice ? (
                  <strong>Total Price: {itemsPrice}$</strong>
                ) : null}
              </div>
              <div className="Checkout">
                <button onClick={handleClick} className="checkout-btn">
                  PAY NOW
                </button>
              </div>
            </div>
          </Popup>

          {user && (
            <span onClick={handleLogout} className="logout">
              LOGOUT
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
