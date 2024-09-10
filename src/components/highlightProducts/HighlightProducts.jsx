// Import Swiper React components and other necessary modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import Swiper's autoplay style

import img1 from '../../assets/highlightProducts/360-camers.png';
import img2 from '../../assets/highlightProducts/cameras-resized.png';
import img3 from '../../assets/highlightProducts/desktop.png';
import img4 from '../../assets/highlightProducts/laptop.png';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

export default function HighlightProducts() {
    return (
        <div className='lg:mt-8 lg:max-w-screen-2xl mx-auto'>
            <Swiper
                slidesPerView={1} // Default for small devices
                spaceBetween={10} // Adjust space between images
                // pagination={{
                //   clickable: true,
                // }}
                autoplay={{
                    delay: 1000, // Set autoplay delay to 1 second (1000 milliseconds)
                    disableOnInteraction: false, // Allow autoplay to continue after user interaction
                }}
                loop={true} // Loop the slides
                modules={[Pagination, Autoplay]} // Add Autoplay to Swiper modules
                breakpoints={{
                    // when window width is >= 640px (tablet)
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // when window width is >= 768px (small laptops)
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    // when window width is >= 1024px (large devices)
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className='bg-[#f5f5f5]'>
                        <img src={img1} alt="360 Camera" className="w-full h-auto bg-cover lg:h-48 " />
                        <div className='mb-8'>
                            <p className="text-base font-bold text-gray-700 text-center pb-2">
                                SHOP THE HOTTEST PRODUCTS <br /> Shop now
                            </p>
                        </div>
                    </div >
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide >
                    <div className='bg-[#f5f5f5] '>
                        <img src={img2} alt="Camera" className="w-full h-auto lg:h-48 bg-cover " />
                        <div className='mb-8'>
                            <p className="text-base font-bold text-gray-700 text-center pb-2">
                                CATCH BIG DEALS ON THE CAMERAS <br /> Shop now
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className='bg-[#f5f5f5]'>
                        <img src={img3} alt="Desktop" className="w-full h-auto bg-cover lg:h-48" />
                        <div className='mb-8'>
                            <p className="text-base font-bold text-gray-700 text-center pb-2 ">
                                SHOP THE HOTTEST PRODUCTS <br /> Shop now
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                    <div className='bg-[#f5f5f5] '>
                        <img src={img4} alt="Laptop" className="w-full h-auto bg-cover lg:h-48  " />
                        <div className='mb-8'>
                            <p className="text-base font-bold text-gray-700 text-center pb-2">
                                TABLETS, SMARTPHONES AND MORE <br /> 70%
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
