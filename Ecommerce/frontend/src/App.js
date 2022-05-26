import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/products";
import ItemDetail from "./pages/itemDetail";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Navigationbar from "./components/navigationbar/navigationbar";
import Checkout from "./pages/checkout";

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

export default function App() {

  const token = "ef18f012280c212b9f17ab262adc5ca45925c1467fc64eb32f0071b1e00c43e21fb04eabbbe94cc19151aefefd1708fc8dd1cd127429b60f2592c7a8b7466179782e5e78ac15ba217ff1b67fcab5c053867942dc616ac952e7d7e0fbd2e8e867d6d42a0cb75e6c37e882e87288fff1f5afe2bc0442a601043b0d1b4e0a1305df";
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetch("https://warm-ravine-36464.herokuapp.com/api/products",
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
    )
      .then((response) => response.json())
      .then(({ data }) => {
        const allData = data.map(({ id, attributes }) => ({
          id,
          ...attributes,
        }));
        setProducts(allData);
      });
  }, []);
  

  const handleClick = (item) => {
    if (cart.some((cartItem) => cartItem.ProductCode === item.ProductCode)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.ProductCode === item.ProductCode
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        )
      );
      return;
    }

    setCart((cart) => [
      ...cart,
      { ...item, quantity: 1 }, // <-- initial quantity 1
    ]);
  };

  const handleChange = (ProductCode, d) => {
    setCart((cart) =>
      cart.flatMap((cartItem) =>
        cartItem.ProductCode === ProductCode
          ? cartItem.quantity + d < 1
            ? [] // <-- remove item if quantity will be less than 1
            : [
                {
                  ...cartItem,
                  quantity: cartItem.quantity + d,
                },
              ]
          : [cartItem]
      )
    );
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home products={products} countCartItem={cart.length} />} />
          {/* <Route path="all-categories" element={<AllCategories />} />
          <Route path="entertainment" element={<Entertainment />} />
          <Route path="login" element={<Login />} />
          <Route path="discover" element={<Discover />} />
          <Route path="netflix" element={<Netflix />} />
          <Route path="orders" element={<Orders />} />
          <Route path="sign-up" element={<SignUp />} /> */}
          <Route
            path="products"
            element={
              <Products products={products} countCartItem={cart.length} />
            }
          />
          <Route path="/Navigationbar" element={<Navigationbar />} />
          <Route path="/Checkout/" element={<Checkout cart={cart}
                setCart={setCart}
                handleChange={handleChange}
                countCartItem={cart.length}/>} />
          <Route
            path="/itemDetail/:ProductCode/:FaceValue/:Vendor"
            element={
              <ItemDetail
                products={products}
                handleClick={handleClick}
                countCartItem={cart.length}
              />
            }
          />
          <Route
            path="/Cart/"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                handleChange={handleChange}
                countCartItem={cart.length}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
