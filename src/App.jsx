import Cart from "./Components/Cart";
import DashBoard from "./Components/DashBoard";
import Navigation from "./Components/Navigation";
import Product from "./Components/Product";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/Dashboard" element={<DashBoard />}></Route>
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
