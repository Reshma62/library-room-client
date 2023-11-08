import Container from "../shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100 dark:bg-gray-700 py-20 ">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        // spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper lg:h-[60vh] h-[40vh]"
      >
        {/* slider 1 */}
        <SwiperSlide>
          <Container>
            <div className="flex flex-wrap items-center -mx-4 h-full justify-between">
              <div className="w-full px-4 lg:w-2/5">
                <div className=" lg:max-w-xl">
                  <h1 className="mb-6 text-4xl text-gray-900 dark:text-slate-200 font-bold sdftext-gray-300 lg:text-6xl">
                    <span>Keep learning and </span>
                    <span className="text-blue-600 sdftext-blue-400">
                      Develop
                    </span>
                    <br />
                    <span>Skills</span>
                  </h1>
                  <p className="mb-6 leading-8 text-gray-500 dark:text-slate-200 sdftext-gray-400">
                    A library is a collection of books, and possibly other
                    materials and media, that is accessible for use by its
                    members and members of allied institutions. Libraries
                    provide physical
                  </p>
                  <a
                    className="inline-block w-full px-6 py-4 mb-2 text-lg font-medium leading-6 text-center text-white transition duration-200 bg-blue-600 rounded shadow sdfbg-blue-500 sdfhover:bg-blue-700 md:w-auto md:mb-0 md:mr-4 hover:bg-blue-700"
                    href="#"
                  >
                    Request a demo
                  </a>
                </div>
              </div>
              <div className="w-full px-4 mt-20 lg:w-2/5 lg:mt-0 hidden lg:block">
                <div className="flex justify-center lg:justify-end">
                  <div className="mr-4 lg:mr-8">
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/PqrSRxDN/pexels-fauxels-3184357.jpg "
                      alt=""
                    />
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/90fhB5Hb/pexels-pixabay-38271.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/qM9PNCqj/pexels-vlada-karpovich-4050291.jpg"
                      alt=""
                    />
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/qRMYPsDM/pexels-christina-morillo-1181605.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <Container>
            <div className="flex flex-wrap items-center -mx-4 h-full justify-between">
              <div className="w-full px-4 lg:w-2/5">
                <div className=" lg:max-w-xl">
                  <h1 className="mb-6 text-4xl text-gray-900 font-bold sdftext-gray-300 lg:text-6xl">
                    <span>Just borrowe and </span>
                    <span className="text-blue-600 sdftext-blue-400">
                      return
                    </span>
                    <br />
                    <span>simple</span>
                  </h1>
                  <p className="mb-6 leading-8 text-gray-500 sdftext-gray-400">
                    A library is a collection of books, and possibly other
                    materials and media, that is accessible for use by its
                    members and members of allied institutions. Libraries
                    provide physical (hard copies) or digital (soft copies)
                    materials, and may be a physical location, a virtual space,
                    or both.
                  </p>
                  <a
                    className="inline-block w-full px-6 py-4 mb-2 text-lg font-medium leading-6 text-center text-white transition duration-200 bg-blue-600 rounded shadow sdfbg-blue-500 sdfhover:bg-blue-700 md:w-auto md:mb-0 md:mr-4 hover:bg-blue-700"
                    href="#"
                  >
                    Request a demo
                  </a>
                </div>
              </div>
              <div className="w-full px-4 mt-20 lg:w-2/5 lg:mt-0 hidden lg:block">
                <div className="flex justify-center lg:justify-end">
                  <div className="mr-4 lg:mr-8">
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/PqrSRxDN/pexels-fauxels-3184357.jpg "
                      alt=""
                    />
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/90fhB5Hb/pexels-pixabay-38271.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/qM9PNCqj/pexels-vlada-karpovich-4050291.jpg"
                      alt=""
                    />
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/qRMYPsDM/pexels-christina-morillo-1181605.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <Container>
            <div className="flex flex-wrap items-center -mx-4 h-full justify-between">
              <div className="w-full px-4 lg:w-2/5">
                <div className=" lg:max-w-xl">
                  <h1 className="mb-6 text-4xl text-gray-900 font-bold sdftext-gray-300 lg:text-6xl">
                    <span>Keep learning and </span>
                    <span className="text-blue-600 sdftext-blue-400">
                      Develop
                    </span>
                    <br />
                    <span>Skills</span>
                  </h1>
                  <p className="mb-6 leading-8 text-gray-500 sdftext-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.sit amet, consectetur adipiscing elit, sed do Ut enim
                    ad minim veniam
                  </p>
                  <a
                    className="inline-block w-full px-6 py-4 mb-2 text-lg font-medium leading-6 text-center text-white transition duration-200 bg-blue-600 rounded shadow sdfbg-blue-500 sdfhover:bg-blue-700 md:w-auto md:mb-0 md:mr-4 hover:bg-blue-700"
                    href="#"
                  >
                    Request a demo
                  </a>
                </div>
              </div>
              <div className="w-full px-4 mt-20 lg:w-2/5 lg:mt-0 hidden lg:block">
                <div className="flex justify-center lg:justify-end">
                  <div className="mr-4 lg:mr-8">
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/PqrSRxDN/pexels-fauxels-3184357.jpg "
                      alt=""
                    />
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/90fhB5Hb/pexels-pixabay-38271.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/qM9PNCqj/pexels-vlada-karpovich-4050291.jpg"
                      alt=""
                    />
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/qRMYPsDM/pexels-christina-morillo-1181605.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        {/* slider 4 */}
        <SwiperSlide>
          <Container>
            <div className="flex flex-wrap items-center -mx-4 h-full justify-between">
              <div className="w-full px-4 lg:w-2/5">
                <div className=" lg:max-w-xl">
                  <h1 className="mb-6 text-4xl text-gray-900 font-bold sdftext-gray-300 lg:text-6xl">
                    <span>Keep learning and </span>
                    <span className="text-blue-600 sdftext-blue-400">
                      Develop
                    </span>
                    <br />
                    <span>Skills</span>
                  </h1>
                  <p className="mb-6 leading-8 text-gray-500 sdftext-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.sit amet, consectetur adipiscing elit, sed do Ut enim
                    ad minim veniam
                  </p>
                  <a
                    className="inline-block w-full px-6 py-4 mb-2 text-lg font-medium leading-6 text-center text-white transition duration-200 bg-blue-600 rounded shadow sdfbg-blue-500 sdfhover:bg-blue-700 md:w-auto md:mb-0 md:mr-4 hover:bg-blue-700"
                    href="#"
                  >
                    Request a demo
                  </a>
                </div>
              </div>
              <div className="w-full px-4 mt-20 lg:w-2/5 lg:mt-0 hidden lg:block">
                <div className="flex justify-center lg:justify-end">
                  <div className="mr-4 lg:mr-8">
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/PqrSRxDN/pexels-fauxels-3184357.jpg "
                      alt=""
                    />
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/90fhB5Hb/pexels-pixabay-38271.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/qM9PNCqj/pexels-vlada-karpovich-4050291.jpg"
                      alt=""
                    />
                    <img
                      className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                      src="https://i.postimg.cc/qRMYPsDM/pexels-christina-morillo-1181605.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
