import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartslice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5b7c?w=400",
  },
  {
    id: 2,
    name: "Money Plant",
    price: 12,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 10,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400",
  },
  {
    id: 4,
    name: "Areca Palm",
    price: 18,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400",
  },

  // Succulent Plants
  {
    id: 5,
    name: "Aloe Vera",
    price: 8,
    category: "Succulent",
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400",
  },
  {
    id: 6,
    name: "Cactus",
    price: 9,
    category: "Succulent",
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=400",
  },
  {
    id: 7,
    name: "Jade Plant",
    price: 11,
    category: "Succulent",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
  },
  {
    id: 8,
    name: "Echeveria",
    price: 13,
    category: "Succulent",
    image:
      "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=400",
  },

  // Flowering Plants
  {
    id: 9,
    name: "Rose",
    price: 20,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=400",
  },
  {
    id: 10,
    name: "Sunflower",
    price: 17,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=400",
  },
  {
    id: 11,
    name: "Orchid",
    price: 25,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=400",
  },
  {
    id: 12,
    name: "Tulip",
    price: 16,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400",
  },
];

export default function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Check item already added or not
  const isAdded = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  // Plant Categories
  const categories = ["Indoor", "Succulent", "Flowering"];

  return (
    <div className="product-container">
      <h1 className="product-title">Our Plants 🌿</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2 className="category-title">
            {category} Plants
          </h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="product-card" key={plant.id}>
                  {/* Product Image */}
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />

                  {/* Product Details */}
                  <h3>{plant.name}</h3>

                  <p className="product-price">
                    Price: ${plant.price}
                  </p>

                  {/* Add To Cart Button */}
                  <button
                    className="add-cart-btn"
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {isAdded(plant.id)
                      ? "Add More"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
