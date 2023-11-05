const ReadBook = () => {
  return (
    <section className="pb-11 sdfbg-gray-900">
      <div
        className="object-cover w-full bg-center bg-cover"
        // style="background-image: url(https://i.postimg.cc/P5gCz1Wc/pexels-marc-mueller-380769.jpg);"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/P5gCz1Wc/pexels-marc-mueller-380769.jpg)",
        }}
      >
        <div className="flex items-center justify-center w-full h-[30vh] bg-blue-800 bg-opacity-50 ">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
              Page details
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[70%,1fr]  gap-4  pt-9 pb-7">
          <div>
            <div className="p-4 ">
              <img
                src="https://i.postimg.cc/vHR493zf/pexels-pixabay-269077.jpg"
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
                    Adam Smith
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
                    borrowed date
                  </span>
                </a>
              </div>
              <h2 className="mb-4 text-2xl font-semibold font-poppins sdftext-gray-300">
                Easy and Most Powerful Server and Platform.
              </h2>
              <div className=" font-poppins sdftext-gray-400">
                <p>
                  Lorem ipsum dolor sit amet, labore et dolore magna aliqua. Ut
                  enim ad minim veniam consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam
                </p>
                <blockquote className="p-6 my-4 italic bg-gray-100 border-l-4 border-blue-500 sdfborder-blue-400 sdfbg-gray-800 sdftext-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </blockquote>
                <p className="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
            <div className="px-4">
              <h2 className="pb-2 mt-4 text-lg font-semibold text-gray-900 sdftext-gray-400 font-poppins">
                Tags
              </h2>
              <div className="w-16 mb-3 border-b-2 border-blue-500 sdfborder-gray-400 inset-px"></div>
              <div className="flex flex-wrap gap-2 my-4 font-poppins ">
                <a
                  className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-200 rounded-md btn btn-sm hover:bg-blue-500 sdftext-gray-100 sdfbg-gray-600 sdfhover:bg-gray-800 hover:text-white"
                  href="#"
                >
                  Corporate
                </a>
                <a
                  className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-200 rounded-md btn btn-sm hover:bg-blue-500 hover:text-white sdftext-gray-100 sdfbg-gray-600 sdfhover:bg-gray-800"
                  href="#"
                >
                  Business
                </a>
                <a
                  className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-200 rounded-md btn btn-sm hover:bg-blue-500 hover:text-white sdftext-gray-100 sdfbg-gray-600 sdfhover:bg-gray-800"
                  href="#"
                >
                  Field
                </a>
              </div>
            </div>
          </div>
          <div className="px-4 lg:px-0">
            <div className="p-4 mb-4 border border-gray-200 rounded-md sdfborder-gray-800 sdfbg-gray-800">
              <h2 className="pb-2 text-lg font-semibold leading-5 tracking-tight text-gray-900 sdftext-gray-300 ">
                Categories
              </h2>
              <div className="w-16 mb-5 border-b-2 border-blue-400 inset-px "></div>
              <ul>
                <li className="mb-4">
                  <a
                    href="#"
                    className="flex items-center mr-4 no-underline sdftext-gray-400 hover:text-blue-600 sdfhover:text-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-3 h-3 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <span className="ml-2 text-sm text-gray-500 hover:text-blue-600 sdftext-gray-400 sdfhover:text-gray-300">
                      Technology
                    </span>
                    <span className="inline-flex items-center justify-center w-4 h-4 ml-auto text-xs font-medium text-blue-700 bg-blue-200 rounded-full sdfbg-gray-700 sdftext-gray-400">
                      3
                    </span>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="flex items-center mr-4 no-underline sdftext-gray-400 hover:text-blue-600 sdfhover:text-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-3 h-3 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <span className="ml-2 text-sm text-gray-500 hover:text-blue-600 sdftext-gray-400 sdfhover:text-gray-300">
                      Innovation
                    </span>
                    <span className="inline-flex items-center justify-center w-4 h-4 ml-auto text-xs font-medium text-blue-700 bg-blue-200 rounded-full sdfbg-gray-700 sdftext-gray-400">
                      4
                    </span>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="flex items-center mr-4 no-underline sdftext-gray-400 sdfhover:text-gray-300 hover:text-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-3 h-3 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <span className="ml-2 text-sm text-gray-500 sdftext-gray-400 sdfhover:text-gray-300 hover:text-blue-600">
                      Information
                    </span>
                    <span className="inline-flex items-center justify-center w-4 h-4 ml-auto text-xs font-medium text-blue-700 bg-blue-200 rounded-full sdfbg-gray-700 sdftext-gray-400">
                      6
                    </span>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="flex items-center mr-4 no-underline sdftext-gray-400 sdfhover:text-gray-300 hover:text-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-3 h-3 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <span className="ml-2 text-sm text-gray-500 sdftext-gray-400 sdfhover:text-gray-300 hover:text-blue-600">
                      Learning
                    </span>
                    <span className="inline-flex items-center justify-center w-4 h-4 ml-auto text-xs font-medium text-blue-700 bg-blue-200 rounded-full sdfbg-gray-700 sdftext-gray-400">
                      2
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-4 mb-4 bg-white border rounded-md shadow sdfbg-gray-800 sdfborder-gray-900">
              <h2 className="py-2 my-2 text-xl font-semibold leading-5 tracking-tight text-gray-900 font-montserrat lg:text-2xl sdftext-gray-400 lg:mt-3 ">
                Join Our Newsletter
              </h2>
              <input
                type="email "
                name="email "
                id="email "
                autoComplete="email "
                required=""
                placeholder="Drop your email"
                className="w-full px-2 py-2 border border-gray-300 rounded-md sdfbg-gray-700 sdftext-gray-400 sdfborder-gray-800 focus:outline-none focus:border-indigo-500 focus-ring-1 focus:ring-indigo-500 "
              />
              <button className="flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-gray-100 uppercase bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 sdffocus:ring-0 focus:ring-offset-2 sdffocus:ring-offset-0 focus:ring-blue-500 ">
                Subscribe
              </button>
              <p className="mt-2 text-sm text-gray-500 sdftext-gray-400">
                Join our email list to get new updates and inspirations for
                free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadBook;
