import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductCard({ info }) {
    // img will be added later
    const { brand,  title, price,image, tags, _id } = info;

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 relative flex flex-col h-full">
            <div className="relative overflow-hidden h-40 sm:h-48 lg:h-56">
                <img className="object-cover w-full h-full" src={image} alt="Product" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <Link to={`/product/${_id}`}> <button className="bg-white text-gray-900 py-2 px-4 sm:py-2.5 sm:px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                   </Link>
                </div>
            </div>
            <div className="flex flex-col flex-grow mt-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h3>
                <p className="text-blue-700 font-semibold text-xs sm:text-sm mt-1">Brand: {`${brand} `}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex items-center justify-between border-t pt-4 sm:pt-6 ">
                    <span className="text-gray-900 font-bold text-base sm:text-lg ">{price}</span>
                    <button className="bg-gray-900 ml-10 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 w-full sm:w-auto mt-2 sm:mt-0 lg:py-1 lg:px-2 lg:w-full ">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
