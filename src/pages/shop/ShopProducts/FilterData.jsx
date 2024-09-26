/* eslint-disable react/prop-types */
import { useState } from 'react';

export const FilterData = ({ allProducts, filterProducts }) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16); // Default to 16

  // Function to sort products
  const sortedProducts = (filterProducts.length > 0 ? filterProducts : allProducts).sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  // Calculate total pages
  const totalPages = productsPerPage === 'all' ? 1 : Math.ceil(sortedProducts.length / productsPerPage);

  // Slice products for the current page
  const startIndex = (currentPage - 1) * (productsPerPage === 'all' ? sortedProducts.length : productsPerPage);
  const paginatedProducts = productsPerPage === 'all' ? sortedProducts : sortedProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="flex-grow p-6 bg-[#f1eded]">
      <div className='lg:flex  max-w-2xl'>
        {/* Sort Order Filter */}
        <div className="mb-4 w-full">
          <label className="block text-gray-700 font-semibold mb-2">Sort Order</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        <div className='w-full mb-4'>
          {/* Option for selecting number of products per page */}
          <label className="block text-gray-700 font-semibold mb-2">Products per page</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            value={productsPerPage}
            onChange={(e) => {
              setProductsPerPage(e.target.value);
              setCurrentPage(1); // Reset to page 1 whenever products per page changes
            }}
          >
            <option value={16}>16</option>
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value="all">All</option>
          </select>
        </div>
      </div>

      {/* Display Paginated Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
  {paginatedProducts.map((product) => (
    <div
      key={product._id}
      className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover hover:opacity-90 transition-opacity duration-300"
      />
      <div className="p-6">
        <h5 className="text-xl font-bold text-gray-800">{product.name}</h5>
        <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
        <p className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
        <p className="text-sm text-yellow-500 mb-4">{product.ratings} Stars</p>
        <p className="text-gray-700 text-sm line-clamp-3 mb-4">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300 ease-in-out">
            View Details
          </button>
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-500 transition-all duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Pagination Controls */}
      {productsPerPage !== 'all' && (
        <div className="flex justify-center mt-4">
          <button
            className={`px-4 py-2 bg-blue-600 text-white rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2">{currentPage} of {totalPages}</span>
          <button
            className={`px-4 py-2 bg-blue-600 text-white rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
