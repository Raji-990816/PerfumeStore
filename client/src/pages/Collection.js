import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "../assets/products";

const Collection = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [frag, setFrag] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFrag = async() => {
      try{
        const response = await axios.get("http://localhost:5000/products/");
        setFrag(response.data.items);
        setIsPending(false);
      }catch(err){
        setError("no products!  "+ err);
        setIsPending(false);
      }
    };

    fetchFrag();
  },[]);

  const filteredFragrances = frag.filter(frag => {
    return (
      (selectedSize ? frag.size === selectedSize : true) &&
      (selectedGender ? frag.gender === selectedGender : true) &&
      (selectedBrand ? frag.house === selectedBrand : true)
    );
  });

  return (
    <div className="bg-gray-100">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${images.img5})` }}
      >
        <div className="page-headline">
          Fragrance Collection
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-8">
        <div className= "sm:flex sm:justify-between sm:space-x-6">
          <div className="w-1/4 jus sm:w-1/3">
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full text-xs sm:text-sm mt-2 border p-2 rounded"
            >
              <option value="">All Sizes</option>
              {frag
                .map(frag => frag.size)
                .filter((value, index, self) => self.indexOf(value) === index) 
                .map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
            </select>
          </div>

          <div className="w-1/4 sm:w-1/3">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full text-xs sm:text-sm mt-2 border p-2 rounded"
            >
              <option value="">All Genders</option>
              {frag
                .map(frag => frag.gender)
                .filter((value, index, self) => self.indexOf(value) === index) 
                .map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
            </select>
          </div>

          <div className="w-1/4 jus sm:w-1/3">
            <label className="block text-sm font-medium text-gray-700">Brand</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full text-xs sm:text-sm mt-2 border p-2 rounded"
            >
              <option value="">All Brands</option>
              {frag
                .map(frag => frag.house)
                .filter((value, index, self) => self.indexOf(value) === index) 
                .map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 sm:py-16 sm:px-4 md:px-6 md:py-16 lg:px-8 lg:py-24 xl:py-32 xl:px-32">
        {isPending && <h5>Loading Products...</h5>}
        {error && <h5 className="text-red-500">{error}</h5>}
        {!isPending && !error && filteredFragrances.map((frag) => (
          <div
            key={frag._id}
            className="bg-white mx-10 sm:mx-0  shadow-md rounded-lg overflow-hidden flex flex-col justify-between"
          >
            <div>
              <img
                src={frag.image}
                alt={frag.name}
                className="w-full h-64 object-contain sm:h-48 md:h-56 lg:h-64"
              />
            </div>

            <div className="p-4 flex-grow">
              <h3 className="text-sm sm:text-md font-semibold">{frag.name}</h3>
              <p className="text-xs sm:text-sm text-gray-700">{frag.house}</p>
              <p className="text-sm sm:text-md text-red-600 font-bold mt-2">
                LKR {frag.price.toLocaleString()}
              </p>
            </div>

            <div className="mt-auto">
              <Link to={`/collection/${frag._id}`}>
                <button className="w-full text-xs sm:text-sm bg-[#1F3357] text-white py-2 hover:bg-[#152B4F]">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Collection;
