import React from "react";
import "../styles/auth.css";

const AuthForm = () => {
  return (
    <div className="wrapper">
      <div className="switch">
        <input type="checkbox" id="toggle" className="toggle" />
        <label htmlFor="toggle" className="slider"></label>
        <div className="card-side"></div>
      </div>

      <div className="flip-card__inner">
        <div className="flip-card__front">
          <form className="flip-card__form">
            <h2 className="title">Login</h2>
            <input
              className="flip-card__input"
              placeholder="Email"
              type="email"
              required
            />
            <input
              className="flip-card__input"
              placeholder="Password"
              type="password"
              required
            />
            <button type="submit" className="flip-card__btn">Login</button>
          </form>
        </div>

        <div className="flip-card__back">
          <form className="flip-card__form">
            <h2 className="title">Register</h2>
            <input
              className="flip-card__input"
              placeholder="Name"
              type="text"
              required
            />
            <input
              className="flip-card__input"
              placeholder="Email"
              type="email"
              required
            />
            <input
              className="flip-card__input"
              placeholder="Password"
              type="password"
              required
            />
            <button type="submit" className="flip-card__btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
