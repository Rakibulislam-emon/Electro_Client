/* eslint-disable react/prop-types */
import { useState, useMemo } from 'react';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import PriceRangeSlider from './PriceRangeSlider ';

const Filter = ({ setFilterProducts, setAllProducts }) => {
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [minPrice, setMinPrice] = useState(0); // Set initial min price
  const [maxPrice, setMaxPrice] = useState(5000); // Set initial max price
  const [availability, setAvailability] = useState('');
  const [tags, setTags] = useState('');
  const [warranty, setWarranty] = useState('');

  const axios = useAxios();
  const { data: allProducts = [] } = useQuery({
    queryKey: ['allProducts'],
    queryFn: async () => {
      const response = await axios.get('/api/allProducts');
      setAllProducts(response.data); // Update the global state with the fetched data
      return response.data;
    },
  });

  // Extract dynamic filter options using useMemo to avoid recalculating on each render
  const uniqueCategories = useMemo(() => [...new Set(allProducts.map(product => product.category))], [allProducts]);
  const uniqueBrands = useMemo(() => [...new Set(allProducts.map(product => product.brand))], [allProducts]);
  const uniqueTags = useMemo(() => [...new Set(allProducts.flatMap(product => product.tags))], [allProducts]);
  const uniqueWarranty = [...new Set(allProducts
    .map((product) => product.warranty)
    .filter((warranty) => warranty !== undefined && warranty !== null))];

  // Handle filter click to send data to backend
  const handleFilter = async () => {
    const filterSearch = {
      category,
      brand,
      minPrice,
      maxPrice,
      availability,
      tags,
      warranty,
    };
    try {
      const queryString = new URLSearchParams(filterSearch).toString();
      const res = await axios.get(`/api/products?${queryString}`);
      setFilterProducts(res.data);
    } catch (error) {
      console.log('error:', error);
    }
  };

  // Handle price range change from the PriceRangeSlider component
  const handlePriceChange = ([min, max]) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <div className="bg-[#f1eded] p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Filter Products</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Category</label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {uniqueCategories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Brand</label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          {uniqueBrands.map((brand, idx) => (
            <option key={idx} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <PriceRangeSlider
        minPrice={minPrice}
        maxPrice={maxPrice}
        onPriceChange={handlePriceChange} // Pass the handler to update min and max price
      />

      {/* Availability Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Availability</label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        >
          <option value="">Any Availability</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

      {/* Tags Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Tags</label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        >
          <option value="">All Tags</option>
          {uniqueTags.map((tag, idx) => (
            <option key={idx} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Warranty Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Warranty</label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={warranty}
          onChange={(e) => setWarranty(e.target.value)}
        >
          <option value="">All Warranty</option>
          {uniqueWarranty.map((warranty, idx) => (
            <option key={idx} value={warranty}>
              {warranty}
            </option>
          ))}
        </select>
      </div>

      {/* Filter Button */}
      <button
        className="w-full bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-500 focus:outline-none"
        onClick={handleFilter}
      >
        Apply Filters
      </button>

      <div>
        
      </div>
    </div>
  );
};

export default Filter;
