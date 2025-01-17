import React from "react";
import SearchBox from "./SearchBox"; // Adjust the path if necessary

// Example product list
const products = [
  { id: 1, name: "Apple Juice", image: "/path/to/apple-juice.jpg" },
  { id: 2, name: "Orange Juice", image: "/path/to/orange-juice.jpg" },
  { id: 3, name: "Grape Juice", image: "/path/to/grape-juice.jpg" },
  { id: 4, name: "Pineapple Juice", image: "/path/to/pineapple-juice.jpg" },
  { id: 5, name: "Mango Juice", image: "/path/to/mango-juice.jpg" },
];

const SearchContainer = () => {
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <SearchBox products={products} />
    </div>
  );
};

export default SearchContainer;