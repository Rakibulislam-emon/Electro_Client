import { Link } from "react-router-dom";

export default function ShopUi() {
  return (
    <div className="lg:hidden md:hidden  flex flex-col justify-center items-center my-8 space-y-6 px-4">
    {/* Responsive title */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 leading-tight">
      Ready to Shop? 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 block mt-2">
        Click Below!
      </span>
    </h1>
  
    {/* Responsive button */}
    <Link to={'/shop'}>
      <button className="bg-blue-600 text-white font-semibold px-5 py-3 sm:px-6 sm:py-4 rounded-lg text-lg sm:text-xl md:text-2xl hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg flex items-center space-x-3">
        <span>Click Here to Shop</span>
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </Link>
  </div>
  )
}
