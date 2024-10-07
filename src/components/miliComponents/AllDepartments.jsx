import { useState } from 'react'
import { Link } from 'react-router-dom';
import icon from '../../assets/icons/menu-button.png'
import AllDepartmentModal from '../modals/AllDepartmentModal'
export default function AllDepartments() {

    const [isOpen, setIsOpen] = useState(true)
    const handleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <main className="max-w-screen-2xl lg:mb-10 mx-auto lg:block hidden z-[10000] max-h-10">
        <div className="flex justify-between">
            <div className="max-w-screen-2xl w-full flex justify-between">
                <p className="flex items-center gap-x-2 p-4">
                    <button onClick={handleModal}>
                        <img className="size-4" src={icon} alt="Menu Icon" />
                    </button>
                    <span className="text-lg font-semibold">Browse All Departments</span>
                </p>
                <div className="items-center max-w-screen-sm w-full flex justify-between">
                    <Link to={'/shop'} className="text-red-600 font-bold border-b-4 border-red-500 text-3xl hover:text-red-800 transition duration-300">Shop Now</Link>
                    <a href="#FeaturedProducts" className="text-lg ">Featured Products</a>
                    <a href='#best-deals' className="text-lg ">Best Deals</a>
                    <a href='#latest-Product' className="text-lg ">Latest Products</a>
                </div>
            </div>
            <div className="items-center max-w-screen-sm flex justify-center w-full text-lg font-semibold text-green-600 ">
                Enjoy Free Shipping on Orders Over $50!
            </div>
        </div>
    
        {isOpen && <AllDepartmentModal />}
    </main>
    
    )
}
