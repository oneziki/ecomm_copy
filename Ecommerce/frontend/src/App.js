// Resourses
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCategories from "./pages/all-catergories";
import Home from "./pages/home";
import Entertainment from './pages/entertainment';
import Cart from './pages/cart';
import Login from './pages/login';
import Netflix from './pages/netflix';
import Orders from './pages/orders';
import SignUp from './pages/sign-up';
import Data2 from "./Data2";


function App() {
  const {products} = Data2;
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="all-categories" exact element={<AllCategories />} />
        <Route path="cart" exact element={<Cart />} />
        <Route path="entertainemnt" exact element={<Entertainment />} />
        <Route path="login" exact element={<Login />} />
        <Route path="netflix" exact element={<Netflix products={products}/>} />
        <Route path="orders" exact element={<Orders />} />
        <Route path="sign-up" exact element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
