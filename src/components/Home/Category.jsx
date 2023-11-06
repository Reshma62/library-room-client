import { Link } from "react-router-dom";
import Heading from "../shared/Heading";
import useQueryCategory from "../../Hooks/useQueryCategory";
import Loading from "../shared/Loading";
import CategoryCard from "./CategoryCard";
const Category = () => {
  const { data, isLoading, refetch } = useQueryCategory();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className=" bg-gray-200 font-poppins sdfbg-gray-900 py-20">
      <Heading title={"Category"} span={" Featured"} headings={"Category"} />
      <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
          {data.map((item) => (
            <CategoryCard key={item._id} item={item} />
          ))}
          {/* <CategoryCard /> */}
        </div>
      </div>
    </section>
  );
};

export default Category;
