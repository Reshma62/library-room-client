import useBorrowedBookQuery from "../../Hooks/useBorrowedBookQuery";
import BorrowedBCard from "../../components/shared/BorrowedBCard";
import Container from "../../components/shared/Container";
import Loading from "../../components/shared/Loading";

const BorrowedBooks = () => {
  const { data: borrowedBooks, isLoading, refetch } = useBorrowedBookQuery();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="py-20 bg-gray-50 font-poppins sdfbg-gray-800 ">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2">
          {borrowedBooks?.length === 0 ? (
            <p className="text-center text-red-500 text-2xl"> No books found</p>
          ) : (
            borrowedBooks?.map((book) => (
              <BorrowedBCard key={book._id} book={book} refetch={refetch} />
            ))
          )}
        </div>
      </Container>
    </section>
  );
};

export default BorrowedBooks;
