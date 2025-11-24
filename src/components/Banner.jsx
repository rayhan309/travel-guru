import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



const Banner = () => {


  return (
    // swepper
    <div className="container mx-auto max-h-[600px] mt-7">
      {" "}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/8190069/pexels-photo-8190069.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/7681097/pexels-photo-7681097.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/11022628/pexels-photo-11022628.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/10432431/pexels-photo-10432431.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/12899182/pexels-photo-12899182.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/4853689/pexels-photo-4853689.jpeg" />
        </SwiperSlide>
        {/*  */}
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/4943722/pexels-photo-4943722.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/7283265/pexels-photo-7283265.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/1181341/pexels-photo-1181341.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/6919966/pexels-photo-6919966.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/3768129/pexels-photo-3768129.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/4853689/pexels-photo-4853689.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://media.istockphoto.com/id/1415537875/photo/asian-graphic-designer-working-in-office-artist-creative-designer-illustrator-graphic-skill.jpg?s=612x612&w=is&k=20&c=zIRirXeGJ4ft-1B3DvuT_loLu4zRl88vCaHjjQlK66Y=" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/7709190/pexels-photo-7709190.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/6203649/pexels-photo-6203649.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full object-cover" src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
