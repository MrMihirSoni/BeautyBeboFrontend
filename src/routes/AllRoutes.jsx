import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Makeup from "../pages/makeup/Makeup";
import Skin from "../pages/skin/Skin";
import Hair from "../pages/hair/Hair";
import PersonalCare from "../pages/personalCare/PersonalCare";
import MomBabyCare from "../pages/mom&babyCare/MomBabyCare";
import Fragnance from "../pages/fragrance/Fragnance";
import Ayurveda from "../pages/ayurveda/Ayurveda";
import Womens from "../pages/womens/Womens";
import Signup from "../pages/signup/Signup"
import Cart from "../pages/cart/Cart";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/makeup" element={<Makeup/>}/>
        <Route path="/skin" element={<Skin/>}/>
        <Route path="/hair" element={<Hair/>}/>
        <Route path="/personal-care" element={<PersonalCare/>}/>
        <Route path="/mom-baby-care" element={<MomBabyCare/>}/>
        <Route path="/fragrance" element={<Fragnance/>}/>
        <Route path="/ayurveda" element={<Ayurveda/>}/>
        <Route path="/womens" element={<Womens/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
