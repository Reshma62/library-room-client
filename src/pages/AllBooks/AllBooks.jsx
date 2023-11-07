import AllBooksLayout from "../../components/shared/AllBooksLayout";
import Container from "../../components/shared/Container";

const AllBooks = () => {
  return (
    <section className=" bg-gray-50 font-poppins sdfbg-gray-800 ">
      <div className="bg-slate-200 py-10">
        <Container>
          <h2 className="text-2xl font-bold font-Cabin ">All Books</h2>
        </Container>
      </div>
      <Container>
        <AllBooksLayout />
      </Container>
    </section>
  );
};

export default AllBooks;
