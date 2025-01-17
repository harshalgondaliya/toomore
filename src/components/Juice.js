import React from "react";
import "./Juice.css";

// Import images directly
import grapeImage from "../assets/images/products/grapes.jpg";
import lycheeImage from "../assets/images/products/lychee.jpg";
import mangoImage from "../assets/images/products/mango.jpg";
import pineappleImage from "../assets/images/products/pineapple.jpg";
import strawberryImage from "../assets/images/products/strawberry.jpg";

// Define an array of juice products
const juiceProducts = [
  {
    image: grapeImage,
    name: "Grape Juice",
    description: "A refreshing grape juice packed with antioxidants.",
    sizes: "Cans: 180 ml, 300 ml | Bottles: 250 ml, 500 ml, 1 L",
    nutrition: {
      energy: "60kcal",
      carbohydrates: "15g",
      sugars: "14g",
      fat: "0g",
      protein: "0g",
      sodium: "10mg",
    },
    ingredients: "Grape Juice, Sugar, Water, Natural Flavors",
  },
  {
    image: lycheeImage,
    name: "Lychee Juice",
    description: "Exotic lychee juice with a sweet and floral flavor.",
    sizes: "Cans: 200 ml, 330 ml | Bottles: 300 ml, 750 ml, 1.5 L",
    nutrition: {
      energy: "65kcal",
      carbohydrates: "16g",
      sugars: "15g",
      fat: "0g",
      protein: "0g",
      sodium: "8mg",
    },
    ingredients: "Lychee Juice, Sugar, Water, Natural Flavors",
  },
  {
    image: mangoImage,
    name: "Mango Juice",
    description: "Tropical mango juice with zero added sugar.",
    sizes: "Cans: 250 ml, 500 ml | Bottles: 400 ml, 1 L, 2 L",
    nutrition: {
      energy: "70kcal",
      carbohydrates: "17g",
      sugars: "16g",
      fat: "0g",
      protein: "0g",
      sodium: "12mg",
    },
    ingredients: "Mango Juice, Water, Natural Flavors",
  },
  {
    image: pineappleImage,
    name: "Pineapple Juice",
    description: "Tangy pineapple juice rich in vitamin C and bromelain.",
    sizes: "Cans: 200 ml, 330 ml | Bottles: 300 ml, 1 L",
    nutrition: {
      energy: "50kcal",
      carbohydrates: "13g",
      sugars: "12g",
      fat: "0g",
      protein: "0g",
      sodium: "5mg",
    },
    ingredients: "Pineapple Juice, Sugar, Water, Natural Flavors",
  },
  {
    image: strawberryImage,
    name: "Strawberry Juice",
    description:
      "Delicious strawberry juice, naturally sweet and full of vitamin C.",
    sizes: "Cans: 180 ml, 330 ml | Bottles: 250 ml, 1.5 L",
    nutrition: {
      energy: "55kcal",
      carbohydrates: "14g",
      sugars: "13g",
      fat: "0g",
      protein: "0g",
      sodium: "7mg",
    },
    ingredients: "Strawberry Juice, Sugar, Water, Natural Flavors",
  },
];

const Juice = () => {
  return (
    <div className="juice-content">
      <div className="juice-container">
        {juiceProducts.map((product, index) => (
          <div key={index} className="juice-card">
            <img
              src={product.image}
              alt={product.name}
              className="juice-image"
            />
            <div className="juice-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>
                <strong>Sizes:</strong> {product.sizes}
              </p>
              <div className="nutrition-info">
                <h3>Nutritional Information (per 100ml)</h3>
                <p>Energy: {product.nutrition.energy}</p>
                <p>Carbohydrates: {product.nutrition.carbohydrates}</p>
                <p>Sugars: {product.nutrition.sugars}</p>
                <p>Fat: {product.nutrition.fat}</p>
                <p>Protein: {product.nutrition.protein}</p>
                <p>Sodium: {product.nutrition.sodium}</p>
                <h4>Ingredients</h4>
                <p>{product.ingredients}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Juice;
