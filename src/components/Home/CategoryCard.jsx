import { Link } from "react-router-dom";

const CategoryCard = ({ item }) => {
  const { name, CategoryPhoto } = item || {};
  return (
    <div className="relative bg-white rounded-2xl sdfbg-gray-700">
      <div className="w-full h-56 px-4 pt-4">
        <img
          src={`http://localhost:8000${CategoryPhoto}`}
          alt=""
          className="object-cover w-full h-full rounded-lg "
        />
      </div>
      <div>
        <div className="p-4">
          <div className="mb-3">
            <Link to="/books/categoryBooks">
              <h2 className="text-2xl font-semibold sdftext-gray-300">
                {name}
              </h2>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-end ">
          <Link
            to="/books/categoryBooks"
            className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100"
          >
            See Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
