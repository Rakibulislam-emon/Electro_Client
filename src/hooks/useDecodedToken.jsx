import { jwtDecode } from "jwt-decode";

export default function useDecodedToken() {
 const token =localStorage.getItem('token');
 if (!token) return null;
 return jwtDecode(token);  // Returns decoded token or null if expired or invalid.
}
