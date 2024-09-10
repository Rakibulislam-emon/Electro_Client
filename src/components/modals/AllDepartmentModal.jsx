import { useState, useEffect, useRef } from "react";

export default function AllDepartmentModal() {
  const [activeModal, setActiveModal] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const modalRefs = {
    home: useRef(null),
    shop: useRef(null),
    electronics: useRef(null),
    fashion: useRef(null),
  };

  const handleMouseEnter = (modalName) => {
    setActiveModal(modalName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInside = Object.values(modalRefs).some((ref) =>
        ref.current ? ref.current.contains(event.target) : false
      );

      if (!isClickInside) {
        setActiveModal(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRefs]);

  return (
    <main className="relative  z-[1000]">
      <nav className="bg-white shadow-lg left-0 max-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto">
        <ul>
          <li
            className="flex justify-between items-center"
            onMouseEnter={() => handleMouseEnter("home")}
          >
            <span className="text-black hover:text-blue-600 text-[15px] hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Home
            </span>
          </li>
          <li
            className="flex justify-between items-center"
            onMouseEnter={() => handleMouseEnter("shop")}
          >
            <span className="text-black hover:text-blue-600 text-[15px] hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Shop
            </span>
          </li>
        </ul>

        <div className="mt-4">
          <h6 className="text-blue-600 text-sm font-bold px-4">Categories</h6>
          <ul className="mt-2">
            <li onMouseEnter={() => handleMouseEnter("electronics")}>
              <span className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
                Electronics
              </span>
            </li>
            <li onMouseEnter={() => handleMouseEnter("fashion")}>
              <span className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
                Fashion
              </span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Modals */}
      {activeModal === "home" && (
        <div
          ref={modalRefs.home}
          className="absolute left-60 block bottom-20 w-[300px] bg-white shadow-lg p-4"
        >
          <h3 className="text-xl font-bold">Home Modal</h3>
          <ul>
            <li>links</li>
            <li>links</li>
            <li>links</li>
            <li>links</li>
            <li>links</li>
          </ul>

        </div>
      )}
      {activeModal === "shop" && (
        <div
          ref={modalRefs.shop}
          className="absolute left-60 block bottom-20 w-[300px] bg-white shadow-lg p-4"
        >
          <h3 className="text-xl font-bold">Shop Modal</h3>
          <ul>
            <li>links</li>
            <li>links</li>
            <li>links</li>
            <li>links</li>
            <li>links</li>
          </ul>

        </div>
      )}
      {activeModal === "electronics" && (
        <div
          ref={modalRefs.electronics}
          className="absolute left-60 block bottom-10 w-[300px] bg-white shadow-lg p-4"
        >
          <h3 className="text-xl font-bold">Electronics Modal</h3>
          <ul>
            <li>links</li>
            <li>links</li>
            <li>links</li>
            <li>links</li>
            <li>links</li>
          </ul>

        </div>
      )}
      {activeModal === "fashion" && (
        <div
          ref={modalRefs.fashion}
          className="absolute left-60 block bottom-0 w-[300px] bg-white shadow-lg p-4"
        >
          <h3 className="text-xl font-bold">Fashion Modal</h3>
          <ul>
            <li>links</li>
            <li>links</li>
            <li>links</li>
            <li>links</li>
            <li>links</li>
          </ul>

        </div>
      )}
    </main>
  );
}
