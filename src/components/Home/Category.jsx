import { Link } from "react-router-dom";
import Heading from "../shared/Heading";

const Category = () => {
  return (
    <section className=" bg-gray-200 font-poppins sdfbg-gray-900 py-20">
      <Heading title={"Category"} span={" Featured"} headings={"Category"} />
      <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
          <div className="relative bg-white rounded-2xl sdfbg-gray-700">
            <div className="w-full h-56 px-4 pt-4">
              <img
                src="https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg"
                alt=""
                className="object-cover w-full h-full rounded-lg "
              />
            </div>
            <div>
              <div className="p-4">
                <div className="mb-3">
                  <Link to="/books/categoryBooks">
                    <h2 className="text-2xl font-semibold sdftext-gray-300">
                      Category Name
                    </h2>
                  </Link>
                </div>
                <p className="pb-16 text-base font-base text-gray-700 sdftext-gray-400">
                  We will take you different places of nepal and will translate
                  japanese to english entertain ...
                </p>
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
        </div>
      </div>
    </section>
  );
};

export default Category;
