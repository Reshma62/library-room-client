import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import QuickView from "../../components/shared/QuickView";

const DetailsPage = () => {
  const data = useLoaderData();
  const {
    _id,
    bookName,
    authorName,
    rating,
    category,
    description,
    quantity,
    bookPhoto,
  } = data || {};
  const openModal = () => {
    document.getElementById("my_modal_1").showModal();
  };
  return (
    <>
      <section className="overflow-hidden bg-white py-11 font-poppins sdf:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 ">
                  <img
                    src={bookPhoto}
                    alt=""
                    className="object-cover w-full h-[600px] "
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold sdf:text-gray-400 md:text-4xl">
                    {bookName}
                  </h2>
                  <div className="flex items-center mb-6">
                    <Rating
                      initialRating={rating}
                      fullSymbol={<AiFillStar className="text-primaryColor" />}
                      emptySymbol={
                        <AiOutlineStar className="text-primaryColor" />
                      }
                    />
                  </div>
                  <p className="font-medium text-lg  text-primaryColor">
                    Category: {category}
                  </p>
                  <p>Book Overview:</p>
                  <p className="max-w-md mb-8 text-gray-700 sdf:text-gray-400">
                    {description}
                  </p>

                  <p className="text-green-600 sdf:text-green-300 ">
                    {quantity} in stock
                  </p>
                </div>

                <div className="flex flex-wrap items-center -mx-4 ">
                  <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                    <button
                      onClick={openModal}
                      className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md sdf:text-gray-200 sdf:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 sdf:bg-blue-600 sdf:hover:bg-blue-700 sdf:hover:border-blue-700 sdf:hover:text-gray-300"
                    >
                      Borrowed book
                    </button>
                  </div>
                  <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                    <Link to={"/all-books"}>
                      <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md sdf:text-gray-200 sdf:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 sdf:bg-blue-600 sdf:hover:bg-blue-700 sdf:hover:border-blue-700 sdf:hover:text-gray-300">
                        Back to All book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <QuickView data={data} />
    </>
  );
};

export default DetailsPage;
