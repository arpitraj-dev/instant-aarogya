// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Ambulance from "./components/Ambulance";
import Doctor from "./components/Doctor";
import Lab from "./components/Lab";
import BabyCarePage from "./components/BabyCarePage";
import ApolloProductsPage from "./components/ApolloProductsPage";
import Drinks from "./components/Drinks";
import WomenCare from "./components/WomenCare";
import PersonalCare from "./components/PersonalCare";
import Ayurveda from "./components/Ayurveda";
import HealthDevices from "./components/HealthDevices";
import HomeEssentials from "./components/HomeEssentials";
import HealthCondition from "./components/HealthCondition";
import CartPage from "./components/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        <main className="p-4">
          <Routes>
            <Route
              path="/"
              element={<HomePage cart={cart} setCart={setCart} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/ambulance" element={<Ambulance />} />
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/lab-tests" element={<Lab />} />
            <Route path="/babycare" element={<BabyCarePage />} />
            <Route path="/arogyaproducts" element={<ApolloProductsPage />} />
            <Route
              path="/nutritional-drinks"
              element={<Drinks cart={cart} setCart={setCart} />}
            />
            <Route path="/women-care" element={<WomenCare />} />
            <Route path="/personal-care" element={<PersonalCare />} />
            <Route path="/ayurveda" element={<Ayurveda />} />
            <Route path="/health-devices" element={<HealthDevices />} />
            <Route path="/home-essentials" element={<HomeEssentials />} />
            <Route path="/health-condition" element={<HealthCondition />} />
            <Route
              path="/cart"
              element={<CartPage cart={cart} setCart={setCart} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
