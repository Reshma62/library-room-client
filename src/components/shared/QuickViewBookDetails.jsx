import { useForm } from "react-hook-form";
import { BiSolidStar, BiStar } from "react-icons/bi";
import Rating from "react-rating";
import useAuthContext from "../../Hooks/useAuthContext";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import useAllBooksQuery from "../../Hooks/useAllBooksQuery";

const QuickViewBookDetails = ({ data }) => {
  const { user } = useAuthContext();
  const { refetch } = useAllBooksQuery();
  const axios = useAxios();
  const {
    _id,
    bookName,
    authorName,
    rating,
    category,
    quantity,
    bookPhoto,
    description,
  } = data || {};

  const handleBorrowBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const returnDate = form.date.value;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    const borrowBookInfo = {
      bookId: _id,
      bookName,
      authorName,
      rating,
      category,
      quantity,
      bookPhoto,
      borrowDate: formattedDate,
      returnDate,
      userName,
      userEmail,
      description,
    };
    console.log(borrowBookInfo, 31);
    axios
      .post(`/user/borrow-book`, borrowBookInfo)
      .then((result) => {
        console.log(result.data);
        if (result.data.error) {
          toast.error(result.data.error);
          refetch();
        } else {
          toast.success("Successfully Borrowed the book");
          // update the quantity
          refetch();
          axios
            .patch(`/admin/update-quantity/${_id}`)
            .then((result) => {
              console.log(result.data);
              refetch();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" flex items-center gap-8 py-5">
      <div className="basis-1/3 overflow-hidden py-5 rounded-xl border border-solid border-slate-200">
        <img
          src={bookPhoto}
          alt="img"
          className={`w-[446px] h-[300px] mx-auto }`}
        />
      </div>
      <div className="basis-2/3">
        <div className="px-6 py-6 space-y-4">
          <h3 className="text-3xl  font-black text-heading hover:text-primary">
            {bookName}
          </h3>
          <h3 className="text-lg  font-medium text-gray-400 ">{authorName}</h3>

          <p>
            <Rating
              initialRating={rating}
              readonly
              fullSymbol={<BiSolidStar className="text-yellow-500" />}
              emptySymbol={<BiStar className="text-paragaraph" />}
            />
          </p>
          <form onSubmit={handleBorrowBook}>
            <div className="flex flex-col">
              <p>Your name</p>
              <input
                type="text"
                defaultValue={user?.displayName}
                className="border-2 w-full cursor-not-allowed  border-solid rounded-xl border-primary  outline-0 py-3 px-2.5 mb-2"
                name="name"
                disabled
              />

              <p>Your email</p>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="border-2 w-full  border-solid rounded-xl border-primary  outline-0 py-3 px-2.5 mb-2 cursor-not-allowed"
                disabled
              />

              <p>Return Date</p>
              <input
                // {...register("date", { required: true })}
                type="date"
                name="date"
                defaultValue={1}
                className="border-2 w-full  border-solid rounded-xl border-primary  outline-0 py-3 px-2.5 mb-2"
              />
            </div>
            <input
              type="submit"
              value="Borrow"
              className={`btn bg-primaryColor text-white border-solid hover:border-primaryColor border hover:text-primaryColor hover:bg-transparent ${
                quantity <= 0 && "cursor-not-allowed"
              }`}
              disabled={quantity <= 0}
            />
          </form>
          <hr />
          <div>
            <p>Category: {category}</p>
            <p>Stock : {quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewBookDetails;
