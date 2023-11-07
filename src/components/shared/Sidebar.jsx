const Sidebar = () => {
  return (
    <div className="w-full pr-2 lg:w-1/4 lg:block">
      <div className="p-4 mb-5 bg-white border border-gray-200 sdfborder-gray-900 sdfbg-gray-900">
        <h2 className="text-2xl font-bold sdftext-gray-400">Categories</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 sdfborder-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label htmlFor="" className="flex items-center sdftext-gray-400 ">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span className="text-lg">Biscuits</span>
            </label>
          </li>
          <li className="mb-4">
            <label htmlFor="" className="flex items-center sdftext-gray-400 ">
              <input type="checkbox" className="w-4 h-4 mr-2 " />
              <span className="text-lg">Fruits</span>
            </label>
          </li>
          <li className="mb-4">
            <label htmlFor="" className="flex items-center sdftext-gray-400">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span className="text-lg">Seafood</span>
            </label>
          </li>
          <li className="mb-4">
            <label htmlFor="" className="flex items-center sdftext-gray-400">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span className="text-lg">Vegetables</span>
            </label>
          </li>
          <li className="mb-4">
            <label htmlFor="" className="flex items-center sdftext-gray-400">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span className="text-lg">Frozen Foods &amp; Staples</span>
            </label>
          </li>
        </ul>
        <a
          href="#"
          className="text-base font-medium text-blue-500 hover:underline sdftext-blue-400"
        >
          View More
        </a>
      </div>
      <div className="p-4 mb-5 bg-white border border-gray-200 sdfbg-gray-900 sdfborder-gray-900">
        <h2 className="text-2xl font-bold sdftext-gray-400">Product Status</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 sdfborder-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label htmlFor="" className="flex items-center sdftext-gray-300">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span className="text-lg sdftext-gray-400">In Stock</span>
            </label>
          </li>
          <li className="mb-4">
            <label htmlFor="" className="flex items-center sdftext-gray-300">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span className="text-lg sdftext-gray-400">On Sale</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
