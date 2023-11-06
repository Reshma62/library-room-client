import loadingGif from "../../assets/loading.gif";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full flex-col">
      {" "}
      <p className="font-bold text-2xl font-Montserrat"> Loading...</p>
      <img className="w-[200px]" src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
