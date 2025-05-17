import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 m-0">
      <div className="container mx-auto px-10 sm:px-5 md:px-5 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-md font-semibold text-white">Perfume Store</h2>
          <p className="text-sm mt-4">
            Explore the finest collection of luxury perfumes. Find your signature scent and embrace the art of fragrance.
          </p>
        </div>
        <div>
          <h2 className="text-md font-semibold text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm ">
            <li><Link to="/" className="hover:text-white  ">Home</Link></li>
            <li><Link to="/collection" className="hover:text-white  ">Collection</Link></li>
            <li><Link to="/about" className="hover:text-white  ">About</Link></li>
            <li><Link to="/contact" className="hover:text-white  ">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-md font-semibold text-white">Get In Touch</h2>
          <ul className="mt-4 space-y-2 text-sm ">
            <li>Email: <a href="mailto:info@perfumestore.com" className="hover:text-white">info@perfumestore.com</a></li>
            <li>Mobile: <a href="tel:+94234567890" className="hover:text-white">+94 (234) 567-890</a></li>
            <li>Address: 123 Fragrance Lane, Scent City, SC 56789</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm ">
        <p>&copy; 2024 Perfume Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
