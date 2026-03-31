import React, { useEffect, useState } from "react";
import "./index.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";


import { toast, ToastContainer } from "react-toastify";



const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Routes>     
         <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />    
                    <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </div>
      <Footer />
         <ToastContainer />
    </div>
  );
};

export default App;
