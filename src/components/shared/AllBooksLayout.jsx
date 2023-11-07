import useAllBooksQuery from "../../Hooks/useAllBooksQuery";
import BookCard from "./BookCard";
import Filter from "./Filter";
import Loading from "./Loading";
import Sidebar from "./Sidebar";

const AllBooksLayout = () => {
  const { data: allbooks, isLoading, refetch } = useAllBooksQuery();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-wrap mb-24 -mx-3">
      <Sidebar />
      <div className="w-full px-3 lg:w-3/4">
        <Filter />
        <div className="flex flex-wrap items-center ">
          {allbooks?.map((item) => (
            <BookCard key={item._id} book={item} />
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <nav aria-label="page-navigation">
            <ul className="flex list-style-none">
              <li className="page-item disabled ">
                <a
                  href="#"
                  className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md sdftext-gray-400 hover:text-gray-100 hover:bg-blue-600"
                >
                  Previous
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 mr-3 text-base hover:text-blue-700 transition-all duration-300 hover:bg-blue-200 sdfhover:text-gray-400 sdfhover:bg-gray-700 rounded-md text-gray-100 bg-blue-400"
                >
                  1
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 sdftext-gray-400 sdfhover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3  "
                >
                  2
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 sdftext-gray-400 sdfhover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3 "
                >
                  3
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 sdftext-gray-400 sdfhover:bg-gray-700 hover:bg-blue-100 rounded-md "
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AllBooksLayout;
