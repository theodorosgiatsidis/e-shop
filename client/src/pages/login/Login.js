import React, { useRef, useContext } from "react";
import { StoreContext } from "../../context/store";
import axios from "axios";
import "./login.css";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(StoreContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location = "/";
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Sign in</h1>
        <label>Username</label>
        <input ref={userRef} type="text" placeholder="Username..." />
        <label>Password</label>
        <input ref={passwordRef} type="password" placeholder="Password.." />
        <button className="login-btn" type="submit" disabled={isFetching}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
