import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function RecentlyAdded() {
  // Data array with products
  const data = [
    { 
      name: "iPhone 13 Pro", 
      price: 999, 
      tags: ["smartphone", "Apple", "iOS", "5G"], 
      image: "https://picsum.photos/id/237/200/300"
    },
    { 
      name: "Samsung Galaxy S21", 
      price: 799, 
      tags: ["smartphone", "Android", "Samsung", "5G"], 
      image: "https://picsum.photos/id/238/200/300"
    },
    { 
      name: "Dell XPS 13", 
      price: 1200, 
      tags: ["laptop", "Windows", "Dell", "ultrabook"], 
      image: "https://picsum.photos/id/239/200/300"
    },
    { 
      name: "MacBook Air M1", 
      price: 999, 
      tags: ["laptop", "Apple", "macOS", "M1 chip"], 
      image: "https://picsum.photos/id/240/200/300"
    },
    { 
      name: "Sony Alpha A7 III", 
      price: 1999, 
      tags: ["camera", "Sony", "mirrorless", "4K video"], 
      image: "https://picsum.photos/id/241/200/300"
    },
    { 
      name: "Bose QC 35 II", 
      price: 299, 
      tags: ["headphones", "Bose", "noise-canceling", "Bluetooth"], 
      image: "https://picsum.photos/id/242/200/300"
    },
    { 
      name: "iPad Pro", 
      price: 1099, 
      tags: ["tablet", "Apple", "iOS", "ProMotion"], 
      image: "https://picsum.photos/id/243/200/300"
    },
    { 
      name: "Google Pixel 6", 
      price: 599, 
      tags: ["smartphone", "Google", "Android", "5G"], 
      image: "https://picsum.photos/id/244/200/300"
    },
    { 
      name: "Sony WH-1000XM4", 
      price: 349, 
      tags: ["headphones", "Sony", "noise-canceling", "Bluetooth"], 
      image: "https://picsum.photos/id/245/200/300"
    },
    { 
      name: "Asus ROG Zephyrus", 
      price: 1499, 
      tags: ["laptop", "gaming", "Asus", "Windows", "RTX 3060"], 
      image: "https://picsum.photos/id/246/200/300"
    }
  ];

  return (
    <div className="p-4 ">
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
       
        {data.map((item, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center mb-8">
            <Link className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 w-full h-[400px]">
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
                  <button className="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add to Cart
                  </button>
                  <button className="w-1/2 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300">
                    Wishlist
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
