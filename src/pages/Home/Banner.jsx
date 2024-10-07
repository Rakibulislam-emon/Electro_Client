import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import bulb from '../../assets/banner/Sounddevice.png';
import phone from '../../assets/banner/Smartphones.png';
import watch from '../../assets/banner/smartwatches-resized.png';
import bg from '../../assets/banner/background.jpg';
import { Link } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';

export default function Banner() {
  const [text] = useTypewriter({
    words: ['SHOP TO GET WHAT YOU LOVE',],
    loop: 0,
    delay: 1000,
  })
  return (
    <div className='z-[1000]  lg:mt-4'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          height: '500px',
        }}
        speed={600}
        parallax={true}
        pagination={{ clickable: true }}
        navigation={false} // Disable navigation arrows
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}
        >
          <div className="h-full  max-w-screen-lg mx-auto flex items-end justify-between px-6">
            <div className="flex flex-col justify-center lg:justify-center lg:h-96 h-full">
               <h1 className="text-3xl  lg:text-4xl font-bold text-center lg:text-left">SHOP TO GET WHAT YOU  LOVE</h1>
            
              <p className="text-xl lg:text-2xl mt-4 text-center lg:text-left">TIMEPIECES THAT MAKE A STATEMENT UP TO 40% OFF Start Buying</p>
              <Link to={'/shop'} className="mt-4 px-6 py-3 lg:px-8 lg:py-4 bg-blue-500 text-white font-bold mx-auto lg:mx-0 text-center">
                <button >
                  Discover Now
                </button>
              </Link>
            </div>
            <img src={bulb} alt="Sound Device" className="lg:w-2/3 h-full" />
          </div>
        </SwiperSlide>


        <SwiperSlide
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}
        >
          <div className="h-full max-w-screen-lg mx-auto flex items-end justify-between px-6">
            <div className="flex flex-col justify-center lg:justify-center lg:h-96 h-full">
              <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">THE NEW STANDARD</h1>
              <p className="text-xl lg:text-2xl mt-4 text-center lg:text-left">UNDER FAVORABLE SMARTWATCHES<br /> from <sup>$</sup>749 <sup>99</sup></p>
              <Link to={'/shop'} className="mt-4 px-6 py-3 lg:px-8 lg:py-4 bg-blue-500 text-white font-bold mx-auto lg:mx-0 text-center">
                <button >
                  Shop Now
                </button>
              </Link>
            </div>
            <img src={watch} alt="Sound Device" className="lg:w-2/3 h-full" />
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}
        >
          <div className="h-full max-w-screen-lg mx-auto flex items-end justify-between px-6">
            <div className="flex flex-col justify-center lg:justify-center lg:h-96 h-full">
              <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">SHOP TO GET WHAT YOU LOVE</h1>
              <p className="text-xl lg:text-2xl mt-4 text-center lg:text-left">TIMEPIECES THAT MAKE A STATEMENT UP TO 40% OFF</p>
              <Link to={'/shop'} className="mt-4 px-6 py-3 lg:px-8 lg:py-4 bg-blue-500 text-white font-bold mx-auto lg:mx-0 text-center">
                <button >
                  Explore Now
                </button>
              </Link>
            </div>
            <img src={phone} alt="Sound Device" className="lg:w-2/3 h-full" />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}

      </Swiper>
    </div>
  );
}
