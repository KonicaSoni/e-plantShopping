import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1545241047-6083a3684587?w=400",
  },
  {
    id: 2,
    name: "Money Plant",
    price: 12,
    category: "Indoor",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400",
  },

  // Succulents
  {
    id: 3,
    name: "Aloe Vera",
    price: 10,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400",
  },
  {
    id: 4,
    name: "Cactus",
    price: 14,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?w=400",
  },

  // Flowering
  {
    id: 5,
    name: "Rose Plant",
    price: 20,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?w=400",
  },
  {
    id: 6,
    name: "Orchid",
    price: 25,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400",
  },
];

export default function ProductList() {
  const dispatch = useDispatch();

  // Group by category
  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div className="product-page">
      <h1 className="title">Our Plants 🌿</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2 className="category-title">{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    onClick={() => dispatch(addItem(plant))}
                    className="cart-btn"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
