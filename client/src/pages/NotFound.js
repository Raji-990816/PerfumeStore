import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
            Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="text-orange-500 hover:text-[#152B4F] text-xl font-medium">
          Click here for HomePage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
