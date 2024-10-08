import { CiShoppingCart } from "react-icons/ci";
import {Link} from "react-router-dom"
import { CiLocationOn } from "react-icons/ci";
import { FaBusSimple } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import {  useTypewriter } from 'react-simple-typewriter'

export default function Welcome() {

  const [text] = useTypewriter({
    words: ['to Worldwide Electronics Store!'],
    loop: 0
  })
  return (
    <main className="border-b">
      <div className="flex justify-between mx-auto max-w-screen-2xl  p-4">
        <div>Welcome  {text}</div>
        <div className="flex gap-x-10 ">

          <p className="flex items-center "> <CiLocationOn size={20} className="mr-2" /> <span className="border-r-2 pr-2">Store Locator</span></p>
          <p className="flex items-center "><FaBusSimple size={18} className="mr-2 " /><span className="border-r-2 pr-2"> Track Your Order</span></p>
          <p className="flex items-center"><CiShoppingCart size={20} className="mr-2" /> <span className="border-r-2 pr-2">Shop</span></p>
         <Link to={'/my-account'}>
            <p className="flex items-center"><MdOutlineAccountCircle size={20} className="mr-2" /> My Account</p>
  
         </Link>
        </div>

      </div>
    </main>
  )
}
