import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const API = process.env.REACT_APP_API_BASE_URL;

const ProductDetails = () => {
  const { id } = useParams();
  const { data: frag, error, isPending} = useFetch(`${API}/products/${id}`);
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      addToCart(frag);
      setLoading(false);
      setMessage(`${frag.name} has been added to your cart!`);
      setTimeout(() => setMessage(""), 2000);
    }, 500);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      {isPending && <div className="text-blue-500">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}

      {frag && (
        <div className="max-w-xl mx-10 sm:mx-20 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex justify-center bg-white p-4">
            <img
              src={frag.image}
              alt={frag.name}
              className="h-80 object-contain"
            />
          </div>

          <div className="p-6">
            <h2 className="text-md sm:text-lg font-semibold">{frag.name}</h2>
            <h4 className="text-sm sm:text-md text-black-600 mt-2">{frag.house}</h4>
            <p className="text-xs sm:text-sm text-gray-700 mt-4">{frag.description}</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-4">Size: {frag.size}</p>
            <p className="text-xs sm:text-sm text-gray-600">Released Year: {frag.releasedYear || "N/A"}</p>
            <p className="text-red-600 font-bold text-sm sm:text-md mt-6">
              Price: LKR {frag.price.toLocaleString()}
            </p>

            <button
              onClick={handleAddToCart}
              className={`w-full py-2 text-xs sm:text-sm rounded-md mt-6 transition duration-300 ${
                loading
                  ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                  : "bg-[#1F2937] text-white hover:bg-[#374151]"
              }`}
              disabled={loading}
            >
              {loading ? "Adding to Cart..." : "Add to Cart"}
            </button>

            {message && (
              <div className="mt-4 text-green-600 text-center text-xs sm:text-sm">
                {message}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
