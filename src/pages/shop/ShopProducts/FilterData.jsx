/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useUser from '../../../hooks/useUser';

export const FilterData = ({ allProducts, filterProducts, searchProducts }) => {
  const navigate = useNavigate();
  const { email } = useUser();
  const [quantity, setQuantity] = useState(1);
  const axiosSecure = useAxiosSecure();
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16); // Default to 16

  // Determine which products to display
  const productsToDisplay = searchProducts.length > 0 ? searchProducts : (filterProducts.length > 0 ? filterProducts : allProducts);

  // Sort products
  const sortedProducts = productsToDisplay.sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  // Calculate total pages
  const totalPages = productsPerPage === 'all' ? 1 : Math.ceil(sortedProducts.length / productsPerPage);

  // Slice products for the current page
  const startIndex = (currentPage - 1) * (productsPerPage === 'all' ? sortedProducts.length : productsPerPage);
  const paginatedProducts = productsPerPage === 'all' ? sortedProducts : sortedProducts.slice(startIndex, startIndex + productsPerPage);

  // Handle add to cart
  const handleAddToCart = async (id) => {
    // Validate by email
    if (!email) {
      toast.error('Please login to add to cart');
      navigate('/my-account');
      return;
    }

    try {
      // Fetch the product details
      const getProduct = await axiosSecure.get(`/api/related_products/${id}`);
      const product = getProduct?.data;

      // If product is not found
      if (!product) {
        toast.error('Failed to find product', {
          position: 'top-right',
          autoClose: 5000,
        });
        return;
      }

      // Destructure the fetched product directly
      const { name, price, image, description, brand, category } = product;
      const infos = {
        email, id, name, price, image, quantity, description, brand, category,
      };

      // Send product data to add to the cart
      const res = await axiosSecure.post(`/api/cart/${id}`, infos);
      console.log(res.data);
      // Success toast
      toast.success('Product added to cart successfully', {
        position: 'top-right',
        autoClose: 5000,
      });
    } catch (err) {
      console.log('err:', err);
      toast.error('Failed to add product to cart', {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="flex-grow p-6 bg-[#f1eded]">
      <div className='lg:flex max-w-2xl'>
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
              <div className="flex justify-between gap-x-4 text-center items-center">
                <Link
                  to={`/product/${product?._id}`}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300 ease-in-out">
                  View Details
                </Link>
                <button
                  onClick={() => handleAddToCart(product._id)}
                  className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-500 transition-all duration-300 ease-in-out">
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
