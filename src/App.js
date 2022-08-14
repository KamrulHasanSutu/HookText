import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./rRouterDom/Home";
import About from "./rRouterDom/About";
import Services from "./rRouterDom/Services";
import Error from "./rRouterDom/Error";


export default function App() {
  //   const [show,setShow] = useState(true)


  return (
    // keep seeing all the time homepage

    <div>
      <BrowserRouter>
      <nav>our navbar</nav>
        <Routes>
          <Route path="/"  element={<Home />}>
            <Route path="about"  element={<About />}/>
            <Route path="services"  element={<Services />}/>
            <Route path="products"  element={<h2>products page</h2>}/>
            <Route path="*"  element={<Error />}/>
          </Route>
        </Routes>
        <footer>our footer</footer>
      </BrowserRouter>
   
      
    

    </div>




  )


}

