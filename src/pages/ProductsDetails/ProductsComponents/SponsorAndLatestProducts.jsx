/* eslint-disable react/prop-types */
import cameraImage from '../../../assets/highlightProducts/shop-sidebar-ad-banner.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import toast from 'react-hot-toast';
// import { useState } from 'react';
// import useDecodedToken from '../../../hooks/useDecodedToken';

export default function SponsorAndLatestProducts({ relatedProducts }) {
  // const {email} = useDecodedToken()
  // // initial quantity
  // const [quantity, setQuantity] = useState(1);
  // const axiosSecure = useAxiosSecure()
  // show no data found conditionally
  if (!relatedProducts || relatedProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl text-gray-400">No related products found.</h1>
      </div>
    );
  }
  // todo: here is data destructed problem need to solve 


  // const {
  //    name, price, image, quantity, description, brand, category,
  // } =foundItem;

  // const handleAddToCart = async (id) => {
  //   try {
  //     // Fetch the product details
  //     const getProduct = await axiosSecure.get(`/api/related_products/${id}`);
  //     const product = getProduct.data;
  
  //     // If product is not found
  //     if (!product) {
  //       toast.error('Failed to find product', {
  //         position: 'top-right',
  //         autoClose: 5000,
  //       });
  //       return;
  //     }
  
  //     // Destructure the fetched product directly
  //     const { name, price, image, description, brand, category } = product;
  //     const infos = {
  //       email, id, name, price, image, quantity, description, brand, category,
  //     };
  
  //     // Send product data to add to the cart
  //     const res = await axiosSecure.post(`/api/cart/${id}`, infos);
  
  //     // Success toast
  //     toast.success('Product added to cart successfully', {
  //       position: 'top-right',
  //       autoClose: 5000,
  //     });
  //   } catch (err) {
  //     console.log('err:', err);
  //     toast.error('Failed to add product to cart', {
  //       position: 'top-right',
  //       autoClose: 5000,
  //     });
  //   }
  // };
  


  return (
    <main className='max-w-full border'>
      <div className='flex flex-col lg:flex-row justify-between gap-6 p-4'>
        {/* Image Section */}
        <div className="lg:w-1/3 border lg:flex w-full p-4 ">
          <img src={cameraImage} alt="camera" className="max-w-full h-auto " />

        </div>

        {/* Related Products Section */}
        <div className="lg:w-2/3 lg:p-4">
          <div>
            <h1 className='text-2xl text-gray-400 border-b my-8 pb-2'>
              <span className='border-b-blue-500 border-b-8 rounded-full px-2'>
                Recommended Products</span>
            </h1>
          </div>

          <Swiper
            slidesPerView={4}  // Default value for large screens
            // stop when hover


            spaceBetween={20}
            autoplay={{
              delay: 2000, disableOnInteraction: true, pauseOnMouseEnter: true
            }}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            onSwiper={(swiper) => {
              swiper.el.addEventListener('mouseenter', () => swiper.autoplay.stop());
              swiper.el.addEventListener('mouseleave', () => swiper.autoplay.start());
            }}
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
            {relatedProducts.map((item, index) => (
              <SwiperSlide key={index} className="flex items-center  justify-center mb-8">
                <Link to={`/product/${item?._id}`} className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col  w-auto  lg:h-[510px] h-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[40%] object-cover"
                  />
                  <div className="flex flex-col h-[80%] p-4">
                    <div className="flex flex-col flex-grow mb-4">
                      <h3 className="text-2xl font-semibold mb-2 truncate">{item.name}</h3>
                      <p className="text-gray-900 text-lg font-medium mb-3">${item.price}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full border border-gray-300">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <button
                        // onClick={() => handleAddToCart(item._id)}
                        className="w-1/2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Add to Cart
                      </button>
                      <button className="w-1/2 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400">
                        Wishlist
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}
