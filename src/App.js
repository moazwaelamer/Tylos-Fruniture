// src/App.jsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./component/navbar";



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/login";
import CreateAccount from "./pages/createaccount";

import Landing from "./pages/landing";
import CategoryView from "./pages/categoryview";
import ProductDetails from "./pages/prodectdetatils";
import Cart from "./pages/cart";

import { AuthProvider } from "./pages/authcontext";

import Fotter from "./component/fotter";



function App() {


  return (
    <AuthProvider>
      <BrowserRouter>

       
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />

          {/* CATEGORY VIEW */}
          <Route path="/category/:section" element={<CategoryView />} />

          {/* PRODUCT DETAILS */}
          <Route path="/product/:section/:id" element={<ProductDetails />} />

          {/* AUTH PAGES */}
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />

          {/* CART */}
          <Route path="/cart" element={<Cart />} />

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Fotter />

        {/* Toast Fix */}
        <ToastContainer
          position="top-right"
          autoClose={1600}
          className="toast-fix"
        />

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
