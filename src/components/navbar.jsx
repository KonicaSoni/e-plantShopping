import { useSelector } from "react-redux";

export default function Navbar({ setPage }) {
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <h2>Paradise Nursery 🌿</h2>

      <div>
        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("plants")}>
          Products
        </button>

        <button onClick={() => setPage("cart")}>
          Cart 🛒 ({totalQuantity})
        </button>
      </div>
    </nav>
  );
}