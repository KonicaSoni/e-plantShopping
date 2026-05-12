import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartslice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400",
  },
  {
    id: 2,
    name: "Money Plant",
    price: 12,
    category: "Indoor",
    img: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 10,
    category: "Indoor",
    img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 18,
    category: "Succulents",
    img: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400",
  },
  {
    id: 5,
    name: "Cactus",
    price: 20,
    category: "Succulents",
    img: "https://images.unsplash.com/photo-1470167290877-7d5d3446de4c?w=400",
  },
  {
    id: 6,
    name: "Jade Plant",
    price: 14,
    category: "Succulents",
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400",
  },
  {
    id: 7,
    name: "Rose",
    price: 17,
    category: "Flowering",
    img: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=400",
  },
  {
    id: 8,
    name: "Tulip",
    price: 19,
    category: "Flowering",
    img: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400",
  },
  {
    id: 9,
    name: "Sunflower",
    price: 15,
    category: "Flowering",
    img: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=400",
  },
];

export default function ProductList() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.name
      .toLowerCase()
}
