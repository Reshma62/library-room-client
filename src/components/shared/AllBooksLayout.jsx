import BookCard from "./BookCard";
import Filter from "./Filter";

import Sidebar from "./Sidebar";
import NotFoundMessage from "./NotFoundMessage";
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useAllBooksQuery from "../../Hooks/useAllBooksQuery";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const AllBooksLayout = () => {
  const { category } = useParams();
  const axios = useAxios();
  const [count, setCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(totalPages).keys()];
  useEffect(() => {
    axios
      .get("/admin/books-count")
      .then((result) => {
        setCount(result?.data?.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axios]);

  const { data: allBooks, isLoading: booksLoading } = useAllBooksQuery(
    category,
    currentPage,
    itemsPerPage
  );

  if (booksLoading) {
    <Loading />;
  }
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleChageItem = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(0);
  };
  return (
    <div className="flex flex-wrap mb-24 -mx-3">
      <Sidebar />
      <div className="w-full px-3 lg:w-3/4">
        <Filter setItems={itemsPerPage} handleChageItem={handleChageItem} />
        <div className="flex flex-wrap items-center ">
          {allBooks?.length === 0 ? (
            <NotFoundMessage />
          ) : (
            allBooks?.map((item) => <BookCard key={item._id} book={item} />)
          )}
        </div>
        <div className="flex justify-end mt-6">
          <div className="flex gap-3">
            <button onClick={handlePrev} className="btn btn-ghost ">
              prev
            </button>
            {pages.map((page, index) => (
              <button
                onClick={() => setCurrentPage(page)}
                key={page}
                className={`btn btn-primary ${
                  page === currentPage
                    ? "bg-primaryColor"
                    : "bg-slate-200 text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button onClick={handleNext} className="btn btn-ghost ">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksLayout;
