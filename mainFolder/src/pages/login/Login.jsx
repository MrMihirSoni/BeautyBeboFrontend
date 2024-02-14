import React, { useContext, useState } from "react";
import "./login.css";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { PriceContext } from "../../contexts/PriceContext";

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const { auth, setAuth, userName, setUserName } = useContext(AuthContext);
  const { count, setCount } = useContext(PriceContext);
  const navigate = useNavigate();
  const postData = async (data) => {
    try {
      const response = await axios.post(
        "https://beautybebobackend-production.up.railway.app/user/login",
        data,
        { withCredentials: true }
      );
      if (response.data.msg == "Login successful!") {
        setAuth(true);
        setUserName(response.data.userName);
        localStorage.setItem("userName", response.data.userName);
        setCount(count + 1);
        navigate("/");
        alert("Login successful!");
      }
    } catch (error) {
      if (error.response.data.error == "Wrong password!")
        alert("Wrong Password");
      else if (error.response.data.error == "You need to register first!") {
        navigate("/signup")
        alert("Email is not registered\nRegister First!");
      }
    }
  };

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    postData(userData);
  };

  return (
    <div className="loginFormWrapper">
      <div className="loginFormDiv">
        <form action="" onSubmit={handleFormSubmit}>
          <div>
            <p>Email:</p>
            <div>
              <input
                type="email"
                name="email"
                required
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div>
            <p>Password:</p>
            <div>
              <input
                type={passwordVisibility ? "text" : "password"}
                name="password"
                required
                onChange={handleFormChange}
              />
              {passwordVisibility ? (
                <i className="bx bxs-show" onClick={handleVisibility}></i>
              ) : (
                <i className="bx bxs-hide" onClick={handleVisibility}></i>
              )}
            </div>
          </div>
          <input className="submitButton" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
