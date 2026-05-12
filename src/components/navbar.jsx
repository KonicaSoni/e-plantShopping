import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <h2>Paradise Nursery 🌿</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart 🛒 ({totalQuantity})</Link>
      </div>
    </nav>
  );
}
