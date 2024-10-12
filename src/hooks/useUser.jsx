import { useQuery } from '@tanstack/react-query';
import {jwtDecode} from 'jwt-decode'; // Ensure correct import

export default function useUser() {
  // Function to get and decode the token
  const fetchDecodedToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null; // Return null if no token exists
    try {
      return jwtDecode(token); // Decode the token
    } catch (error) {
      console.log('error:', error)
      return null; // Handle invalid token case
    }
  };

  // Use React Query's useQuery with the object-based API in v5
  const { data: decodedToken, error, isLoading, refetch } = useQuery({
    queryKey: ['user'], // Unique query key
    queryFn: fetchDecodedToken, // Query function to fetch the decoded token
    staleTime: Infinity, // Keep the decoded token "fresh" indefinitely
    cacheTime: Infinity, // Cache the token forever unless explicitly refetched
    refetchOnWindowFocus: false, // Disable automatic refetch on window focus
    retry: false, // Disable retry logic for this query
  });

  // Extract email from decodedToken, or return null if it doesn't exist
  const email = decodedToken?.email ?? null;
  // Return all necessary values and functions
  return { email, decodedToken, isLoading, error, refetch };
}
