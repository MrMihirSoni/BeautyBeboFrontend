import React, { useContext, useEffect, useState } from "react";
import "./apiCallForProducts.css";
import axios from "axios";
import { PriceContext } from "../../../contexts/PriceContext";

const ApiCallForProducts = ({ data }) => {
  const [load, setLoad] = useState(true);
  const [counter, setCounter] = useState(1);
  const {count, setCount} = useContext(PriceContext);
  const showLoading = () => {
    setTimeout(() => setLoad(false), 3000);
  };
  useEffect(() => showLoading(), []);
  useEffect(() => {
    setTimeout(() => {
      if (counter == 3) setCounter(1);
      else setCounter(counter + 1);
    }, 400);
  }, [counter]);
  const addToCart = async (id) => {
    try {
      const response = await axios.post(
        `https://beautybebobackend-production.up.railway.app/cart/add/${id}`,
        {},
        { withCredentials: true }
      );
      alert("Item added to your cart!")
      if(response) setCount(count+1)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {data.length > 0 ? (
        <div className="productsWrapper">
          <div className="productsGrid">
            {data.map((ele) => (
              <div className="productCard" key={ele._id}>
                <div className="productImg">
                  <img src={ele.image} alt="" />
                </div>
                <div className="productCardDetails">
                  <h3>{ele.title}</h3>
                  <p>₹{ele.price}</p>
                  <div className="productsCardButtons">
                    <button onClick={() => addToCart(ele._id)}>
                      Add To Cart
                    </button>
                    <button>
                      <i className="bx bxs-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            fontSize: "4rem",
            fontWeight: "bold",
            margin: "10rem 0",
          }}
        >
          {!load ? (
            "Sorry! No Products Found!!!"
          ) : (
            <>
              <div className={"loading"}></div>Loading{" "}
              {counter == 1 ? "." : counter == 2 ? ".." : "..."}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ApiCallForProducts;
