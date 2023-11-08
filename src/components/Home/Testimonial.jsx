import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Container from "../shared/Container";
import ClientCard from "./ClientCard";
const Testimonial = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-700">
      <Container>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          breakpoints={{
            // When the screen width is less than 640px (typical mobile size), display only 1 slide per view
            640: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonial;
