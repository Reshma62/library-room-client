import { useForm } from "react-hook-form";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitData = (data) => {
    console.log("Submitted data:", data);
  };
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <div>
        <input
          {...register("bookName")}
          className="border border-solid border-primaryColor"
          placeholder="Your name"
        />
      </div>
      <div>
        <input {...register("email", { required: true })} />
        {errors.email && <p>Email is required.</p>}
      </div>
      <div>
        <input {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}
      </div>
      <input type="submit" />
    </form>
  );
};

export default AddBook;
