import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartslice";

export default function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} />

              <div>
                <h3>{item.name}</h3>

                <p>Price: ${item.price}</p>

                <p>Quantity: {item.quantity}</p>
              </div>

              <div className="cart-buttons">
                <button
                  onClick={() =>
                    dispatch(incrementQuantity(item.id))
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    dispatch(decrementQuantity(item.id))
                  }
                >
                  -
                </button>

                <button
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ${total}</h2>
        </>
      )}
    </div>
  );
}