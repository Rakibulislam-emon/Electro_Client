import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useDecodedToken from "./useDecodedToken"

export default function useCartData() {
    const axiosSecure = useAxiosSecure()
    const decodedToken = useDecodedToken()
    const email = decodedToken?.email ?? null
    return useQuery({
        queryKey: ['cartItems', email],
        queryFn: async () => {
            if (!email) {
                return [] // Return empty array if email is not available
            }
            try {
                const response = await axiosSecure.get("/api/cartItems")
                return response.data
            } catch (error) {
                console.log('error:', error)
                throw new Error("Failed to fetch cart data")
            }
        },
        enabled: !!email,
        refetchInterval: 1000 * 60, // Refresh every minute
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });
}
