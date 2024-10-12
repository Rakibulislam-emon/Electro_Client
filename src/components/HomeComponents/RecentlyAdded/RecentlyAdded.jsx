import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from "@tanstack/react-query";
import useUser from '../../../hooks/useUser';
// import useDecodedToken from '../../../hooks/useDecodedToken';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import Loader from '../../Loader/Loader';

export default function RecentlyAdded() {

  // loading state
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const { email, refetch ,isLoading } = useUser();
// todo for temporary comment out
  // const { email } = useDecodedToken()
  const [quantity, setQuantity] = useState(1);
  const axiosSecure = useAxiosSecure()


  // get all products
  const axios = useAxios()
  // get all products
  const { data: allProducts = [] } = useQuery({
    queryKey: ['allProducts'],
    queryFn: async () => {
      const response = await axios.get('/api/recently');
      return response.data
    },
  })
  const sortByCreatedTime = [...allProducts].sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
  // console.log(sortByCreatedTime);

  const recentAdded = sortByCreatedTime.slice(0, 20)
  //  make a function to send data to serve

  const handleAddToCart = async (id, quantity) => {
    // check validity by email
    if (!email) {
        toast.error('You must be logged in to add products to the cart',)
           navigate('/my-account')
        return;
    }
    try {
      setLoading(true)
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
            email, // Ensure 'email' is defined in your scope
            id,
            name,
            price,
            image,
            quantity,
            description,
            brand,
            category,
        };

        // Send product data to add to the cart
        const res = await axiosSecure.post(`/api/cart/${id}`, infos);
        console.log(res.data);

        // Check for response status
        if (res.status === 201) {
            // Refetch the cart data
            refetch();
            toast.success('Product added to cart successfully', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setLoading(false)
        } else if (res.status === 401) {
            toast.error("You must be logged in to add products to the cart.");
        } else {
            toast.error("Failed to add product to cart.");
        }
    } catch (err) {
        console.error('Error:', err);
        toast.error('Failed to add product to cart', {
            position: 'top-right',
            autoClose: 5000,
        });
    }
};



  return (
    <div id='latest-Product' className="lg:p-4 ">
      {
        loading && <Loader/>
      }
      <div>
        <h1 className='text-2xl text-gray-400  border-b my-8 pb-2'><span className='border-b-blue-500 border-b-8 rounded-full px-2'>Recently Added</span></h1>
      </div>
      <Swiper
        slidesPerView={6}  // Default value for large screens
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {  // Extra small screens
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {  // Small screens
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {  // Medium screens
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: { // Large screens
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: { // Extra large screens
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >

        {recentAdded.map((item, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center mb-8">
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 w-full h-[400px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[40%] object-cover"
              />
              <div className="flex flex-col h-[60%] p-4">
                <div className="flex flex-col flex-grow mb-4">
                  <h3 className="text-2xl font-bold mb-2 truncate">{item.name}</h3>
                  <p className="text-gray-800 text-lg font-medium mb-3">${item.price}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  <Link
                    to={`/product/${item?._id}`}
                    className="w-1/2 bg-[#3B82F6] py-2 font-semibold text-white rounded-lg shadow-md transition duration-300 hover:bg-[#2563EB] hover:shadow-lg flex justify-center">
                    View Details
                  </Link>
                  <button
                    onClick={() => handleAddToCart(item._id)}
                    className="w-1/2 bg-[#10B981] text-white py-2 rounded-lg hover:bg-[#059669] transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
