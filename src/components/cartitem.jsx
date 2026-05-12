import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartslice";

export default function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2 className="empty">Your Cart is Empty 🛒</h2>;
  }

  return (
    <div className="container">
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <div className="cart-card" key={item.id}>
          <img src={item.img} alt={item.name} />

          <div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>

            <div className="quantity">
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                +
              </button>
            </div>

            <button
              className="remove"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2>Total: ${total}</h2>
    </div>
  );
}
