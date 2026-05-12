import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <h1>Paradise Nursery 🌿</h1>

        <p>
          Discover beautiful indoor plants, succulents,
          and flowering plants for your home.
        </p>

        <Link to="/plants">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}
