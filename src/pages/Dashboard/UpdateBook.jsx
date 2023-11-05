import { useForm } from "react-hook-form";
import Heading from "../../components/shared/Heading";
import { useState } from "react";

const UpdateBook = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
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
      <Heading title={"Update Book"} span={"Update"} headings={"Book"} />
      <form onSubmit={handleSubmit(submitData)} className="font-Cabin ">
        <div className="flex gap-8">
          <div>
            <div className="w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Book Name
              </label>
              <input
                {...register("bookName")}
                className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                placeholder="Enter the Book Name"
                defaultValue={"Book Name"}
              />
            </div>
            <div className="w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Author Name
              </label>
              <input
                {...register("authorName")}
                className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                placeholder="Enter the Author Name"
              />
            </div>
            <div className="w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Quantity
              </label>
              <input
                {...register("quantity", { pattern: /\d+/ })}
                className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                placeholder="Enter the Book Quantity"
              />
              {errors.age && (
                <p className="text-red-500">
                  Please enter number for quantity.
                </p>
              )}
            </div>
            <div className="w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Description
              </label>
              <input
                {...register("description")}
                className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                placeholder="Enter Book Description"
              />
            </div>
          </div>
          <div>
            <div className="w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Rating
              </label>
              <input
                {...register("rating")}
                className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                placeholder="Enter Book Rating"
              />
            </div>
            <div className="w-[500px] mb-3">
              <label className="font-bold text-lg inline-block text-primaryColor pb-2">
                Select Category
              </label>
              <br />
              <select
                name=""
                id=""
                className="border border-solid border-primaryColor w-1/2 px-5 py-2 rounded-lg"
                {...register("category")}
              >
                <option value="cate1">cate1</option>
                <option value="cate2">cate2</option>
                <option value="cate3">cate3</option>
              </select>
              {/* <input
                
                className="border border-solid border-primaryColor w-full px-5 py-2 rounded-lg"
                placeholder="Enter Book Rating"
              /> */}
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
        <div className="text-center">
          <button
            className="btn bg-primaryColor text-white hover:text-primaryColor hover:bg-transparent border-solid border-transparent border hover:border-primaryColor mt-9 text-center"
            type="submit"
          >
            Update Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
