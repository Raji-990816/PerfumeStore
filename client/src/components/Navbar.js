import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 m-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <h1>Perfume Store</h1>
        </div>
        <div className="space-x-6 hidden lg:flex">
          <Link to="/" className="navlink">Home</Link>
          <Link to="/collection" className="navlink">Collection</Link>
          <Link to="/about" className="navlink">About</Link>
          <Link to="/contact" className="navlink">Contact</Link>
        </div>
        <div className="space-x-6 hidden lg:flex">
          <Link to="/login" className="navlink">Login</Link>
          <Link to="/register" className="navlink">Register</Link>
          <Link to="/cart" className="navlink">Cart</Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button className="text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
