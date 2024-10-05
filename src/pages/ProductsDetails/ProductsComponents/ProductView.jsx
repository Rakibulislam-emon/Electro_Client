/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
export default function ProductView({ product }) {

    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(false); // Loading state for adding to cart
    const [success, setSuccess] = useState(false); // Success state for adding to cart
    const [error, setError] = useState(null); // Error handling state

    const { name, image, price, ratings = 5, description, availability, _id, brand, category } = product;

    // Handle add to cart functionality
    const handleAddToCart = async (id) => {
        try {
            setIsLoading(true);
            const res = await axiosSecure.post(`/api/cart/${id}`, {
                productId: id,
                name,
                price,
                image,
                quantity,
                description,
                brand,
                category
            });

            setIsLoading(false);

            // Check if the response status is 201 for success
            if (res.status === 201) {
                setSuccess(true);
                // toast.success("Product added to cart successfully.");
            } else {
                // Handle the case where it's not a successful status
                toast.error("Failed to add product to cart.");
            }
            if (res.status === 401) {
                toast.error("You must be logged in to add products to the cart.");
            }
        } catch (error) {
            setIsLoading(false);
            // Check if the error response indicates a 401 Unauthorized
            if (error.response && error.response.status === 401) {
                toast.error("You must be logged in to add products to the cart.");
                // Optionally, navigate to the login page
                navigate('/my-account');
            } else {
                setError(error.message);
                toast.error("Error adding product to cart.");
            }
        }
    };

    // Handle quantity increment
    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    // Handle quantity decrement
    const decrementQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <div className="bg-gray-50 py-8">
            <div className="container mx-auto px-4 md:px-8">
                {success && <div>
                    <div className="w-full border h-20 bg-green-400 rounded-lg p-2 my-2 flex justify-around items-center">
                        <p className="text-2xl">{name}  has been added to cart</p>

                        <Link to="/cart" className="flex justify-center items-center">
                            <p className="text-2xl border-l border-black pl-2">
                                view cart
                            </p>
                            <FaArrowRight className="text-2xl ml-2" />
                        </Link>

                    </div>
                </div>}
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Product Image */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-auto rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
                        />
                    </div>


                    {/* Product Details */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">

                        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{name}</h2>
                        <p className={`text-lg mb-2 ${availability ? "text-green-600" : "text-red-600"}`}>
                            {availability ? "In Stock" : "Out of Stock"}
                        </p>
                        <div className="flex items-center mb-4">
                            <span className="text-3xl font-bold text-indigo-600 mr-4">${price.toFixed(2)}</span>
                            <span className="text-gray-500 text-lg line-through">${(price * 1.2).toFixed(2)}</span>
                        </div>
                        <div className="flex items-center mb-4">
                            {/* Star Rating */}
                            <ReactStars count={5} value={ratings} size={24} activeColor="#ffd700" isHalf={true} edit={false} />
                            <span className="ml-2 text-gray-700 text-lg">{ratings} ({120} reviews)</span>
                        </div>
                        <p className="text-gray-700 mb-6">{description}</p>

                        <div className="mb-6 flex items-center">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mr-4">
                                Quantity:
                            </label>
                            <div className="flex items-center border rounded-md overflow-hidden">
                                <button
                                    onClick={decrementQuantity}
                                    className="bg-gray-200 text-gray-800 px-4 py-2 focus:outline-none hover:bg-gray-300 transition duration-300"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    min="1"
                                    value={quantity}
                                    readOnly
                                    className="w-16 text-center border-none focus:outline-none"
                                />
                                <button
                                    onClick={incrementQuantity}
                                    className="bg-gray-200 text-gray-800 px-4 py-2 focus:outline-none hover:bg-gray-300 transition duration-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Error message */}
                        {error && <p className="text-red-600 mb-4">{error}</p>}

                        <div className="flex space-x-4">
                            {/* Add to Cart Button */}
                            <button
                                onClick={() => handleAddToCart(_id)}
                                disabled={isLoading || !availability}
                                className={`bg-indigo-600 flex gap-2 items-center text-white px-6 py-3 rounded-md 
                                    ${!availability ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"}
                                    transition duration-300`}
                            >
                                {isLoading ? "Adding..." : "Add to Cart"}
                            </button>

                            {/* Buy Now Button */}
                            <Link to={`/cart`}>
                                <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-300">
                                    Buy Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
