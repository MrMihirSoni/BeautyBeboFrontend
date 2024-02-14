import React, { useEffect, useState } from "react";
import "./singleProduct.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const SingleProduct = () => {
    const {id} = useParams();
  const [data, setData] = useState({});
  const apiRequest = async () => {
    try {
      const response = await axios.get(
        `https://beautybebobackend-production.up.railway.app/${id}`,{}
      );
      setData(response.data.productData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apiRequest();
  }, [id]);
  return (
    <div className="singleProductMainDivWrapper">
      <div className="singleProductMainDiv">
        <div className="singleProductImageDiv">
          <img
            src="https://n2.sdlcdn.com/imgs/i/p/l/850X995_sharpened_2_1/Mamaearth-Daily-Moisturizing-Baby-Lotion-SDL627379852-1-cb9c8.webp"
            alt=""
          />
        </div>
        <div className="singleProductDetails">
          <h3>Title</h3>
          <p>
            Price: <span>456</span>
          </p>
          <p>
            Category: <span>Mom & baby</span>
          </p>
          <p>
            Discription: <span>Discription</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
