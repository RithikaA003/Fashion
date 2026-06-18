import React, { useState } from "react";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    setError("");

    /* =========================
       SIGNUP
    ========================= */

    if (currState === "SignUp") {

      const newUser = {
        name,
        email,
        password,
      };

      localStorage.setItem(
        "user",
        JSON.stringify(newUser)
      );

      alert("Signup Successful 🎉");

      setCurrState("Login");

      setName("");
      setEmail("");
      setPassword("");

      return;
    }

    /* =========================
       ADMIN LOGIN
    ========================= */

    if (
      email === "admin@gmail.com" &&
      password === "12345"
    ) {

      localStorage.setItem("isAdmin", true);

      alert("Admin Login Successful 🔥");

      setShowLogin(false);

      window.location.href = "/admin";

      return;
    }

    /* =========================
       USER LOGIN
    ========================= */

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (!savedUser) {

      setError("No account found");

      return;
    }

    if (
      savedUser.email === email &&
      savedUser.password === password
    ) {

      alert("Login Successful 🎉");

      setShowLogin(false);

    } else {

      setError("Invalid email or password");

    }

  };

  return (

    <div className="login-popup">

      <form
        className="login-popup-container"
        onSubmit={handleSubmit}
      >

        {/* HEADER */}
        <div className="login-popup-header">

          <h2>{currState}</h2>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            className="close-btn"
            onClick={() => setShowLogin(false)}
          >
            ✖
          </button>

        </div>

        {/* INPUTS */}
        <div className="login-popup-inputs">

          {/* NAME */}
          {currState === "SignUp" && (

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />

          )}

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

        </div>

        {/* ERROR MESSAGE */}
        {error && (

          <p className="error-text">
            {error}
          </p>

        )}

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          className="login-btn"
        >
          {currState}
        </button>

        {/* SWITCH LOGIN / SIGNUP */}
        <p className="switch-text">

          {currState === "Login" ? (

            <>
              Don't have an account?{" "}

              <span
                onClick={() =>
                  setCurrState("SignUp")
                }
              >
                SignUp
              </span>
            </>

          ) : (

            <>
              Already have an account?{" "}

              <span
                onClick={() =>
                  setCurrState("Login")
                }
              >
                Login
              </span>
            </>

          )}

        </p>

      </form>

    </div>

  );
};

export default LoginPopup;