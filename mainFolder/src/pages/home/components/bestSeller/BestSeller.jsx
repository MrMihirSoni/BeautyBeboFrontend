import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./bestSeller.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PriceContext } from "../../../../contexts/PriceContext";

const BestSeller = () => {
  const [data, setData] = useState([]);
  const {setCount, count} = useContext(PriceContext)

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  const apiCall = async () => {
    try {
      const response = await axios.get(
        "https://beautybebobackend-production.up.railway.app/products?limit=8"
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

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
      <div className="bestSellerWrapper">
        <h3>Best Seller</h3>
        <div className="bestSeller">
          <Carousel responsive={responsive}>
            {data.map((ele, index) => (
              <div className="bestSellerCard" key={ele._id}>
                <div className="bestSellerPhoto">
                  <img src={ele.image} alt="" />
                </div>
                <div
                  className="bestSellerCardDetails"
                  style={{ textAlign: "center" }}
                >
                  <h3 style={{ textOverflow: "ellipsis" }}>{ele.title}</h3>
                  <p>
                    <span style={{ color: "#DD0285" }}>{ele.price}</span>
                  </p>
                </div>
                <div
                  className="bestSellerCardDetailsButtons"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  <button onClick={() => addToCart(ele._id)}>Add to cart</button>
                  <button>
                    <i className="bx bxs-heart"></i>
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
