'use client'
import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

interface StoreMapProps {
  location: string;
}

const StoreMap = ({ location }: StoreMapProps) => {
  return (
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(location)}&key={YOUR_API_KEY}`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

const ProductPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("supermarket");
  
  const locations = [
    { name: "SuperMart", address: "City Center" },
    { name: "QuickShop", address: "Main Road" },
    { name: "FreshMart", address: "Market Street" },
    { name: "GroceryWorld", address: "Downtown" },
    { name: "Foodie's Haven", address: "North Avenue" }
  ];

  const handleLocationClick = (location: { name: any; address: any; }) => {
    setSelectedLocation(`${location.name} ${location.address}`);
  };

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0">
        <StoreMap location={selectedLocation} />
      </div>

      <div className="absolute md:top-5 right-5 bottom-5 bg-white p-4 shadow-lg rounded-xl lg:w-60 sm:w-48 w-40 text-black ">
        <div className="mb-3 flex justify-between">
          <input
            type="text"
            defaultValue={"Chips"}
            className="w-4/5 sm:p-2 p-1 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
          <div className="h-full w-1/5 rounded-full flex justify-center items-center mt-2">
            <IoSearch className="size-6 text-blue-500" />
          </div>
        </div>
        <h1 className="text-2xl mb-2 font-semibold">Orange Lays</h1>
        <h2 className="mb-3">Price: Rs.10.0</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EE23AmyF9fr1rTZCmec4JghIJMm7GPJ1dQ&s"
          alt="Lays Chips"
          className="w-full rounded"
        />
      </div>

      <div className="absolute top-2 left-2 bg-white p-4 shadow-lg rounded-xl lg:w-80 w-60 text-black">
        <h2 className="sm:text-2xl text-base mb-3">Available at:</h2>
        <div className="sm:space-y-4 space-y-1">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="p-3 bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => handleLocationClick(location)}
            >
              <h3 className="text-lg font-semibold">{location.name}</h3>
              <p>{location.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;