import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";

export default function SearchBar() {
  const axios = useAxios();
  const navigate = useNavigate();

  // Fetch categories from all products using tanstack query
  const { data, isLoading, error } = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      try {
        const res = await axios.get('/api/allProducts');
        return res.data;
      } catch (error) {
        console.error("Error fetching best deals: ", error);
        return []
      }
    }
  });

  // Extract unique categories
  const categories = data ? [...new Set(data.map(item => item.category))] : [];

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get('/api/search', {
      params: {
        search: searchTerm,
        category: category === "all" ? null : category,
      }
    })
    const searchResults = response.data
    if (searchResults.length === 0) {
      return toast.error('No results found for your search. Please try a different term.');
    }
    navigate("/shop", { state: { products: searchResults } });

    setSearchTerm(""); // Clear search input after submission
    setCategory("all"); // Reset category to default
  };

  // Handle loading and error states
  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories.</p>;

  return (
    <div className="flex-1 max-w-screen-md mx-auto mt-2 lg:block hidden">
      <form
        onSubmit={handleSearchSubmit}
        className="w-full border-[#fed72f] border rounded-full flex items-center"
      >
        <div className="relative flex-1">
          <input
            type="search"
            id="search-dropdown"
            className="w-full p-2 pr-20 text-sm border-[#fed72f] rounded-l-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-[#fed72f] transition duration-300 ease-in-out dark:border-[#fed72f] dark:focus:ring-yellow-400"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={handleSearchChange}
            required
          />
        </div>

        <div className="relative w-1/4">
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full p-2 text-sm text-gray-900 bg-gray-50 border-[#fed72f] shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out dark:border-[#fed72f] dark:focus:ring-yellow-400"
          >
            <option value="all">All Categories</option>
            {/* Dynamically render category options */}
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <button className="bg-[#fed72f] rounded-r-full px-4 py-2 flex items-center gap-x-2 whitespace-nowrap">
          <IoSearch className="w-5 h-5" />
          <span className="hidden md:inline">Search</span>
        </button>
      </form>
    </div>
  );
}
