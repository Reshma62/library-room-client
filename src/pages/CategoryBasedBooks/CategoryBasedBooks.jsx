import AllBooksLayout from "../../components/shared/AllBooksLayout";
import Container from "../../components/shared/Container";

const CategoryBasedBooks = () => {
  return (
    <section className=" bg-gray-50 font-poppins sdfbg-gray-800 ">
      <div className="bg-slate-600 py-10">
        <Container>
          <h2>Category name</h2>
        </Container>
      </div>
      <Container>
        <AllBooksLayout />
      </Container>
    </section>
  );
};

export default CategoryBasedBooks;
