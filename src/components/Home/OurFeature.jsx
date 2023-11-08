import Container from "../shared/Container";
import Heading from "../shared/Heading";
import { BiSolidBookAdd, BiSolidBookReader } from "react-icons/bi";
import { BsJournalBookmarkFill } from "react-icons/bs";
const OurFeature = () => {
  return (
    <section className="flex items-center justify-center bg-white dark:bg-gray-800 py-32">
      <Container>
        <div className="max-w-xl mx-auto">
          <div className="text-center ">
            <Heading headings={"Features"} title={"FEATURES"} span={"Our"} />
            <p className="mb-16 text-base text-center text-gray-500">
              "A library is a collection of resources in a variety of formats
              that is (1) organized by information professionals or other
              experts who (2) provide convenient physical, digital,
              bibliographic, or intellectual
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
              <BiSolidBookReader className="text-2xl text-white" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              Borrowed book
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
              Library -- from the Latin liber, meaning "book." In Greek and the
              Romance languages, the corresponding term is bibliotheca. A
              collection or group of collections of books and/or other print or
              nonprint materials organized
            </p>
          </div>
          <div className="w-full p-8 mb-5 text-center transition-all bg-blue-500 rounded shadow hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-white rounded-full">
              <BiSolidBookAdd className="text-3xl text-blue-500" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Return Book
            </h3>
            <p className="text-base text-gray-300">
              Beyond its curricular role, the school library program gives each
              individual member of the learning community a venue for exploring
              questions that arise out of individual curiosity and personal
              interest. As part of the school library program, the school
              librarian provides leadership in the use of information
              technologies
            </p>
          </div>
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
              <BsJournalBookmarkFill className="text-3xl text-white" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              Again Borrowed
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
              Learning for life…whether the focus is on readiness for the next
              grade or college and career readiness, the school library program
              plays a crucial role in preparing students for informed living in
              the 21st century
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurFeature;
