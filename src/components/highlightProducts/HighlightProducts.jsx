import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import img1 from '../../assets/highlightProducts/360-camers.png';
import img2 from '../../assets/highlightProducts/cameras-resized.png';
import img3 from '../../assets/highlightProducts/desktop.png';
import img4 from '../../assets/highlightProducts/laptop.png';
import { FaShoppingCart } from 'react-icons/fa';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function HighlightProducts() {
    const [autoplay, setAutoplay] = useState({
        delay: 3000,
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
        { img: img1, title: "Shop the Hottest Products", alt: "360 Camera" },
        { img: img2, title: "Catch Big Deals on Cameras", alt: "Camera" },
        { img: img3, title: "Shop the Hottest Products", alt: "Desktop" },
        { img: img4, title: "Tablets, Smartphones, and More", alt: "Laptop" },
    ];

    return (
        <div className='lg:mt-8 lg:max-w-screen-2xl my-2 mx-auto'>
            {window.innerWidth >= 1024 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {products.map((product, index) => (
                        <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 group'>
                            <img src={product.img} alt={product.alt} className="w-full h-48 object-cover transition duration-300 group-hover:opacity-90" />
                            <div className='p-4'>
                                <p className="text-lg font-semibold text-gray-800 text-center mb-2">
                                    {product.title}
                                </p>
                                <Link to={'/shop'} className='flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-blue-700 transition duration-300'>
                                    <FaShoppingCart className="mr-2" />
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Swiper
                    slidesPerView={1}
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
                            <div className='bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 group'>
                                <img src={product.img} alt={product.alt} className="w-full h-48 object-cover transition duration-300 group-hover:opacity-90" />
                                <div className='p-4'>
                                    <p className="text-lg font-semibold text-gray-800 text-center mb-2">
                                        {product.title}
                                    </p>
                                    <Link to={'/shop'} className='flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-blue-700 transition duration-300'>
                                        <FaShoppingCart className="mr-2" />
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}
