/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";

export default function ProductView({ product }) {
    // Destructure necessary properties from the product prop
    const { name, image, price, ratings = 5, description, availability } = product;
    console.log('ratings:', ratings)

    return (
        <div className="bg-gray-50 py-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Product Image */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{name}</h2>
                        <p className="text-lg text-gray-600 mb-2">Availability: {availability}</p>
                        <div className="flex items-center mb-4">
                            <span className="text-3xl font-bold text-indigo-600 mr-4">${price.toFixed(2)}</span>
                            <span className="text-gray-500 text-lg line-through">${(price * 1.2).toFixed(2)}</span>
                        </div>
                        <div className="flex items-center mb-4">
                            {/* Star Rating */}
                            <ReactStars
                                count={5}
                                value={ratings}
                                size={24}
                                activeColor="#ffd700"
                                isHalf={true}
                                edit={false}
                            />
                            <span className="ml-2 text-gray-700 text-lg">{ratings} ({120} reviews)</span>
                        </div>
                        <p className="text-gray-700 mb-6">{description}</p>

                        <div className="mb-6">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                                Quantity:
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                min="1"
                                defaultValue="1"
                                className="w-24 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>

                        <div className="flex space-x-4">
                            <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6.36 6H19.5"
                                    />
                                </svg>
                                Add to Cart
                            </button>
                            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
