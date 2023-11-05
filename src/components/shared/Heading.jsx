const Heading = ({ title, headings }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10 uppercase">
        {title}
      </div>
      <h1 className="text-5xl font-bold sdftext-white">
        Our <span className="text-blue-500"> {headings}</span>
      </h1>
      <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
        <div className="flex-1 h-2 bg-blue-200"></div>
        <div className="flex-1 h-2 bg-blue-400"></div>
        <div className="flex-1 h-2 bg-blue-600"></div>
      </div>
    </div>
  );
};

export default Heading;
