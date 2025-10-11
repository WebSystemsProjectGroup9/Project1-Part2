import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { ToastProvider } from "./context/ToastContext";
import SignIn from "./pages/SignIn";
import "./styles/gradient.css";

function App() {
  return (
    <ToastProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* keep root redirect if you want, but point to index route in SPA */}
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </ToastProvider>
  );
}

export default App;
