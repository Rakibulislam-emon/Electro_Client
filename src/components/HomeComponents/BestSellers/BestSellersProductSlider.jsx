import { useState } from 'react';
import useAxios from '../../../hooks/useAxios'
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';

export default function BestSellersProductSlider() {
    const axios = useAxios()
    // get all products
    const { data: bestSells = [] } = useQuery({
        queryKey: ['BestSells'],
        queryFn: async () => {
            const response = await axios.get('/api/bestSells')
            return response.data
        },
    })



    const itemsPerPage = 6; // Now showing 6 items per page for better row distribution
    const [currentPage, setCurrentPage] = useState(1); // Current page state

    // Calculate the total number of pages
    const totalPages = Math.ceil(bestSells.length / itemsPerPage);

    // Get the products to display for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = bestSells.slice(indexOfFirstItem, indexOfLastItem);

    // Handle next and previous page navigation
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            {/* Display current products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-8">
                {currentItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <Link to={`/product/${item._id}`}>
                                    <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                                        View Product
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{item.name}</h3>
                            <p className="text-gray-600 text-lg font-medium mb-4">${item.price.toFixed(2)}</p>
                            <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>


            {/* Pagination Controls */}
            <div className="flex justify-center mt-10">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mx-2 rounded-lg ${currentPage === 1 ? 'bg-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                    Previous
                </button>
                <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 mx-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                    Next
                </button>
            </div>
        </div>
    );
}

