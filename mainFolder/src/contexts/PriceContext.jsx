import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const PriceContext = createContext();

const PriceContextProvider = ({ children }) => {
  const [cartPrice, setCartPrice] = useState(0);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://beautybebobackend-production.up.railway.app/cart",
        { withCredentials: true }
      );
      setData(response.data.cartData);
      const total = response.data.cartData.reduce((acc, crr) => {
        return acc + crr.price;
      }, 0);
      setCartPrice(total);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData() 
  },[count]);
  return (
    <PriceContext.Provider value={{ cartPrice, setCartPrice, data, setData, count, setCount }}>
      {children}
    </PriceContext.Provider>
  );
};
export default PriceContextProvider;
