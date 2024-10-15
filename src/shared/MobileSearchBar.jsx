import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5'; // Import the search icon if needed
import { useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import toast from 'react-hot-toast';

// eslint-disable-next-line react/prop-types
export default function MobileSearchBar({ modalRef }) {
    const axios = useAxios()
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
    
        const response = await axios.get('/api/search', {
          params: {
            search: searchTerm,
          }
        })
        const searchResults = response.data
        if (searchResults.length === 0) {
          return toast.error('No results found for your search. Please try a different term.');
      }
        navigate("/shop", { state: { products: searchResults } });
    
        setSearchTerm(""); // Clear search input after submission
      };

    return (
        <div ref={modalRef} className="flex p-4 bg-white border shadow-md">
            <form onSubmit={handleSearchSubmit} className="flex items-center w-full">
                <input
                    className="border-4 border-black w-full p-2 rounded-l-md"
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    required
                />
                <button type="submit" className="bg-blue-500 px-4 py-2 text-white flex items-center gap-x-2 rounded-md">
                    <IoSearch className="w-5 h-5" />
                    Search
                </button>
            </form>
        </div>
    );
}
