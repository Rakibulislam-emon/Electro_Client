import { CiShoppingCart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaBusSimple } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function Welcome() {
  return (
    <main className="border-b">
      <div className="flex justify-between mx-auto max-w-screen-2xl  p-4">
        <div>Welcome to Worldwide Electronics Store</div>
        <div className="flex gap-x-10 ">

          <p className="flex items-center "> <CiLocationOn size={20} className="mr-2" /> <span className="border-r-2 pr-2">Store Locator</span></p>
          <p className="flex items-center "><FaBusSimple size={18} className="mr-2 " /><span className="border-r-2 pr-2"> Track Your Order</span></p>
          <p className="flex items-center"><CiShoppingCart size={20} className="mr-2" /> <span className="border-r-2 pr-2">Shop</span></p>
          <p className="flex items-center"><MdOutlineAccountCircle size={20} className="mr-2" /> My Account</p>

        </div>

      </div>
    </main>
  )
}
