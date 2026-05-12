// 


import { useState } from "react";
import Navbar from "./components/navbar";
import ProductList from "./components/productlist";
import CartItem from "./components/cartitem";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <div className="home">
          <h1>Paradise Nursery 🌿</h1>

          <button onClick={() => setPage("plants")}>
            Get Started
          </button>
        </div>
      )}

      {page === "plants" && (
        <ProductList />
      )}

      {page === "cart" && (
        <CartItem />
      )}
    </>
  );
}

export default App;