import { useSelector, useDispatch } from "react-redux";

import {
  addItem,
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

export default function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  // Grand Total
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Shopping Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <h2>Cart is Empty</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "20px",
                borderRadius: "10px",
                background: "#fff",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width="150"
                height="150"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <div>
                <h2>{item.name}</h2>

                <p>Price: ${item.price}</p>

                <p>
                  Total: $
                  {item.price * item.quantity}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        })
                      )
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => dispatch(addItem(item))}
                  >
                    +
                  </button>
                </div>

                <br />

                <button
                  onClick={() =>
                    dispatch(removeItem(item.id))
                  }
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>
            Grand Total: ${totalAmount}
          </h2>
        </>
      )}
    </div>
  );
}
