import Marquee from "react-fast-marquee";

const InfiniteCarousel = () => {
  return (
    <div className="flex overflow-hidden relative py-[20px] md:py-[30px] lg:py-[30px] border-t border-b mb-[30px] border-[#272928] mt-[35px] md:mt-[54px]">
      <Marquee gradient gradientColor="#FEFEFE">
        <p className="text-[24px] md:text-[36.5px] text-[#272928] space-grotesk-medium">
          Innovative Industrial Solutions · Strategic Consulting Expertise ·
          Efficient Machinery Procurement · Sustainable Plastics Recycling ·
          Cutting-Edge Talent Management · Empowering Energy Financing ·
          Innovative Industrial Solutions · Strategic Consulting Expertise ·
          Efficient Machinery Procurement · Sustainable Plastics Recycling ·
          Cutting-Edge Talent Management · Empowering Energy Financing -
        </p>
      </Marquee>
    </div>
  );
};

export default InfiniteCarousel;
