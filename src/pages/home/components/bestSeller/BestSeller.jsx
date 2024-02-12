import React, { useEffect, useState } from "react";
import axios from "axios";
import "./bestSeller.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BestSeller = () => {
  const [data, setData] = useState([]);

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
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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

  return (
    <>
      <div className="bestSellerWrapper">
        <h3>Best Seller</h3>
        <div className="bestSeller">
          <Carousel responsive={responsive}>
            {data.map((ele, index) => (
              <div className="bestSellerCard">
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
                  <button>Add to cart</button>
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
