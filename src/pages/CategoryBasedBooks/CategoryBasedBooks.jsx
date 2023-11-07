import { useParams } from "react-router-dom";
import AllBooksLayout from "../../components/shared/AllBooksLayout";
import Container from "../../components/shared/Container";

const CategoryBasedBooks = () => {
  const { category } = useParams();
  return (
    <section className=" bg-gray-50 font-poppins sdfbg-gray-800 ">
      <div className="bg-slate-200 py-10">
        <Container>
          <h2 className="text-2xl font-bold font-Cabin ">
            Category name: <span className="text-primaryColor">{category}</span>
          </h2>
        </Container>
      </div>
      <Container>
        <AllBooksLayout />
      </Container>
    </section>
  );
};

export default CategoryBasedBooks;
