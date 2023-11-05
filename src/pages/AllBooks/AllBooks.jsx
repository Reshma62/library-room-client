import AllBooksLayout from "../../components/shared/AllBooksLayout";
import Container from "../../components/shared/Container";

const AllBooks = () => {
  return (
    <section className=" bg-gray-50 font-poppins sdfbg-gray-800 ">
      <div className="bg-slate-600 py-10 mb-10">
        <Container>
          <h2>All Books</h2>
        </Container>
      </div>
      <Container>
        <AllBooksLayout />
      </Container>
    </section>
  );
};

export default AllBooks;
