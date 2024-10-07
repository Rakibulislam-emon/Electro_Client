import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { GiCancel } from "react-icons/gi";
import icon from '../../assets/icons/menu-button.png';
import SidebarHome from "./SidebarHome";
import { Link } from "react-router-dom";
// import useDecodedToken from "../../hooks/useDecodedToken";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function Navbar() {
  const axios = useAxiosSecure()

  // Fetch cart items using TanStack Query
  const { data: cartItems = [], } = useQuery({
    queryKey: ['cartItems'],
    queryFn: async () => {
      const res = await axios.get('/api/cartItems');
      return res.data;
    },
  });
  


  // const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)

  // const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  
  const updatedPrice = cartItems.reduce((acc, item) => acc + (item?.price * item?.quantity), 0)
 



  const [isOpen, setIsOpen] = useState(false); // For search modal
  const [isOpenSidebar, setIsOpenSidebar] = useState(false); // For sidebar
  const modalRef = useRef(null); // Ref for modal content

  const handleSearchModal = () => {
    setIsOpen(!isOpen); // Toggle the search modal
  };

  const sidebarMenu = () => {
    setIsOpenSidebar(!isOpenSidebar); // Toggle the sidebar
  };

  // Close the modal if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false); // Close modal when clicking outside
      }
    };

    // Add event listener to detect clicks outside the modal
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // Add dependency on `isOpen`

  return (
    <main className="">
      <div>
        <div className="max-w-screen-2xl flex lg:mt-4 mx-auto lg:bg-white bg-yellow-500">
          <div className="flex w-full">
            {/* Left Section */}
            <div className="flex items-center flex-1 p-2 ">
              <div className="flex-1 justify-between flex">
                {/* Logo */}
                <Link to={'/'} className="text-3xl font-bold">electro</Link>
                <button onClick={sidebarMenu} className="">
                  <img className="size-6" src={icon} alt="menu" />
                </button>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 max-w-screen-md mx-auto mt-2 lg:block hidden">
              <form className="w-full border-[#fed72f] border rounded-full flex items-center">
                <div className="relative flex-1">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="w-full p-2 pr-20 text-sm border-[#fed72f] rounded-l-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-[#fed72f] transition duration-300 ease-in-out dark:border-[#fed72f] dark:focus:ring-yellow-400"
                    placeholder="Search Products..."
                    required
                  />
                </div>

                <div className="relative w-1/4">
                  <select
                    id="category"
                    className="w-full p-2 text-sm text-gray-900 bg-gray-50 border-[#fed72f] shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out dark:border-[#fed72f] dark:focus:ring-yellow-400"
                  >
                    <option value="all">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="home">Home</option>
                    <option value="beauty">Beauty</option>
                  </select>
                </div>

                <button className="bg-[#fed72f] rounded-r-full px-4 py-2 flex items-center gap-x-2 whitespace-nowrap">
                  <IoSearch className="w-5 h-5" />
                  <span className="hidden md:inline">Search</span>
                </button>
              </form>
            </div>

            {/* Right Section */}
            <div className="flex justify-evenly items-center p-2 space-x-4 flex-1">
              <button id="search" onClick={handleSearchModal} className="lg:hidden">
                {isOpen ? <GiCancel size={20} /> : <IoSearch size={20} />}
              </button>

              <div className="flex justify-evenly items-center p-2 space-x-4 flex-1">
                {/* Tooltip for Wishlist */}
                <div className="relative group">
                  <p className="flex items-center">
                    <FaRegHeart size={20} />
                  </p>
                  <span className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Wishlist
                  </span>
                </div>

                {/* Tooltip for Account */}
                <div className="relative group">
                  <p className="flex items-center">
                    <MdOutlineAccountCircle size={25} />
                  </p>
                  <span className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Account
                  </span>
                </div>

                {/* Tooltip for Cart */}
              <Link to={'/cart'}>
                  <div className="relative group">
                    <p className="flex items-center">
                      <CiShoppingCart size={25} />
                      <div className="border bg-yellow-400 rounded-full w-6 flex justify-center absolute top-4 ">
                        <span className="text-sm">{cartItems.length}</span>
                      </div>
                      <span className="font-bold text-xl ml-2">
                        {cartItems.length > 0? `$${updatedPrice.toFixed(2)}` : 'Cart'}
                      </span>
                    </p>
                    <span className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Cart
                    </span>
                  </div>
              </Link>
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div ref={modalRef} className="flex p-4 bg-white border shadow-md">
            <input className="border-4 w-full" type="text" placeholder="Search..." />
            <button className="bg-blue-500 px-4 py-2 text-white">Search</button>
          </div>
        )}
      </div>

      {isOpenSidebar && <SidebarHome sidebarMenu={sidebarMenu} />}
    </main>
  );
}
