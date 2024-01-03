import SpotlightCard from "../components/SpotlightCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TextGroup from "../components/TextGroup";
import Container from "../components/Container";
import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className="p-[20.8px] text-[#D2DADF] border border-[#D2DADF] rounded-full"
      onClick={() => swiper.slideNext()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <path
          d="M12.5168 8.18443L8.57929 12.1219C8.456 12.2452 8.28879 12.3145 8.11444 12.3145C7.94009 12.3145 7.77288 12.2452 7.6496 12.1219C7.52632 11.9986 7.45706 11.8314 7.45706 11.6571C7.45706 11.4827 7.52632 11.3155 7.6496 11.1922L10.4666 8.37638H2.42749C2.25344 8.37638 2.08652 8.30724 1.96345 8.18417C1.84038 8.0611 1.77124 7.89418 1.77124 7.72013C1.77124 7.54608 1.84038 7.37916 1.96345 7.25609C2.08652 7.13302 2.25344 7.06388 2.42749 7.06388H10.4666L7.65069 4.24638C7.52741 4.12309 7.45815 3.95588 7.45815 3.78153C7.45815 3.60718 7.52741 3.43997 7.65069 3.31669C7.77398 3.19341 7.94119 3.12415 8.11554 3.12415C8.28989 3.12415 8.4571 3.19341 8.58038 3.31669L12.5179 7.25419C12.5791 7.31524 12.6276 7.38778 12.6607 7.46764C12.6938 7.54749 12.7107 7.6331 12.7106 7.71953C12.7105 7.80597 12.6933 7.89154 12.6601 7.97132C12.6268 8.0511 12.5781 8.12352 12.5168 8.18443Z"
          fill="#FF9A53"
        />
      </svg>
    </button>
  );
}
function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
      className="p-[20.8px] text-[#D2DADF] border border-[#D2DADF] rounded-full"
      onClick={() => swiper.slidePrev()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
      >
        <path
          d="M1.7232 8.18443L5.6607 12.1219C5.78399 12.2452 5.9512 12.3145 6.12555 12.3145C6.2999 12.3145 6.46711 12.2452 6.59039 12.1219C6.71367 11.9986 6.78293 11.8314 6.78293 11.6571C6.78293 11.4827 6.71367 11.3155 6.59039 11.1922L3.77344 8.37638H11.8125C11.9865 8.37638 12.1535 8.30724 12.2765 8.18417C12.3996 8.0611 12.4688 7.89418 12.4688 7.72013C12.4688 7.54608 12.3996 7.37916 12.2765 7.25609C12.1535 7.13302 11.9865 7.06388 11.8125 7.06388H3.77344L6.5893 4.24638C6.71258 4.12309 6.78184 3.95588 6.78184 3.78153C6.78184 3.60718 6.71258 3.43997 6.5893 3.31669C6.46601 3.19341 6.2988 3.12415 6.12445 3.12415C5.9501 3.12415 5.78289 3.19341 5.65961 3.31669L1.72211 7.25419C1.66092 7.31524 1.61239 7.38778 1.57931 7.46764C1.54624 7.54749 1.52926 7.6331 1.52936 7.71953C1.52947 7.80597 1.54664 7.89154 1.57991 7.97132C1.61317 8.0511 1.66187 8.12352 1.7232 8.18443Z"
          fill="#FF9A53"
        />
      </svg>
    </button>
  );
}
const SubsidiaryShowcase = () => {
  const { width, height } = useScreenSize();
  return (
    <Container className="pb-[40px]">
      <figure className="w-full h-[268px] relative">
        <div className="top-0 left-0 absolute">
          <h1 className="bg-[#FEFEFE] text-[26px] leading-[38.9px] md:text-[45px] lg:text-[43.2px] md:leading-[50.5px] px-[20px] lg:px-[24px] pt-[4px] lg:pt-[8px] pb-[8px] lg:pb-[16px] relative rounded-br-[23px] lg:rounded-br-[32px] font-semibold w-fit">
            Kelani Engineering
            <img
              src="/assets/images/curved-fill-tl.svg"
              className="w-[26px] h-[26px] md:w-[36px] md:h-[36px] absolute -right-[26px] md:-right-[36px] rotate-90 -top-[1px] md:top-0"
            />
            <img
              src="/assets/images/curved-fill-tl.svg"
              className="w-[26px] h-[26px] md:w-[36px] md:h-[36px] absolute left-0 rotate-90 -bottom-[26px] md:-bottom-[36px]"
            />
          </h1>
        </div>
        <img
          className="w-full object-cover h-full rounded-tr-[24px] rounded-bl-[28px]  lg:rounded-tr-[28px] lg:rounded-bl-[32px]"
          src="/assets/images/about-company.png"
        />
        <div className="bottom-0 -right-[1px] md:right-0 absolute">
          <div className="relative w-[48px] h-[48px] rounded-tl-[32px] bg-[#FEFEFE] flex items-center justify-center p-[8px]">
            <img
              src="/assets/images/curved-fill-tl.svg"
              className="w-[24px] h-[24px] absolute -right-0 -top-[23px] rotate-[270deg]"
            />
            <img
              src="/assets/images/curved-fill-tl.svg"
              className="w-[24px] h-[24px] absolute -left-[23px] rotate-[270deg] -bottom-[0px]"
            />
            <img src="/assets/images/icon-subsidiary-link.svg" className="" />
          </div>
        </div>
      </figure>
      <div className="mt-[20px] md:mt-[40px] flex flex-col lg:grid grid-cols-[55%_45%] border-[#D2DADF] border-t">
        <div className="pt-[20px] md:pt-[40px]  border-[#D2DADF] lg:border-r  pb-0">
          <div className="lg:pr-[56px] pb-[20px] lg:pb-[40px]">
            <p className="text-[21px] leading-[31.7px] tracking-[-0.432px] lg:text-[32px] lg:leading-[36.24px] tracking--[0.432px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              obcaecati mollitia animi quia recusandae tempora dolores nihil,
              fugit provident nostrum at optio quisquam ut facere magnam
              doloribus incidunt soluta vel.
            </p>
            <div className="flex gap-[23px] mt-[23px] lg:mt-[40px] ">
              <button className="flex items-center py-[12px] px-[24px] bg-[#FF9A53] text-[17.28px] text-white rounded-full leading-[26px]">
                Know More
              </button>
              <button className="py-[12px] px-[24px] text-[17.28px] text-[#222222] border border-[#D2DADF] rounded-full leading-[26px]">
                Contact Us
              </button>
            </div>
          </div>
          <div className="lg:hidden pb-[20px]">
            <TextGroup
              title="Outsourcing"
              description="The business is also expanding its plastics operation to go into
        recycling of plastics and repurposing projects like plastics to diesel
        and other petrochemical products. This should also link to a form
        reaching out for partnerships"
            />
            <TextGroup
              title="Outsourcing"
              description="The business is also expanding its plastics operation to go into
        recycling of plastics and repurposing projects like plastics to diesel
        and other petrochemical products. This should also link to a form
        reaching out for partnerships"
            />
            <TextGroup
              title="Outsourcing"
              description="The business is also expanding its plastics operation to go into
        recycling of plastics and repurposing projects like plastics to diesel
        and other petrochemical products. This should also link to a form
        reaching out for partnerships"
            />
          </div>
          <div className="border-t border-[#D2DADF] lg:pr-[56px] pt-[40px] font-semibold pb-[129px] relative">
            <h3 className="text-[14px] mb-[14px] lg:mb-[20px] font-semibold">
              SPOTLIGHT
            </h3>
            <Swiper
              className="static overflow-y-visible px-[2px]"
              slidesPerView={width > 768 ? 2 : 1}
              spaceBetween={23}
            >
              <SwiperSlide>
                <SpotlightCard
                  image="/assets/images/spotlight-image.png"
                  description="Credit & financing facilities for businesses to work with our agreed partners for "
                />
              </SwiperSlide>
              <SwiperSlide>
                <SpotlightCard
                  image="/assets/images/spotlight-image.png"
                  description="Credit & financing facilities for businesses to work with our agreed partners for "
                />
              </SwiperSlide>
              <SwiperSlide>
                <SpotlightCard
                  image="/assets/images/spotlight-image.png"
                  description="Credit & financing facilities for businesses to work with our agreed partners for "
                />
              </SwiperSlide>
              <SwiperSlide>
                <SpotlightCard
                  image="/assets/images/spotlight-image.png"
                  description="Credit & financing facilities for businesses to work with our agreed partners for "
                />
              </SwiperSlide>
              <SwiperSlide>
                <SpotlightCard
                  image="/assets/images/spotlight-image.png"
                  description="Credit & financing facilities for businesses to work with our agreed partners for "
                />
              </SwiperSlide>
              <SwiperSlide>
                <SpotlightCard
                  image="/assets/images/spotlight-image.png"
                  description="Credit & financing facilities for businesses to work with our agreed partners for "
                />
              </SwiperSlide>
              <div className="absolute bottom-[23px] flex items-center gap-[40px] z-10 w-full lg:pr-[46px]">
                <p>01 - 05</p>
                <div className="flex-grow h-[1px] bg-[#D2DADF]"></div>
                <div className="gap-[9px] flex">
                  <SlidePrevButton />
                  <SlideNextButton />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="hidden lg:block">
          <TextGroup
            title="Outsourcing"
            description="The business is also expanding its plastics operation to go into
        recycling of plastics and repurposing projects like plastics to diesel
        and other petrochemical products. This should also link to a form
        reaching out for partnerships"
          />
          <TextGroup
            title="Outsourcing"
            description="The business is also expanding its plastics operation to go into
        recycling of plastics and repurposing projects like plastics to diesel
        and other petrochemical products. This should also link to a form
        reaching out for partnerships"
          />
          <TextGroup
            title="Outsourcing"
            description="The business is also expanding its plastics operation to go into
        recycling of plastics and repurposing projects like plastics to diesel
        and other petrochemical products. This should also link to a form
        reaching out for partnerships"
          />
        </div>
      </div>
    </Container>
  );
};
export default SubsidiaryShowcase;
