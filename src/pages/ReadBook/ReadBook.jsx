import axios from "axios";
import { useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ReadBook = () => {
  const data = useLoaderData();

  const {
    _id,
    bookId,
    bookName,
    authorName,
    rating,
    category,
    quantity,
    bookPhoto,
    borrowDate,
    returnDate,
    userName,
    userEmail,
    description,
  } = data || {};
  return (
    <section className="pb-11 sdfbg-gray-900">
      <div
        className="object-cover w-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/P5gCz1Wc/pexels-marc-mueller-380769.jpg)",
        }}
      >
        <div className="flex items-center justify-center w-full h-[30vh] bg-slate-900 bg-opacity-50 ">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
              Book details of: <span>{bookName}</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[70%,1fr]  gap-4  pt-9 pb-7">
          <div>
            <div className="p-4 ">
              <img
                src={bookPhoto}
                alt=""
                className="object-cover w-full rounded-md h-96"
              />
              <div className="flex mt-6 mb-4 ">
                <a href="#" className="flex items-center mr-6 no-underline ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-blue-600 sdftext-blue-400 bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  <span className="ml-2 text-sm hover:text-blue-600 sdftext-blue-400">
                    {authorName}
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center text-black no-underline "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-blue-600 sdftext-blue-400 bi bi-chat"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
                  </svg>
                  <span className="ml-2 text-sm hover:text-blue-600 sdftext-blue-400 ">
                    borrowed date :{borrowDate}
                  </span>
                </a>
              </div>

              <h2 className="mb-4 text-2xl font-semibold font-poppins sdftext-gray-300">
                {bookName}{" "}
              </h2>
              <div className=" font-poppins sdftext-gray-400">
                <p>{description}</p>
              </div>
            </div>
            <div className="px-4">
              <h2 className="pb-2 mt-4 text-lg font-semibold text-gray-900 sdftext-gray-400 font-poppins">
                Category
              </h2>
              <div className="w-16 mb-3 border-b-2 border-blue-500 sdfborder-gray-400 inset-px"></div>
              <div className="flex flex-wrap gap-2 my-4 font-poppins ">
                <a
                  className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-200 rounded-md btn btn-sm hover:bg-blue-500 sdftext-gray-100 sdfbg-gray-600 sdfhover:bg-gray-800 hover:text-white"
                  href="#"
                >
                  {category}
                </a>
              </div>
              <div className="flex flex-wrap gap-2 my-4 font-poppins ">
                <a
                  className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-200 rounded-md btn btn-sm hover:bg-blue-500 sdftext-gray-100 sdfbg-gray-600 sdfhover:bg-gray-800 hover:text-white"
                  href="#"
                >
                  return Date: {returnDate}
                </a>
              </div>
            </div>
          </div>
          <div>
            <p>Books ratings</p>
            <Rating
              initialRating={rating}
              fullSymbol={<AiFillStar />}
              emptySymbol={<AiOutlineStar />}
              readonly
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadBook;
