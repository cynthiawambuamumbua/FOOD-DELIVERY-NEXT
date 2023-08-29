import React from "react";

const Navbar = () => {
  return (
    <div className="items-center justify-between  bg-white-800 text-black px-5 py-3  lg:flex lg:text-xl">
      <a className="text-300 font-bold hover:bg-red-500">Foodle</a>
        <a className="underline text-black-300 hover:text-red-500">Home</a>
        <a className="text-black-300 hover:text-red-500">Offer</a>
        <a className="text-black-300 hover:text-red-500">Service</a>
        <a className="text-black-300 hover:text-red-500">Menu</a>
        <a className="text-black-300 hover:text-red-500">About Us</a>
        <button className="text-red-600 hover:text-red-500">Login</button>
        <button className="border border-red-600 text-red-600 hover:bg-red-500 hover:text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
  );
};

export default Navbar;
