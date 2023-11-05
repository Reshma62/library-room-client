import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const BookCard = () => {
  return (
    <div className="w-full px-3 mb-6 sm:w-1/2 md:w-1/3">
      <div className="border border-gray-300 dark:border-gray-700 rounded-2xl">
        <div className="relative bg-gray-200 ">
          <Link to="#" className="">
            <img
              src="https://i.postimg.cc/hj6h6Vwv/pexels-artem-beliaikin-2292919.jpg"
              alt=""
              className="object-cover w-full h-56 mx-auto rounded-2xl"
            />
          </Link>
          <p className="absolute top-0 right-0 px-3 py-4 text-sm text-gray-100 bg-primaryColor rounded-bl-2xl rounded-tr-2xl hover:bg-indigo-700 hover:text-gray-100">
            Category
          </p>
        </div>
        <div className="p-3 ">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-medium dark:text-gray-400">
              Product name
            </h3>
            <Rating
              initialRating={2.5}
              fullSymbol={<AiFillStar />}
              emptySymbol={<AiOutlineStar />}
              readonly
            />
          </div>
          <p className="text-lg ">
            <span className="text-green-600 dark:text-green-600">
              In Stock: <span>10</span>
            </span>
          </p>
          <div>
            <p className="text-lg ">
              <span className="text-primaryColor ">Author name</span>
            </p>
          </div>
          <div className="text-right space-x-3">
            <Link to={"/books-details/id"}>
              <button className="capitalize bg-primaryColor text-white px-3 py-2 rounded-lg">
                details
              </button>
            </Link>
            <button className="capitalize border-primaryColor border-2 border-solid text-primaryColor px-3 py-2 rounded-lg">
              update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
