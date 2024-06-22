import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
const Banner = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="lg:w-[136vh] mx-auto md:w-[50vh] md:mt-20 w-[38vh]">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="rounded-2xl border-red-500"
              style={{
                background: `
                linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '67vw',
                height: '55vh',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1 className="font-bold text-4xl text-center w-1/2 mb-4">
                Your Gateway to Global Adventures
              </h1>
              <p className="text-center w-1/2 mb-4 lg:block md:block hidden">
                Dive into a world of endless possibilities with our travel site.
                From vibrant city escapes to tranquil beach retreats and
                adrenaline-pumping outdoor adventures, our platform offers
                curated experiences tailored to every traveler's desires. Start
                planning your next unforgettable journey today!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col justify-center items-center w-[67vw] h-[55vh] rounded-2xl"
              style={{
                background: `
                linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                url(${img2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
              }}
            >
              <h1 className="font-bold text-4xl text-center w-1/2 mb-4">
                Unlock the Secrets of Travel
              </h1>
              <p className="text-center w-1/2 mb-4 lg:block md:block hidden">
                Embark on a journey of discovery with our comprehensive travel
                site. Delve into hidden gems, uncover local secrets, and immerse
                yourself in diverse cultures around the globe. With a wealth of
                destination guides, travel tips, and exclusive deals, we empower
                you to create memories that last a lifetime.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col justify-center items-center w-[67vw] h-[55vh] rounded-2xl"
              style={{
                background: `
                linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                url(${img3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
              }}
            >
              <h1 className="font-bold text-4xl text-center w-1/2 mb-4">
                Your One-Stop Travel Companion
              </h1>
              <p className="text-center w-1/2 mb-4 lg:block md:block hidden">
                Let our travel site be your ultimate companion on the road to
                adventure. From booking flights and accommodations to
                discovering must-visit attractions and insider tips, we've got
                you covered every step of the way. Whether you're a seasoned
                globetrotter or a first-time explorer, embark on your next
                escapade with confidence and ease.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Banner;
