import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartslice";

const plants = [
  // Indoor Plants
  {
  id: 1,
  name: "Snake Plant",
  price: 15,
  category: "Indoor",
  img: "https://plus.unsplash.com/premium_photo-1673969608357-9281f7a6ddb4?w=400",
},
  {
    id: 2,
    name: "Money Plant",
    price: 12,
    category: "Indoor",
    img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
  id: 3,
  name: "Spider Plant",
  price: 10,
  category: "Indoor",
  img: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=400",
},
  {
    id: 4,
    name: "Areca Palm",
    price: 20,
    category: "Indoor",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },

  // Succulents
  {
    id: 5,
    name: "Aloe Vera",
    price: 14,
    category: "Succulents",
    img: "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
  },
  {
    id: 6,
    name: "Cactus",
    price: 9,
    category: "Succulents",
    img: "https://images.unsplash.com/photo-1459156212016-c812468e2115",
  },
  {
  id: 7,
  name: "Jade Plant",
  price: 13,
  category: "Succulents",
  img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400",
},
  {
    id: 8,
    name: "Echeveria",
    price: 11,
    category: "Succulents",
    img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
  },

  // Flowering Plants
  {
    id: 9,
    name: "Rose",
    price: 18,
    category: "Flowering",
    img: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55",
  },
  {
    id: 10,
    name: "Tulip",
    price: 17,
    category: "Flowering",
    img: "https://images.unsplash.com/photo-1520763185298-1b434c919102",
  },
  {
    id: 11,
    name: "Sunflower",
    price: 16,
    category: "Flowering",
    img: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51",
  },
  {
    id: 12,
    name: "Orchid",
    price: 22,
    category: "Flowering",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
];
export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Our Plants 🌿</h2>

      <div className="grid">
  {plants.map((plant) => (
    <div className="card" key={plant.id}>
<img
  src={plant.img}
  alt={plant.name}
  onError={(e) => {
    e.target.src =
      "https://via.placeholder.com/300x200?text=Plant";
  }}
/>
      <h4>{plant.name}</h4>

      <p>${plant.price}</p>

      <button onClick={() => dispatch(addToCart(plant))}>
        Add to Cart
      </button>
    </div>
  ))}
</div>    </div>
  );
}