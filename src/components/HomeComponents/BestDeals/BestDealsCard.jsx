import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
 import { toast } from'react-hot-toast';
// import useDecodedToken from "../../../hooks/useDecodedToken";
import { useState } from "react";
/* eslint-disable react/prop-types */

export default function BestDealsCard({ info }) {
    const navigate = useNavigate()

    const { email, refetch ,  } = useUser();

   const axiosSecure = useAxiosSecure()
//    // initial quantity
    const [quantity, setQuantity] = useState(1);

    const { brand, title, price, image, tags, _id, description,category } = info;
    // handle add to cart

    const handleAddToCart = async (id) => {
        // check validity by email
        if (!email) {
            toast.error("You must be logged in to add products to the cart.");
            navigate(
                '/my-account'
            )
            return;
        }

        const data = {
          email,  id, name, price, image, quantity , description, brand, category, 
        }
        try {
            const res = await axiosSecure.post(`/api/cart/${id}`,data)

             // Check if the response status is 201 for success
             if (res.status === 201) {
                // refetch the cart data
                refetch()
                toast.success('Product added to cart successfully', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            } else {
                // Handle the case where it's not a successful status
                toast.error("Failed to add product to cart.");
            }
            if (res.status === 401) {
                toast.error("You must be logged in to add products to the cart.");
            }
             
        } catch (err) {
              console.log('err:', err)
              toast.error('Failed to add product to cart', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }


    }

    return (
        <div className="w-full space-y-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
            
          <Link to={`/product/${_id}`}>
                <div className="relative flex h-48 w-full justify-center lg:h-[260px] rounded-lg overflow-hidden border">
                    <img
                        width={400}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                        src={image}
                        alt={title}
                    />
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        {/* Love Icon */}
                        <div className="flex items-center cursor-pointer">
                            <svg
                                width={30}
                                className="fill-transparent stroke-gray-600 stroke-2 hover:fill-red-500 hover:stroke-red-500 transition-colors duration-200"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
          </Link>
            <div className="flex-grow px-4 space-y-2">
                <h6 className="text-lg font-semibold text-gray-800">{title}</h6>
                <p className="text-sm font-semibold text-gray-500">Brand: {brand}</p>
                <p className="text-xl font-bold text-gray-900">${price}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex  p-2 lg:justify-between mt-4  pb-4">
                <Link to={`/product/${_id}`}>
                    <button className="flex-grow bg-[#3B82F6] py-2 font-semibold text-white rounded-lg shadow-md transition duration-300 hover:bg-[#2563EB] hover:shadow-lg px-2 lg:w-28 ">
                        View Details
                    </button>
                </Link>
                <button 
                    onClick={()=> handleAddToCart(_id)}
                className="flex-grow bg-[#10B981] py-2 font-semibold text-white rounded-lg  transition duration-300 hover:bg-[#059669] hover:shadow-lg shadow-md  ml-2">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
