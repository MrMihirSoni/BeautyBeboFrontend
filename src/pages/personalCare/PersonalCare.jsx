import React, { useEffect, useState } from 'react'
import axios from "axios";
import ApiCallForProducts from "../components/apiCallForProducts/ApiCallForProducts";

const PersonalCare = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      apiCall()
    }, []);
  
    const apiCall = async () => {
      try {
        const response = await axios.get(
          "https://beautybebobackend-production.up.railway.app/products?category=personal-care"
        );
        setData(response.data.data);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };
    return (<>
    <ApiCallForProducts data={data}/>
    </>  
    );
}

export default PersonalCare
