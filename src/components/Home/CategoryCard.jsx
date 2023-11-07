import { Link } from "react-router-dom";
import useAllBooksQuery from "../../Hooks/useAllBooksQuery";
import Loading from "../shared/Loading";

const CategoryCard = ({ item }) => {
  const { name, CategoryPhoto } = item || {};
  const { data: categoryBasedBooks, isLoading } = useAllBooksQuery(name);
  if (isLoading) {
    <Loading />;
  }
  return (
    <div className="relative bg-white rounded-2xl sdfbg-gray-700">
      <div className="w-full h-56 px-4 pt-4">
        <img
          src={`http://localhost:8080${CategoryPhoto}`}
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
            to={`/books/${name}`}
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
