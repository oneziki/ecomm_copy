import "./index.scss";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import ItemDetail from "./pages/itemDetail";
import TestCart from "./pages/testCart";

const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...ProductExist, quantity: ProductExist.quantity + 1}: item)
      );
      }
      else{
        setCartItems([...cartItems, { ...product, quantity: 1}]);
      }
    };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="/itemDetail/:productCode/:value/:vendor/:img" element={<ItemDetail handleAddProduct={handleAddProduct} />} />
        <Route path="/testCart" element={<TestCart cartItems={cartItems} handleAddProduct={handleAddProduct}/>} />
      </Routes>
    </Router>
  );
}

export default App;
