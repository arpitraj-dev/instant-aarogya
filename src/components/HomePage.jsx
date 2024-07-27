import React, { useState, useEffect } from "react";
import { Menu, MenuItem, TextField, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import logo from "../assets/apollo-logo.png";
import image1 from "../images/slideshow1.webp";
import image2 from "../images/slideshow2.webp";
import image3 from "../images/slideshow3.webp";
import image4 from "../images/slideshow4.webp";
import image5 from "../images/slideshow5.webp";
import sc1 from "../images/SC1.webp";
import sc2 from "../images/SC2.webp";
import sc3 from "../images/SC3.webp";
import sc4 from "../images/SC4.webp";
import sc5 from "../images/SC5.webp";

import sbc1 from "../images/sbc1.webp";
import sbc2 from "../images/sbc2.webp";
import sbc3 from "../images/sbc3.webp";
import sbc4 from "../images/sbc4.webp";
import sbc5 from "../images/sbc5.webp";

import sbc7 from "../images/sbc7.webp";
import sbc8 from "../images/sbc8.webp";
import sbc9 from "../images/sbc9.webp";
import sbc10 from "../images/sbc10.webp";
import sbc11 from "../images/sbc11.webp";

import ad1 from "../images/ad1.webp"; // Importing ad1 image

const products = [
  { img: sc1, desc: "2Baconil 2mg Nicotine Icy Mint", price: 65.1 },
  { img: sc2, desc: "2Baconil 2mg Chewing Gum", price: 65.1 },
  { img: sc3, desc: "2Baconil TTS20 14mg/24h", price: 800 },
  { img: sc4, desc: "2Baconil TTS10 7mg/24h", price: 716 },
  { img: sc5, desc: "2Baconil TTS30 21mg Patches", price: 1008 },
];

const HomePage = ({ cart, setCart }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [pincode, setPincode] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddressClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAddressClose = () => {
    setAnchorEl(null);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const navigate = (direction) => {
    if (direction === "prev") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : images.length - 1
      );
    } else if (direction === "next") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.desc} added to cart`);
  };

  const images = [image1, image2, image3, image4, image5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

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
          <Link to="/cart" className="relative">
            <ShoppingCartIcon />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          <button>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
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

      {/* Content box below fixed navbars */}
      <div className="mt-48 bg-gray-100 w-screen">
        <div className="bg-blue-100 rounded-lg shadow-lg p-6 text-center w-screen">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Buy Medicines and Essentials
          </h2>
          <div className="flex items-center justify-center">
            <div className="relative">
              <TextField
                label="Search"
                variant="outlined"
                value={searchText}
                onChange={handleSearchChange}
                className="w-64"
              />
              <IconButton
                type="button"
                aria-label="search"
                className="absolute right-2 top-2"
              >
                <SearchIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <button
          onClick={() => navigate("prev")}
          style={{
            background: "none",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        >
          &#8249;
        </button>
        <Link to="/newpage">
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
            style={{
              maxWidth: "100%",
              maxHeight: "400px",
              margin: "0 1rem",
            }}
          />
        </Link>
        <button
          onClick={() => navigate("next")}
          style={{
            background: "none",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        >
          &#8250;
        </button>
      </div>
      <div style={{ marginTop: "1rem", padding: "1rem" }}>
        <strong style={{ fontSize: "2rem", display: "block" }}>
          Smoking Cessation with 2baconil
        </strong>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                width: "15%",
                margin: "1rem",
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <img
                src={product.img}
                alt={`SC${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
              <p style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                {product.desc}
              </p>
              <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                {product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "2rem", padding: "1rem" }}>
        <strong
          style={{ fontSize: "2rem", display: "block", marginBottom: "1rem" }}
        >
          Shop by Category
        </strong>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {[sbc1, sbc2, sbc3, sbc4, sbc5].map((image, index) => (
            <div
              key={index}
              style={{
                width: "15%",
                margin: "1rem",
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <img
                src={image}
                alt={`SBC${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
              <p style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                Category {index + 1}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: "1rem",
          }}
        >
          {[sbc7, sbc8, sbc9, sbc10, sbc11].map((image, index) => (
            <div
              key={index}
              style={{
                width: "15%",
                margin: "1rem",
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <img
                src={image}
                alt={`SBC${index + 7}`}
                style={{ width: "100%", height: "auto" }}
              />
              <p style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                Category {index + 7}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Advertisement image */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <img
          src={ad1}
          alt="Advertisement"
          style={{
            maxWidth: "120%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
