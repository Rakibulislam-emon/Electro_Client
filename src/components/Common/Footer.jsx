import AllRightReserved from "../HomeComponents/AllRightReserved/AllRightReserved"
export default function Footer() {
  return (
   <main>
      <footer className="bg-[#f2eded] py-12 px-10 font-sans tracking-wide">
  <div className="lg:max-w-[50%] mx-auto text-center">
    <h3 className="text-3xl font-bold text-gray-800">Newsletter</h3>
    <p className="text-sm mt-6 text-gray-500">
      Subscribe to our newsletter and stay updated with the latest electronics, exclusive offers, and new product launches. Join our community today!
    </p>

    <div className="bg-[#dddddd] flex px-2 py-1.5 rounded-full text-left mt-10">
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="w-full outline-none bg-transparent text-sm pl-4" 
      />
      <button 
        type="button"
        className="bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-full px-5 py-2.5 ml-4 transition-all"
      >
        Submit
      </button>
    </div>
  </div>

  <hr className="border-gray-300 my-12" />

  <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
    <div>
      <h4 className="text-lg font-bold mb-6 text-gray-800">About Electro</h4>
      <p className="text-gray-500 mb-2 text-sm">
        Electro brings you the best electronics at unbeatable prices. From the latest gadgets to top-notch customer service, we are here to power your tech needs.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold mb-6 text-gray-800">Categories</h4>
      <ul className="space-y-4">
        <li><a href="#" className="text-gray-500 hover:text-gray-800 text-[15px]">Laptops</a></li>
        <li><a href="#" className="text-gray-500 hover:text-gray-800 text-[15px]">Mobile Phones</a></li>
        <li><a href="#" className="text-gray-500 hover:text-gray-800 text-[15px]">Headphones</a></li>
        <li><a href="#" className="text-gray-500 hover:text-gray-800 text-[15px]">Monitors</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-bold mb-6 text-gray-800">Customer Support</h4>
      <ul className="space-y-4">
        <li><a href="#" className="text-gray-500 hover:text-gray-800 text-[15px]">Help Center</a></li>
        <li><a href="#" className="text-gray-500 hover:text-gray-800 text-[15px]">Shipping & Returns</a></li>
        <li><a href="#" className="text-gray-500 hover:text-gray-800 text-[15px]">Warranty</a></li>
        <li><a href="#" className="text-gray-500 hover:text-gray-800 text-[15px]">FAQs</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-bold mb-6 text-gray-800">Company</h4>
      <ul className="space-y-4">
        <li><a href="#" className="text-gray-500 hover:text-gray-800 text-[15px]">About Us</a></li>
        <li><a href="#" className="text-gray-500 hover:text-gray-800 text-[15px]">Our Mission</a></li>
        <li><a href="#" className="text-gray-500 hover:text-gray-800 text-[15px]">Careers</a></li>
        <li><a href="#" className="text-gray-500 hover:text-gray-800 text-[15px]">Contact Us</a></li>
      </ul>
    </div>
  </div>
</footer>

      <AllRightReserved/>
   </main>
  )
}
