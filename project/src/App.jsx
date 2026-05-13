import React from "react";

// COMPONENTS
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import CartPage from "./Component/Cart";
import EmptyCart from "./Component/EmptyCart";
import Login from "./Component/Login";
import WishlistPage from "./Component/WishlistPage";
import MenPage from "./Component/MenPage";
import Aboutus from "./Component/Aboutus";
// ROUTER
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>

      <div className="w-full min-h-screen bg-white overflow-x-hidden">

        {/* NAVBAR */}
        <Navbar />

        {/* ROUTES */}
        <Routes>

          {/* LANDING PAGE */}
          <Route
            path="/"
            element={<Home />}
          />
                    <Route
            path="/Login"
            element={<Login />}
          />
                              <Route
            path="/WishlistPage"
            element={<WishlistPage />}
          />
                                        <Route
            path="/MenPage"
            element={<MenPage />}
            
          />
           <Route
            path="/Aboutus"
            element={<Aboutus />}
            
          />

          {/* CART PAGE */}
          <Route
            path="/cart"
            element={<CartPage />}
          />

          {/* EMPTY CART PAGE */}
          <Route
            path="/empty-cart"
            element={<EmptyCart />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
};

export default App;