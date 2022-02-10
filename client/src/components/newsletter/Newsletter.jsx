import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <form className="form">
        <h1 className="title">NewsLetter</h1>
        <p className="desc">Get timely updates from your favorite products</p>
        <input className="input" type="text" placeholder="Your email" />
        <button className="btn">Send</button>
      </form>
    </div>
  );
};

export default Newsletter;
