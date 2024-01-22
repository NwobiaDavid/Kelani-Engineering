import Marquee from "react-fast-marquee";

const InfiniteCarousel = () => {
  return (
    <div className="flex overflow-hidden relative py-[15px] md:py-[20px] border-t border-b border-[#D9D9D9] mt-[35px] md:mt-[54px]">
      <Marquee gradient gradientColor="#FEFEFE">
        <p className="text-[34px] md:text-[45.4px] text-[#D9D9D9]">
          Innovative Industrial Solutions - Strategic Consulting Expertise -
          Efficient Machinery Procurement - Sustainable Plastics Recycling -
          Cutting-Edge Talent Management - Empowering Energy Financing -
          Innovative Industrial Solutions - Strategic Consulting Expertise -
          Efficient Machinery Procurement - Sustainable Plastics Recycling -
          Cutting-Edge Talent Management - Empowering Energy Financing -
        </p>
      </Marquee>
    </div>
  );
};

export default InfiniteCarousel;
