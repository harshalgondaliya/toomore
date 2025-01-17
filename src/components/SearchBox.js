import React, { useState } from "react";

const SearchBox = ({ products }) => {
  const [query, setQuery] = useState(""); // State to store user input
  const [filteredProducts, setFilteredProducts] = useState(products); // Filtered results

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="search-box-container">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />

      {/* Search Results */}
      {query && (
        <div className="search-results">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="search-result-item">
                <img src={product.image} alt={product.name} className="product-image" />
                <span>{product.name}</span>
              </div>
            ))
          ) : (
            <p className="no-results">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
