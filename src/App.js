import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./rRouterDom/Home";
import About from "./rRouterDom/About";
import Services from "./rRouterDom/Services";
import Products from "./rRouterDom/Products";
import Error from "./rRouterDom/Error";
import SharedLayout from "./rRouterDom/SharedLayout";
import SingleProduct from "./rRouterDom/SingleProduct";
import Login from "./rRouterDom/Login";
import Dashboard from "./rRouterDom/Dashboard";
import ProtectedRout from "./rRouterDom/ProtectedRout";
import HomeSharedProduct from "./rRouterDom/SharedProductLayout";
export default function App() {
  //   const [show,setShow] = useState(true)
  const [user, setUser] = useState(null)
  return (
    // keep seeing all the time homepage

    <div>
      <BrowserRouter>
        <nav>navbar-bar</nav>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />

            <Route path="products" element={<HomeSharedProduct />}>
              <Route index element={<Products />} />
              <Route path=":productId" element={<SingleProduct />} />
            </Route>

            <Route path="login" element={<Login setUser={setUser}></Login>} />

            <Route path="dashboard" element={
              <ProtectedRout user={user}>
                <Dashboard user={user} />
              </ProtectedRout>
            } />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        <footer >footer</footer>
      </BrowserRouter>

    </div>
  )
}
