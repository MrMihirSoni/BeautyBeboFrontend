import React from "react";
import AllCategory from "./components/topCategory&Carosel/AllCategory";
import BestSeller from "./components/bestSeller/BestSeller";

const Home = () => {
  return <div style={{width:"95%", maxWidth:"1240px", margin:"auto", padding:"10px 0"}}>
    <AllCategory/>
    <BestSeller/>
  </div>;
};

export default Home;
