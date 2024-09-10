import  { useState } from 'react';
import demo from '../../../assets/gamingConsole/consal-300x300.png'; // Demo image import

export default function BestSellersProductSlider() {
    const data = [
        { "name": "iPhone 13 Pro", "price": 999, "tags": ["smartphone", "Apple", "iOS", "5G"] },
        { "name": "Samsung Galaxy S21", "price": 799, "tags": ["smartphone", "Android", "Samsung", "5G"] },
        { "name": "Dell XPS 13", "price": 1200, "tags": ["laptop", "Windows", "Dell", "ultrabook"] },
        { "name": "MacBook Air M1", "price": 999, "tags": ["laptop", "Apple", "macOS", "M1 chip"] },
        { "name": "Sony Alpha A7 III", "price": 1999, "tags": ["camera", "Sony", "mirrorless", "4K video"] },
        { "name": "Bose QC 35 II", "price": 299, "tags": ["headphones", "Bose", "noise-canceling", "Bluetooth"] },
        { "name": "iPad Pro", "price": 1099, "tags": ["tablet", "Apple", "iOS", "ProMotion"] },
        { "name": "Google Pixel 6", "price": 599, "tags": ["smartphone", "Google", "Android", "5G"] },
        { "name": "Sony WH-1000XM4", "price": 349, "tags": ["headphones", "Sony", "noise-canceling", "Bluetooth"] },
        { "name": "Asus ROG Zephyrus", "price": 1499, "tags": ["laptop", "gaming", "Asus", "Windows", "RTX 3060"] }
    ];

    const itemsPerPage = 6; // Now showing 6 items per page for better row distribution
    const [currentPage, setCurrentPage] = useState(1); // Current page state

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Get the products to display for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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
            <h2 className="text-center text-3xl font-bold mb-8">Best Sellers</h2>

            {/* Display current products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentItems.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                        <img 
                            src={demo} 
                            alt={item.name} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-gray-700 text-lg font-medium mb-4">${item.price}</p>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">View Product</button>
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

