import React from "react";
import "./user-form-styles.css";

export const RequireLogin = ({ navigate }) => {
  return (
    <div className="require-login-container">
      <h2>TO PLAY, &nbsp;PLEASE</h2>
      <div>
        <button className="login-btn" onClick={() => navigate("login")}>
          LOG IN
        </button>{" "}
        or{" "}
        <button className="login-btn" onClick={() => navigate("signup")}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};
