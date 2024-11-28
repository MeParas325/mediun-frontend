import { Link } from "react-router-dom"

const Appbar = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-8 py-3">
        {/* Left Section */}
        <h1 className="font-semibold text-xl">Mediun</h1>


        {/* Right Section */}
        <div className="flex flex-row-reverse gap-4">
          <div className="w-8 h-8 bg-black rounded-full"></div>
          <Link to={"/publish"}> <button className="bg-blue-900 h-full text-white px-5 py-1 rounded-xl font-semibold text-xs">New</button> </Link>
        </div>
      </div>
    </div>
  );
};

export default Appbar