import "./index.scss";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
  generatePath,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import ItemDetail from "./pages/itemDetail";
import Cart from "./pages/cart";
import Products from "./pages/products";
import Home from "./pages/home";
import AllProducts from "./components/all-products/AllProducts";

const data = Array.from({ length: 59 }, () => ({
  productCode: uuidV4(),
  value: `product ${Math.floor(Math.random() * 1000)}`,
  vendor: (Math.floor(Math.random() * 3) + 100).toString(),
  price: Math.floor(Math.random() * 10000) / 100,
}));

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  const handleClick = (item) => {
    if (cart.some((cartItem) => cartItem.productCode === item.productCode)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.productCode === item.productCode
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

  const handleChange = (productCode, d) => {
    setCart((cart) =>
      cart.flatMap((cartItem) =>
        cartItem.productCode === productCode
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
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul> */}
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          {/* <Route path="all-categories" element={<AllCategories />} />
          <Route path="entertainment" element={<Entertainment />} />
          <Route path="login" element={<Login />} />
          <Route path="discover" element={<Discover />} />
          <Route path="netflix" element={<Netflix />} />
          <Route path="orders" element={<Orders />} />
          <Route path="sign-up" element={<SignUp />} /> */}
          <Route path="products" element={<Products products={products} />} />
          <Route path="allProducts" element={<AllProducts products={products} />} />
          <Route
            path="/itemDetail/:productCode/:value/:vendor"
            element={
              <ItemDetail products={products} handleClick={handleClick} />
            }
          />
          <Route
            path="/Cart/"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
