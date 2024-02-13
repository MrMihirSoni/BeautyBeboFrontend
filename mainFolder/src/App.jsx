import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import AllRoutes from "./routes/AllRoutes"
import ScrollToTop from "react-scroll-to-top";

function App() {

  return (
    <>
     <ScrollToTop style={{width:"3rem",height:"3rem",backgroundColor:"#DD0285", borderRadius:"100%", paddingTop:"10px", paddingRight:"10px", paddingBottom:"10px", paddingLeft:"10px"}} smooth color="white" />
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </>
  )
}

export default App
