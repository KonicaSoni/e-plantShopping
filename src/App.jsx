import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ProductList from "./components/productlist";
import CartItem from "./components/cartitem";
import AboutUs from "./components/aboutus";
import Home from "./components/home";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
