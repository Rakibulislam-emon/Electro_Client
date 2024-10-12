// import { Link } from "react-router-dom";
// import ProductLocation from "../pages/ProductsDetails/ProductsComponents/ProductLocation";
// import { useQuery } from "@tanstack/react-query";
// import { useMemo } from "react";
// import { toast } from "react-hot-toast";
// import useAxiosSecure from "../hooks/useAxiosSecure";

// export default function ViewCartDetails() {
//   const axios = useAxiosSecure();

//   // Fetch cart items using TanStack Query
//   const { data: cartItems = [], refetch } = useQuery({
//     queryKey: ['cartItems'],
//     queryFn: async () => {
//       const res = await axios.get('/api/cartItems');
//       return res.data;
//     },
//   });
//  console.log(cartItems);
//   // Calculate subtotal dynamically based on the cart items
//   const subtotal = useMemo(() => {
//     return cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
//   }, [cartItems]);
//   // handle increment
//   const handleIncrement = async (id, currentQuantity) => {
//     try {
//       const newQuantity = currentQuantity + 1;
//       const res = await axios.patch(`/api/cartUpdate/${id}`, { quantity: newQuantity });
//       if (res.status === 200) {
//         refetch(); // Refetch cart items to get updated values
//         toast.success('Item quantity updated successfully');
//       }
//     } catch (error) {
//       toast.error('Error updating item quantity: ' + (error.response?.data?.message || error.message));
//     }
//   };
//   // handle decrement

//   const handleDecrement = async (id, currentQuantity) => {
//     if (currentQuantity <= 1) {
//       toast.error('Quantity cannot be less than 1');
//       return;
//     }

//     try {
//       const newQuantity = currentQuantity - 1;
//       const res = await axios.patch(`/api/cartUpdate/${id}`, { quantity: newQuantity });
//       if (res.status === 200) {
//         refetch(); // Refetch cart items to get updated values
//         toast.success('Item quantity updated successfully');
//       }
//     } catch (error) {
//       toast.error('Error updating item quantity: ' + (error.response?.data?.message || error.message));
//     }
//   };


//   // Remove items
//   const handleRemoveItem = async (id) => {
//     try {
//       const res = await axios.delete(`/api/cartRemove/${id}`);
//       if (res.status === 200) {
//         refetch();
//         toast.success('Item removed successfully');
//       }
//     } catch (error) {
//       toast.error('Error removing item: ' + (error.response?.data?.message || error.message));
//     }
//   };

//   return (
//     <div>
//       <ProductLocation />
//       {/* Add Cart Details */}
//       <div className="font-[sans-serif] bg-white h-full">
//         <div className="max-w-7xl max-lg:max-w-3xl mx-auto p-6">
//           <h2 className="text-3xl font-extrabold text-gray-800">Your Cart</h2>

//           <div className="grid lg:grid-cols-3 gap-6 relative mt-8">
//             <div className="lg:col-span-2 space-y-6">
//               {cartItems.map(item => (
//                 <div key={item._id} className="p-2 bg-white shadow-[0_3px_20px_-10px_rgba(6,81,237,0.4)] rounded-md relative">
//                   <div className="grid sm:grid-cols-2 items-center gap-4">
//                     <div className="bg-gradient-to-tr from-gray-300 via-gray-100 rounded-md to-gray-50 w-full h-full p-4 shrink-0 text-center">
//                       <img src={item.image} alt={item.name} className="w-56 h-full object-contain inline-block" />
//                     </div>

//                     <div className="p-2">
//                       <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//                       <ul className="text-sm text-gray-500 space-y-2 list-disc pl-4 mt-3">
//                         <li>{item.description}</li>
//                         <li>Quantity: {item.quantity}</li>
//                       </ul>

//                       <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
//                         <div className="flex items-center gap-3">
//                           <h4 className="text-sm text-gray-500">Qty:</h4>
//                           <button
//                             type="button"
//                             onClick={() => handleDecrement(item._id, item.quantity)}
//                             className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
//                               <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"></path>
//                             </svg>
//                           </button>
//                           <span className="font-bold text-sm leading-[16px]">{item.quantity}</span>
//                           <button
//                             type="button"
//                             onClick={() => handleIncrement(item._id, item.quantity)}
//                             className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
//                               <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"></path>
//                             </svg>
//                           </button>
//                         </div>

//                         <div>
//                           <h4 className="text-lg font-bold text-blue-600">${item.totalPrice.toFixed(2)}</h4>
//                         </div>
//                       </div>

//                       <div className="divide-x border-y grid grid-cols-2 text-center mt-6">
//                         <Link to={`/product/${item?._id}`}>
//                           <button type="button" className="bg-transparent hover:bg-gray-100 flex items-center justify-center font-semibold py-3 text-gray-500 text-sm">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 fill-current mr-3 inline-block" viewBox="0 0 128 128">
//                               <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
//                             </svg>
//                             View details
//                           </button>
//                         </Link>
//                         <button
//                           onClick={() => handleRemoveItem(item?._id)}
//                           type="button" className="bg-transparent hover:bg-gray-100 flex items-center justify-center font-semibold py-3 text-gray-500 text-sm">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current mr-3 inline-block" viewBox="0 0 390 390">
//                             <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 10.579 11.375 27.048 3.554 38.031L50.497 303.497c-10.694 10.705-10.694 28.097 0 38.802a30.375 30.375 0 0 0 21.894 9.284c7.417 0 14.879-2.835 20.888-8.428L261.104 163.692c11.633-11.632 30.645-11.36 41.274 0 10.545 10.705 10.545 27.944 0 38.658L71.457 347.396c-10.696 10.705-28.104 10.705-38.8 0-11.774-11.844-11.774-30.973 0-42.817L291.663 20.672c12.024-11.482 30.688-11.296 42.261 1.34 11.775 11.844 11.775 30.973 0 42.817L56.047 307.105c-10.694 10.705-10.694 28.097 0 38.802a30.375 30.375 0 0 0 21.894 9.284c7.417 0 14.879-2.835 20.888-8.428l38.25-38.25c11.633-11.632 11.36-30.645 0-41.274-11.633-11.632-30.645-11.36-41.274 0l-30.391 30.391a30.375 30.375 0 0 1-21.894 9.284z"></path>
//                           </svg>
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Display subtotal and checkout button */}
//             {/* Order Summary */}
//             <div className="bg-white h-max rounded-md p-4 shadow-[0_3px_20px_-10px_rgba(6,81,237,0.4)] sticky top-0">
//               <h3 className="text-lg font-bold text-gray-800">Order Summary</h3>
//               <ul className="text-gray-500 text-sm space-y-3 mt-3">
//                 <li className="flex flex-wrap gap-4">Subtotal <span className="ml-auto font-bold">${subtotal.toFixed(2)}</span></li>
//                 <li className="flex flex-wrap gap-4">Shipping <span className="ml-auto font-bold">Free</span></li>
//               </ul>

//               <div className="border-t border-b py-2 mt-3">
//                 <p className="flex items-start text-sm text-gray-800 font-semibold">Order Total
//                   <span className="ml-auto font-bold text-base">${subtotal.toFixed(2)}</span>
//                 </p>
//               </div>

//               <button type="button" className="bg-blue-600 text-white hover:bg-blue-700 rounded-md w-full text-center py-3 font-bold text-sm transition-all mt-4">Proceed to Checkout</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




export default function ViewCartDetails() {
  return (
    <div>ViewCartDetails</div>
  )
}
