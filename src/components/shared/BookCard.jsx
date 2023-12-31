import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  const { _id, bookName, authorName, rating, category, quantity, bookPhoto } =
    book || {};
  return (
    <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
      <div className="border border-gray-300 dark:border-gray-700 rounded-2xl">
        <div className="relative bg-gray-200 ">
          <Link to="#" className="">
            <img
              src={bookPhoto}
              alt=""
              className="object-cover w-full h-56 mx-auto rounded-2xl"
            />
          </Link>
          <p className="absolute top-0 right-0 px-3 py-4 text-sm text-gray-100 bg-primaryColor rounded-bl-2xl rounded-tr-2xl hover:bg-indigo-700 hover:text-gray-100">
            {category}
          </p>
        </div>
        <div className="p-3 ">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-medium dark:text-gray-400">
              {bookName}
            </h3>
            <Rating
              initialRating={rating}
              fullSymbol={<AiFillStar />}
              emptySymbol={<AiOutlineStar />}
              readonly
            />
          </div>
          <p className="text-lg ">
            <span className="text-green-600 dark:text-green-600">
              In Stock: <span>{quantity}</span>
            </span>
          </p>
          <div>
            <p className="text-lg ">
              <span className="text-primaryColor ">{authorName}</span>
            </p>
          </div>
          <div className="text-right space-x-3">
            <Link to={`/books-details/${_id}`}>
              <button className="capitalize bg-primaryColor text-white px-3 py-2 rounded-lg">
                details
              </button>
            </Link>
            <Link to={`/dashboard/update-book/${_id}`}>
              <button className="capitalize border-primaryColor border-2 border-solid text-primaryColor px-3 py-2 rounded-lg">
                update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
