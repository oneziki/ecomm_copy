import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/products";
import ItemDetail from "./pages/itemDetail";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Navigationbar from "./components/navigationbar/navigationbar";
import Checkout from "./pages/checkout";

const cartFromLocalStorage = JSON.stringify(localStorage.getItem('cart') || '[]');

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetch("http://localhost:1337/api/rows/")
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
                amount: cartItem.amount + 1,
              }
            : cartItem
        )
      );
      return;
    }

    setCart((cart) => [
      ...cart,
      { ...item, amount: 1 }, // <-- initial amount 1
    ]);
  };

  const handleChange = (ProductCode, d) => {
    setCart((cart) =>
      cart.flatMap((cartItem) =>
        cartItem.ProductCode === ProductCode
          ? cartItem.amount + d < 1
            ? [] // <-- remove item if amount will be less than 1
            : [
                {
                  ...cartItem,
                  amount: cartItem.amount + d,
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
