interface SpotlightCardProps {
  image: string;
  description: string;
}

const SpotlightCard = ({ image, description } : SpotlightCardProps) => {
  return (
    <div className="w-full rounded-[9.6px] overflow-hidden border border-[#D2DADF] flex flex-col cursor-pointer">
      <figure className="w-full lg:h-[238px]">
        <img src={image} className="w-full h-full object-cover" />
          </figure>
          <p className="px-[24px] py-[40px] text-[17.28px] leading-[25.9px]">
              {description}
          </p>
    </div>
  );
};

export default SpotlightCard;
