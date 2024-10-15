import { Link } from "react-router-dom";
import ProductLocation from "../pages/ProductsDetails/ProductsComponents/ProductLocation";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../components/Loader/Loader";

export default function ViewCartDetails() {
  const axios = useAxiosSecure();

  // Fetch cart items using TanStack Query
  const { data: cartItems = [], refetch, isLoading } = useQuery({
    queryKey: ['cartItems'],
    queryFn: async () => {
      const res = await axios.get('/api/cartItems');
      return res.data;
    },
  });


  // Calculate subtotal dynamically based on the cart items
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.totalPrice || 0), 0);  // Fallback to 0 if totalPrice is null or undefined
  }, [cartItems]);

  // Handle increment
  const handleIncrement = async (id, currentQuantity) => {
    try {
      const newQuantity = currentQuantity + 1;
      const res = await axios.patch(`/api/cartUpdate/${id}`, { quantity: newQuantity });
      if (res.status === 200) {
        refetch(); // Refetch cart items to get updated values
        toast.success('Item quantity updated successfully');
      }
    } catch (error) {
      toast.error('Error updating item quantity: ' + (error.response?.data?.message || error.message));
    }
  };

  // Handle decrement
  const handleDecrement = async (id, currentQuantity) => {
    if (currentQuantity <= 1) {
      toast.error('Quantity cannot be less than 1');
      return;
    }

    try {
      const newQuantity = currentQuantity - 1;
      const res = await axios.patch(`/api/cartUpdate/${id}`, { quantity: newQuantity });
      if (res.status === 200) {
        refetch(); // Refetch cart items to get updated values
        toast.success('Item quantity updated successfully');
      }
    } catch (error) {
      toast.error('Error updating item quantity: ' + (error.response?.data?.message || error.message));
    }
  };

  // Remove items
  const handleRemoveItem = async (id) => {
    try {
      const res = await axios.delete(`/api/cartRemove/${id}`);
      if (res.status === 200) {
        refetch();
        toast.success('Item removed successfully');
      }
    } catch (error) {
      toast.error('Error removing item: ' + (error.response?.data?.message || error.message));
    }
  };

  // Display loading spinner while data is being fetched
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <ProductLocation />
      {/* Add Cart Details */}
      <div className="font-[sans-serif] bg-white h-full">
        <div className="max-w-7xl max-lg:max-w-3xl mx-auto p-6">
          <h2 className="text-3xl font-extrabold text-gray-800">Your Cart</h2>

          <div className="grid lg:grid-cols-3 gap-6 relative mt-8">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map(item => (
                <div key={item._id} className="p-2 bg-white shadow-[0_3px_20px_-10px_rgba(6,81,237,0.4)] rounded-md relative">
                  <div className="grid sm:grid-cols-2 items-center gap-4">
                    <div className="bg-gradient-to-tr from-gray-300 via-gray-100 rounded-md to-gray-50 w-full h-full p-4 shrink-0 text-center">
                      <img src={item.image} alt={item.name} className="w-56 h-full object-contain inline-block" />
                    </div>

                    <div className="p-2">
                      <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                      <ul className="text-sm text-gray-500 space-y-2 list-disc pl-4 mt-3">
                        <li>{item.description}</li>
                        <li>Quantity: {item.quantity}</li>
                      </ul>

                      <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
                        <div className="flex items-center gap-3">
                          <h4 className="text-sm text-gray-500">Qty:</h4>
                          <button
                            type="button"
                            onClick={() => handleDecrement(item._id, item.quantity)}
                            className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
                              <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"></path>
                            </svg>
                          </button>
                          <span className="font-bold text-sm leading-[16px]">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => handleIncrement(item._id, item.quantity)}
                            className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
                              <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"></path>
                            </svg>
                          </button>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-blue-600">
                            ${item.totalPrice ? item.totalPrice.toFixed(2) : '0.00'}  {/* Fallback to 0.00 if totalPrice is null */}
                          </h4>
                        </div>
                      </div>

                      <div className="divide-x border-y grid grid-cols-2 text-center mt-6">
                        <Link to={`/product/${item?._id}`}>
                          <button type="button" className="bg-transparent hover:bg-gray-100 flex items-center justify-center font-semibold py-3 text-gray-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 fill-current mr-3 inline-block" viewBox="0 0 128 128">
                              <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                            </svg>
                            View details
                          </button>
                        </Link>
                        <button
                          onClick={() => handleRemoveItem(item?._id)}
                          type="button" className="bg-transparent hover:bg-gray-100 flex items-center justify-center font-semibold py-3 text-gray-500 text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 fill-current mr-3 inline-block" viewBox="0 0 448 512">
                            <path d="M135.2 17.7L150.5 0h147l15.3 17.7L326.4 32H432v32H16V32h105.6l13.6-14.3zM48 96H400L370.8 480H77.2L48 96z"></path>
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            {/* Summary Section */}
            <div className="bg-white rounded-md shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl">
              <h4 className="text-3xl font-bold text-gray-800 mb-4">Order Summary</h4>

              {/* Subtotal */}
              <div className="flex justify-between mt-4">
                <p className="text-gray-500">Subtotal</p>
                <p className="text-gray-800 font-medium">${subtotal.toFixed(2)}</p>
              </div>

              {/* Shipping Option */}
              <div className="flex justify-between mt-2">
                <p className="text-gray-500">Shipping</p>
                <p className="text-gray-800 font-medium">$5.00</p>
              </div>

              {/* Promo Code Section */}
              <div className="mt-4">
                <label htmlFor="promoCode" className="text-gray-500">Promo Code</label>
                <div className="flex mt-1">
                  <input
                    type="text"
                    id="promoCode"
                    placeholder="Enter promo code"
                    className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-200">
                    Apply
                  </button>
                </div>
              </div>

              <hr className="my-4" />

              {/* Total */}
              <div className="flex justify-between font-bold text-lg text-gray-800">
                <p>Total</p>
                <p>${(subtotal + 5).toFixed(2)}</p> {/* Assuming a flat $5 shipping fee */}
              </div>

              {/* Shipping Option */}
              <div className="flex  justify-between mt-2 text-sm text-gray-500">
                <label>
                  <input  type="radio" name="shipping" value="standard" className="mr-2 " />
                  Standard Shipping (5-7 days) - $5.00
                </label>
                <label>
                  <input type="radio" name="shipping" value="express" className="mr-2" />
                  Express Shipping (1-2 days) - $15.00
                </label>
              </div>

              {/* Proceed to Checkout */}
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition-transform duration-200 transform hover:scale-105">
                Proceed to Checkout
              </button>

              {/* Progress Indicator */}
              <div className="flex justify-center items-center mt-6">
                <div className="h-1 w-1/3 bg-green-600 rounded-full"></div>
                <div className="h-1 w-1/3 bg-gray-300 rounded-full mx-2"></div>
                <div className="h-1 w-1/3 bg-gray-300 rounded-full"></div>
              </div>
              <p className="text-gray-500 text-sm text-center mt-2">Step 1 of 3: Order Summary</p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
