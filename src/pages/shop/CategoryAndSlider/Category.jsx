import { Link } from "react-router-dom";

export default function Category() {
  return (
    <nav className="bg-white shadow-lg min-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto ">
      {/* Heading for Categories */}
      <div className="mb-4 ">
        <h6 className="text-blue-600 text-lg font-bold px-4">Categories</h6>
      </div>
      
      {/* Categories Links */}
      <ul className="flex  border gap-2">
        <li>
          <Link
            to="/category/phones"
            className="text-black hover:text-blue-600 text-[15px] hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
          >
            Phones
          </Link>
        </li>
        <li>
          <Link
            to="/category/headphones"
            className="text-black hover:text-blue-600 text-[15px] hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
          >
            Headphones
          </Link>
        </li>
        <li>
          <Link
            to="/category/mobiles"
            className="text-black hover:text-blue-600 text-[15px] hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
          >
            Mobiles
          </Link>
        </li>
        <li>
          <Link
            to="/category/monitors"
            className="text-black hover:text-blue-600 text-[15px] hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
          >
            Monitors
          </Link>
        </li>
        <li>
          <Link
            to="/category/laptops"
            className="text-black hover:text-blue-600 text-[15px] hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
          >
            Laptops
          </Link>
        </li>
      </ul>
    </nav>
  );
}
