import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BicycleList from "./components/BicycleList";
import BicycleDetail from "./components/BicycleDetail";
import CartList from "./components/CartList";
import Categories from "./components/Categories";
import CreateBicycle from "./components/CreateBicycle";
import DeleteBicycle from "./components/DeleteBicycle";
import "./styles/main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["Mountain", "Road", "Hybrid", "Electric"];

  const addToCart = (bicycle) => {
    setCart((prevCart) => {
      const alreadyMawjoud = prevCart.find((item) => item.id === bicycle.id);
      if (alreadyMawjoud) {
        return prevCart;
      }
      return [...prevCart, bicycle];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <div className="App">
        <Header cart={cart} />
        <div className="main-content">
          <Categories
            categories={categories}
            onSelectCategory={handleSelectCategory}
          />

          <Routes>
            <Route
              path="/"
              element={
                <BicycleList
                  addToCart={addToCart}
                  selectedCategory={selectedCategory}
                />
              }
            />
            <Route
              path="/cart"
              element={<CartList cart={cart} removeFromCart={removeFromCart} />}
            />
            <Route
              path="/bicycle/:id"
              element={<BicycleDetail addToCart={addToCart} />}
            />
            <Route path="/create-bicycle" element={<CreateBicycle />} />
            <Route path="/delete-bicycle" element={<DeleteBicycle />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const Header = ({ cart }) => {
  return (
    <header>
      <h1>
        Cycle LAB<i className="bi bi-activity"></i>
      </h1>
      <nav>
        <Link to="/">
          <i className="bi bi-house-door-fill"></i> Home
        </Link>
        <Link to="/cart">
          <i className="bi bi-cart-fill"></i> Cart ({cart.length})
        </Link>
        <Link to="/create-bicycle">
          <i class="bi bi-patch-plus">Post Bicycle</i>
        </Link>
        <Link to="/delete-bicycle">
          <i className="bi bi-trash-fill">Delete Bicycle</i>
        </Link>
      </nav>
    </header>
  );
};

export default App;
