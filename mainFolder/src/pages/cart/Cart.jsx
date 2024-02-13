import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { PriceContext } from "../../contexts/PriceContext";
import { AuthContext } from "../../contexts/AuthContext";

const Cart = () => {
  const { data, count, setCount } = useContext(PriceContext);
  const { auth } = useContext(AuthContext);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://beautybebobackend-production.up.railway.app/cart/delete/${id}`,
        { withCredentials: true }
      );
      alert("Item deleted from your Cart!")
      setCount(count + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {auth?
      data.length > 0? (
        <div className="cartBody">
          {data.map((ele) => (
            <div className="cartProduct" key={ele._id}>
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
        </div>
      ) : (
        <div className="emptyCartMsg">Please Add sothing to cart first</div>
      ):<div className="emptyCartMsg">Please login first</div>}
    </>
  );
};

export default Cart;
