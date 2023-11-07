import QuickViewBookDetails from "./QuickViewBookDetails";

const QuickView = ({ data }) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box max-w-[1000px] mx-auto">
        <QuickViewBookDetails data={data} />
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default QuickView;
