import { useForm } from "react-hook-form";
import Heading from "../../components/shared/Heading";
import { useState } from "react";

const CategoryList = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImgUrl(URL.createObjectURL(file));
  };
  const submitData = (data) => {
    console.log(data);
    const selectedFile = data.bookPhoto[0];
    console.log({ selectedFile });
  };
  return (
    <div className="pt-20">
      <Heading title={"Add Category"} span={"Add"} headings={"Category"} />
      <div className="flex gap-8">
        <form onSubmit={handleSubmit(submitData)} className="font-Cabin ">
          <div className="flex gap-8">
            <div>
              <div className="w-[500px] mb-3">
                <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                  Add Category
                </label>
                <input
                  {...register("bookName")}
                  className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                  placeholder="Enter the Book Name"
                />
              </div>

              <div className="w-[500px] mb-3">
                <div className="py-2 shrink-0">
                  <img
                    className="object-cover w-32 h-32 rounded-lg border border-solid border-primaryColor"
                    src={`${
                      imgUrl
                        ? imgUrl
                        : "https://i.postimg.cc/bNyr5cJq/pexels-anastasia-shuraeva-5704720.jpg"
                    }`}
                    alt="Current profile photo"
                  />
                </div>
                <label className="block pt-2">
                  <span className="sr-only ">Choose Book photo</span>
                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold dark:file:bg-gray-600 dark:file:text-gray-200 dark:hover:file:bg-gray-700 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 "
                    {...register("bookPhoto")}
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="text-left">
            <button
              className="btn bg-primaryColor text-white hover:text-primaryColor hover:bg-transparent border-solid border-transparent border hover:border-primaryColor mt-9 text-center"
              type="submit"
            >
              Add Category
            </button>
          </div>
        </form>
        <div>
          <h2>Category lists</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
