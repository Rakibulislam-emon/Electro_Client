import { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/icons/menu-button.png';
import AllDepartmentModal from '../modals/AllDepartmentModal';

export default function AllDepartments() {
    const [isOpen, setIsOpen] = useState(true);
    const handleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="max-w-screen-2xl   lg:mb-10 mx-auto lg:block hidden z-[10000] max-h-10">
            <div className="flex justify-between items-center bg-gray-100 py-4 px-6  rounded-lg shadow-md">
                {/* Browse All Departments Section */}
                <div className="flex items-center gap-x-4">
                    <button onClick={handleModal} className="hover:scale-110 transition-transform duration-300">
                        <img className="w-6 h-6" src={icon} alt="Menu Icon" />
                    </button>
                    <span className="text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                        Browse All Departments
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="items-center  max-w-screen-sm w-full  flex justify-between">
                    {/* Highlighted Shop Now link */}
                    <Link
                        to={'/shop'}
                        className="text-white font-bold text-3xl  bg-red-600 py-2 px-4 rounded-full shadow-lg border-b-4 border-red-700 hover:bg-red-700 hover:border-red-900 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        Shop Now
                    </Link>

                    {/* Featured Products Link */}
                    <a
                        href="#FeaturedProducts"
                        className="text-lg font-semibold  text-gray-700 hover:text-green-500 hover:bg-green-50 py-1 px-2 rounded-lg transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4"
                    >
                        Featured Products
                    </a>

                    {/* Best Deals Link */}
                    <a
                        href="#best-deals"
                        className="text-lg font-semibold   text-gray-700 hover:text-green-500 hover:bg-green-50 py-1 px-2 rounded-lg transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4"
                    >
                        Best Deals
                    </a>

                    {/* Latest Products Link */}
                    <a
                        href="#latest-Product"
                        className="text-lg font-semibold  text-gray-700 hover:text-green-500 hover:bg-green-50 py-1 px-2 rounded-lg transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4"
                    >
                        Latest Products
                    </a>
                </div>



                {/* Free Shipping Notice */}
                <div className="text-lg font-semibold text-green-600 bg-white px-4 py-2 rounded-lg shadow-sm hover:bg-green-50 transition-colors">
                    Enjoy Free Shipping on Orders Over $50!
                </div>
            </div>

            {/* Modal for All Departments */}
            {isOpen && <AllDepartmentModal />}
        </main>
    );
}
