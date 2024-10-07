import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import img1 from '../../assets/highlightProducts/360-camers.png';
import img2 from '../../assets/highlightProducts/cameras-resized.png';
import img3 from '../../assets/highlightProducts/desktop.png';
import img4 from '../../assets/highlightProducts/laptop.png';
import buyNow from '../../assets/icons/business.png';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function HighlightProducts() {
    const [autoplay, setAutoplay] = useState({
        delay: 1000,
        disableOnInteraction: false,
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setAutoplay(false);
            } else {
                setAutoplay({
                    delay: 3000,
                    disableOnInteraction: false,
                });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const products = [
        { img: img1, title: "SHOP THE HOTTEST PRODUCTS", alt: "360 Camera" },
        { img: img2, title: "CATCH BIG DEALS ON THE CAMERAS", alt: "Camera" },
        { img: img3, title: "SHOP THE HOTTEST PRODUCTS", alt: "Desktop" },
        { img: img4, title: "TABLETS, SMARTPHONES AND MORE", alt: "Laptop" },
    ];

    return (
        <div className='lg:mt-8  lg:max-w-screen-2xl my-2 mx-auto'>
            {window.innerWidth >= 1024 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {products.map((product, index) => (
                        <div key={index} className='bg-[#f5f5f5] relative group'>
                            <img src={buyNow} alt="Buy Now" className='absolute top-4 right-4 w-16 h-16 z-10' />
                            <img src={product.img} alt={product.alt} className="w-full h-auto bg-cover lg:h-48 transition-transform duration-300 group-hover:scale-105" />
                            <div className='mb-8'>
                                <p className="text-base font-bold text-gray-700 text-center pb-2">
                                    {product.title} <br />
                                    <span className="flex items-center justify-center">
                                        <FaShoppingCart className="w-5 h-5 mr-1" /> {/* Shopping cart icon */}
                                        Shop Now
                                    </span>
                                </p>
                            </div>
                            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <Link to={'/shop'} className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300'>
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Swiper
                    slidesPerView={1} // Default for small devices
                    spaceBetween={10}
                    autoplay={autoplay}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className='bg-[#f5f5f5] relative group'>
                                <img src={buyNow} alt="Buy Now" className='absolute top-4 right-4 w-16 h-16 z-10' />
                                <img src={product.img} alt={product.alt} className="w-full h-auto bg-cover lg:h-48 transition-transform duration-300 group-hover:scale-105" />
                                <div className='mb-8'>
                                    <p className="text-base font-bold text-gray-700 text-center pb-2">
                                        {product.title} <br />
                                        <span className="flex items-center justify-center">
                                            <FaShoppingCart className="w-5 h-5 mr-1" /> {/* Shopping cart icon */}
                                            Shop Now
                                        </span>
                                    </p>
                                </div>
                                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300'>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}
