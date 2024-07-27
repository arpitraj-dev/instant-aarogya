// src/components/ApolloProductsPage.jsx
import React, { useEffect, useState } from "react";
import { Menu, MenuItem, TextField, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import logo from "../assets/apollo-logo.png"; // Ensure this path matches your file location

import AP1 from "../images/AP1.webp";
import AP2 from "../images/AP2.webp";
import AP3 from "../images/AP3.webp";
import AP4 from "../images/AP4.webp";
import AP5 from "../images/AP5.webp";
import AP6 from "../images/AP6.webp";
import AP7 from "../images/AP7.webp";
import AP8 from "../images/AP8.webp";
import AP9 from "../images/AP9.webp";
import AP10 from "../images/AP10.webp";
import AP11 from "../images/AP11.webp";
import AP12 from "../images/AP12.webp";
import AP13 from "../images/AP13.webp";
import AP14 from "../images/AP14.webp";
import AP15 from "../images/AP15.webp";
import AP16 from "../images/AP16.webp";
import axios from "axios";

const defaultProducts = [
  { img: AP1, description: "Smart Blood Glucose Monitoring System", price: "Rs 799",},
  { img: AP2, description: "Premium Citrus Refreshing Wet Wipes", price: "Rs 160",},
  { img: AP3, description: "Activated Charcoal Soap", price: "Rs 100" },
  { img: AP4, description: "ORS Orange Flavour Drink", price: "Rs 100" },
  { img: AP5, description: "Bathing Bar", price: "Rs 100" },
  { img: AP6, description: "Anti-Bac Wet Wipes", price: "Rs 60" },
  { img: AP7, description: "Wash Proof Adhesive Bandages", price: "Rs 20" },
  { img: AP8, description: "Lemon Grass Handwash", price: "Rs 80" },
  { img: AP9, description: "Washproof Bandage", price: "Rs 2" },
  { img: AP10, description: "Omega-3 Fish Oil", price: "Rs 180" },
  { img: AP11, description: "Digital Thermometer", price: "Rs 99" },
  { img: AP12, description: "Fresh Baby Wipes", price: "Rs 179" },
  { img: AP13, description: "ORS Orange Flavour Powder", price: "Rs 20" },
  { img: AP14, description: "Pregnancy Test Cassette", price: "Rs 50" },
  { img: AP15, description: "Neem Tulsi Face Wash", price: "Rs 100" },
  { img: AP16, description: "Aqua Blue Handwash", price: "Rs 100" },
];

const ApolloProductsPage = ({ cart, setCart }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [pincode, setPincode] = useState("");
  const [products, setProducts] = useState(null);

  const handleAddressClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAddressClose = () => {
    setAnchorEl(null);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:8080/products/arogya");
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {/* First fixed navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white p-4 flex items-center justify-between border-b z-10">
        <div className="flex items-center">
          <img src={logo} alt="Apollo Logo" className="h-10 mr-4 ml-8" />
          <div>
            <span className="text-blue-600 font-bold">Instant</span>
            <span className="text-blue-600 font-bold ml-2">Arogya</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="text-blue-600 flex items-center"
            onClick={handleAddressClick}
          >
            <LocationOnIcon className="mr-1" />
            Select Address
          </button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleAddressClose}
          >
            <MenuItem onClick={handleAddressClose}>
              Use Current Location
            </MenuItem>
            <MenuItem>
              <TextField
                label="Enter Pincode"
                variant="outlined"
                value={pincode}
                onChange={handlePincodeChange}
                size="small"
              />
            </MenuItem>
          </Menu>
          <IconButton color="inherit">
            <Link to="/cart">
              <ShoppingCartIcon /> - {cart.length}
            </Link>
          </IconButton>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </nav>

      {/* Second fixed navbar */}
      <nav className="fixed top-16 left-0 right-0 bg-white p-4 flex items-center justify-center border-b z-10">
        <Link
          to="/buy-medicines"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg mx-6"
        >
          Buy Medicines
        </Link>
        <Link
          to="/doctors"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg mx-6"
        >
          Find Doctors
        </Link>
        <Link
          to="/lab-tests"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg mx-6"
        >
          Lab Tests
        </Link>
        <Link
          to="/ambulance"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg mx-6"
        >
          Ambulance
        </Link>
      </nav>

      {/* Third fixed navbar */}
      <nav className="fixed top-32 left-0 right-0 bg-blue-600 p-4 flex items-center justify-center z-10">
        <Link
          to="/arogyaproducts"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Arogya Products
        </Link>
        <Link
          to="/babycare"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Baby Care
        </Link>
        <Link
          to="/nutritional-drinks"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Nutritional Drinks & Supplements
        </Link>
        <Link
          to="/women-care"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Women Care
        </Link>
        <Link
          to="/personal-care"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Personal Care
        </Link>
        <Link
          to="/ayurveda"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Ayurveda
        </Link>
        <Link
          to="/health-devices"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Health Devices
        </Link>
        <Link
          to="/home-essentials"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Home Essentials
        </Link>
        <Link
          to="/health-condition"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Health Condition
        </Link>
      </nav>

      {/* Product Grid */}
      <div className="mt-48 p-4">
        <h2 className="text-2xl font-bold mb-4">Arogya Products</h2>
        <div className="grid grid-cols-4 gap-4">
          {products &&
            products.map((product) => (
              <div key={product.id} className="text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto"
                />
                <p className="mt-2">{product.name}</p>
                <p className="font-bold">Rs.{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ApolloProductsPage;
