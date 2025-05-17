import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [fragrances, setFragrances] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFrag = async() => {
      try{
        const response = await axios.get("http://localhost:5000/products/");
        setFragrances(response.data.items);
        setIsPending(false);
      }catch(err){
        setError("no products!  "+ err);
        setIsPending(false);
      }
    };

    fetchFrag();
  },[]);

  const filteredFragrances = fragrances.filter((frag) => frag.bestSellers);


  return ( 
    <div className="py-16 px-10 sm:px-0 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
      {isPending && <h5>Loading Products...</h5>}
      {error && <h5 className="text-red-500">{error}</h5>}
      {!isPending && !error && filteredFragrances.map((frag) => (
            <div key={frag._id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between">
              <div>
              <img
                src={frag.image}
                alt={frag.name}
                className="w-full h-40 object-contain"
              />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-md sm:text-lg font-semibold">{frag.name}</h3>
                <p className="text-sm sm:text-md text-gray-600">{frag.house}</p>
                <p className="text-sm sm:text-md text-orange-600 font-bold mt-2">LKR {frag.price.toLocaleString()}</p>
              </div>
              <div className="mt-auto">
                <Link to={`/collection/${frag._id}`}>
                  <button className="w-full text-sm sm:text-md bg-[#1F3357] text-white py-2 hover:bg-[#152B4F]">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
    );
}
 
export default BestSellers;