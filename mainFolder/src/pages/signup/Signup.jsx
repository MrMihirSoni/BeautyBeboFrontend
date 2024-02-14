import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const { auth, setAuth, userName, setUserName } = useContext(AuthContext);
  const navigate = useNavigate();
  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "https://beautybebobackend-production.up.railway.app/user/login",
        { email, password },
        { withCredentials: true }
      );
      setAuth(true);
      setUserName(response.data.userName);
      localStorage.setItem("userName", response.data.userName);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const postData = async (data) => {
    try {
      const response = await axios.post(
        "https://beautybebobackend-production.up.railway.app/user/register",
        data,
        { withCredentials: true }
      );
      if (response.data.message == "New user has been created!") {
        login(data.email, data.password);
      }
    } catch (error) {
      if (
        error.response.data.error ==
        "password must contain atleast 8 charectors!"
      )
        alert("Please create a password which has atleast 8 charectors!");
      else if (error.response.data.error == "email already exists!") {
        alert("Email already exists!\nLogin to continue!");
        navigate("/login");
      } else if (error.response.data.error == "phone number already exists!")
        alert(
          "Phone number already exists!\nTry different number for registeration!"
        );
      else console.log(error);
    }
  };
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: 0,
    email: "",
    password: "",
  });
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
            <p>First Name:</p>
            <div>
              <input
                type="text"
                name="firstName"
                required
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div>
            <p>Last Name:</p>
            <div>
              <input
                type="text"
                name="lastName"
                required
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div>
            <p>userName:</p>
            <div>
              <input
                type="text"
                name="userName"
                required
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div>
            <p>Phone No.:</p>
            <div>
              <input
                type="number"
                name="phone"
                required
                onChange={handleFormChange}
              />
            </div>
          </div>
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
            <p>
              Password:{" "}
              <span style={{ color: "#DD0285", fontSize: "0.8rem" }}>
                (must contain atleast 8 charector.)
              </span>
            </p>
            <div>
              <input
                type="text"
                name="password"
                required
                onChange={handleFormChange}
              />
            </div>
          </div>
          <input className="submitButton" type="submit" value="Register Now!" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
