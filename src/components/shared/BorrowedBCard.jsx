import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";

const BorrowedBCard = ({ book, refetch }) => {
  const axios = useAxios();
  const {
    _id,
    bookId,
    bookName,
    authorName,
    rating,
    category,
    bookPhoto,
    borrowDate,
    returnDate,
    userName,
    userEmail,
    description,
  } = book || {};

  const handleReturn = () => {
    console.log(_id);
    axios
      .delete(`/user/return-book/${_id}`)
      .then((result) => {
        console.log(result.data);
        if (result.data.deletedCount) {
          toast.success("Successfully retrun the book");
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="relative w-full h-56">
        <img src={bookPhoto} alt="" className="object-cover w-full h-full " />
        <span className="absolute top-0 left-0 px-2 py-1 mt-2 ml-2 text-xs text-white bg-blue-700">
          {category}
        </span>
      </div>
      <div className="p-4 bg-white sdfbg-gray-700 border border-solid border-primaryColor">
        <div className="flex items-center justify-between mb-1">
          <div>
            <a href="">
              <h2 className="text-xl font-semibold sdftext-gray-300">
                {bookName}
              </h2>
            </a>
          </div>
          <div>
            <p>Borrowed Date</p>
            <div className="flex items-center">
              <a href="" className="mr-2 text-blue-700 sdftext-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-calendar-day"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V7.418h-.672v4.105z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
              </a>
              <span className="text-sm font-medium text-gray-700 sdftext-gray-400">
                {borrowDate}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-4 justify-between">
          <span className="text-sm text-gray-600 sdftext-gray-400">
            {authorName}
          </span>
          <Rating
            initialRating={rating}
            fullSymbol={<AiFillStar />}
            emptySymbol={<AiOutlineStar />}
            readonly
          />
        </div>
        <h2 className="mb-4 text-lg font-medium text-gray-700 sdftext-gray-400">
          {description.substring(0, 130)}
          <Link
            to={`/read-books/${_id}`}
            className="text-primaryColor font-bold underline"
          >
            Read more
          </Link>
        </h2>
        <div className="flex items-center justify-between ">
          <div>
            <p>Return date</p>
            <div className="flex items-center">
              <a href="" className="mr-2 text-blue-700 sdftext-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-calendar-day"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V7.418h-.672v4.105z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
              </a>
              <span className="text-sm font-medium text-gray-700 sdftext-gray-400">
                {returnDate}
              </span>
            </div>
          </div>
          <button
            onClick={handleReturn}
            className="px-3 py-2 text-xs text-gray-100 bg-blue-700 rounded hover:bg-blue-600 hover:text-gray-100"
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBCard;
