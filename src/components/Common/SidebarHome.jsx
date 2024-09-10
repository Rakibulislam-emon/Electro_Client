import icon from '../../assets/icons/menu-button.png'
import { Link } from "react-router-dom"
// eslint-disable-next-line react/prop-types
export default function SidebarHome({sidebarMenu}) {
  return (
    <nav className="bg-white shadow-lg h-screen fixed top-0 left-0 min-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto z-50">
      <ul>
        <li className=' flex justify-between items-center'>
          <Link
            className="text-black hover:text-blue-600 text-[15px]  hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
            Dashboard
          </Link>
          <button onClick={sidebarMenu}>
            <img className='size-4' src={icon} alt="" />
          </button>
        </li>
      </ul>

      <div className="mt-4">
        <h6 className="text-blue-600 text-sm font-bold px-4">Information</h6>
        <ul className="mt-2">
          <li>
            <a
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Audience
            </a>
          </li>
          <li>
            <a
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Posts
            </a>
          </li>
          <li>
            <a
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Schedules
            </a>
          </li>
          <li>
            <a
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Promote
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h6 className="text-blue-600 text-sm font-bold px-4">Income</h6>
        <ul className="mt-2">
          <li>
            <a
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Earnings and taxes
            </a>
          </li>
          <li>
            <a
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Refunds
            </a>
          </li>
          <li>
            <a
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Declines
            </a>
          </li>
          <li>
            <a
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Payouts Details
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h6 className="text-blue-600 text-sm font-bold px-4">Actions</h6>
        <ul className="mt-2">
          <li>
            <a
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Profile
            </a>
          </li>
          <li>
            <a
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
