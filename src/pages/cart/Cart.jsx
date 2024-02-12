import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { PriceContext } from "../../contexts/PriceContext";

const Cart = () => {
  const { setCartPrice, data, setData, count, setCount } =
    useContext(PriceContext);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://beautybebobackend-production.up.railway.app/cart/delete/${id}`,
        { withCredentials: true }
      );
      setCount(count+1);
    } catch (error) {
      console.log(error);
    }
  };

  return (<>
    {
      data.length>0?
      <div className="cartBody">
      {data.map((ele) => (
        <div className="cartProduct">
          <div className="cartProductDetailsDiv">
            <div className="cartProductImageDiv">
              <img src={ele.image} alt="" />
            </div>
            <div className="cartProductDetails">
              <h3>{ele.title}</h3>
              <p>₹{ele.price}</p>
            </div>
          </div>
          <div className="deleteButtonDiv">
            <button onClick={() => handleDelete(ele._id)}>Delete</button>
          </div>
        </div>
      ))}
      <div className="buyButtonDiv">
        <button>Buy Now!</button>
      </div>
    </div>:<div>Please Add sothing to cart first</div>
    }</>
   
  );
};

export default Cart;
