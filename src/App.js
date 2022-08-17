import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./rRouterDom/Home";
import About from "./rRouterDom/About";
import Services from "./rRouterDom/Services";
import Products  from "./rRouterDom/Products";
import Error from "./rRouterDom/Error";
import SharedLayout from "./rRouterDom/SharedLayout";
import SingleProduct from "./rRouterDom/SingleProduct";

export default function App() {
  //   const [show,setShow] = useState(true)
  return (
    // keep seeing all the time homepage

    <div>
      <BrowserRouter>
      <nav>navbar-bar</nav>
        <Routes>
          <Route path="/"  element={<SharedLayout />}>
            <Route index element={<Home />}/>
            <Route path="about"  element={<About />}/>
            <Route path="services"  element={<Services />}/>
            <Route path="products"  element={<Products/>}/>
            <Route path="products/:productId"  element={<SingleProduct/>}/>
            <Route path="*"  element={<Error />}/>
          </Route>
        </Routes>
        <footer >footer</footer>
      </BrowserRouter>
   
    </div>
  )
}
