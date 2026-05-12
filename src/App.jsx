import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import ProductList from "./components/productlist";
import CartItem from "./components/cartitem";
import AboutUs from "./components/aboutus";
import "./App.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="overlay">
        <h1 className="main-title">Paradise Nursery 🌿</h1>

        <p className="tagline">
          Bringing Nature Closer To Your Home
        </p>

        <button
          className="start-btn"
          onClick={() => navigate("/plants")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
