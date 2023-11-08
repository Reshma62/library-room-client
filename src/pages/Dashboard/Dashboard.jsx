import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../utils/baseUrl";

const Dashboard = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get(`${baseUrl}/admin/books-count`)
      .then((result) => {
        setCount(result?.data?.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section className="pt-10">
        <div className="text-center">
          <h2 className="font-bold font-Montserrat text-primaryColor text-5xl underline">
            WellCome Admin
          </h2>
        </div>
      </section>
      <section className="flex items-center font-poppins sdfbg-gray-900 ">
        <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
          <div className="flex flex-wrap justify-center -mx-3 pt-11">
            <div className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3 ">
              <div className="p-5 bg-white rounded-b shadow sdfbg-gray-700 h-[150px]">
                <h2 className="my-3 text-2xl font-bold sdftext-gray-300">
                  Total Books
                </h2>
                <p className="mb-3 leading-loose text-gray-500 sdftext-gray-400">
                  {count}
                </p>
              </div>
            </div>
            <div className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3 h-20">
              <div className="p-5 bg-white rounded-b shadow sdfbg-gray-700 h-[150px]">
                <h2 className="my-3 text-2xl font-bold sdftext-gray-300">
                  Total Category
                </h2>
                <p className="mb-3 leading-loose text-gray-500 sdftext-gray-400">
                  5
                </p>
              </div>
            </div>
            <div className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3 h-20">
              <div className="p-5 bg-white rounded-b shadow sdfbg-gray-700 h-[150px]">
                <h2 className="my-3 text-2xl font-bold sdftext-gray-300">
                  Total Borrowed Books
                </h2>
                <p className="mb-3 leading-loose text-gray-500 sdftext-gray-400">
                  10
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
