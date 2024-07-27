// src/pages/CartPage.jsx
import React, { useState, useEffect } from "react";

const CartPage = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    if (cart) {
      const calculateTotal = () => {
        const totalAmount = cart.reduce(
          (sum, item) => sum + item.price * (item.quantity || 1),
          0
        );
        setTotal(totalAmount);
      };

      calculateTotal();
    }
  }, [cart]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitAddress = () => {
    // Add code to save address in the database here
    console.log("Address submitted:", address);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded mr-4"
                  />
                  <div>
                    <p className="font-bold">{item.desc}</p>
                    <p className="text-gray-600">Price: ₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity || 1}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                    className="w-16 border rounded p-1 text-center mr-4"
                  />
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-end mt-4">
              <p className="text-xl font-bold">Total: ₹{total.toFixed(2)}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Address Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={address.name}
            onChange={handleAddressChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={address.street}
            onChange={handleAddressChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleAddressChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={address.state}
            onChange={handleAddressChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={address.pincode}
            onChange={handleAddressChange}
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={handleSubmitAddress}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default CartPage;
