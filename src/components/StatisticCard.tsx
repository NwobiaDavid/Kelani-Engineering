const StatisticCard = () => {
  return (
    <div className="statistic-card py-[24px] md:py-[20px]">
      <div className="div-block-6 flex justify-between items-center ">
        <div className="div-block-7 flex items-center justify-center">
          <img className="" src="/assets/images/icon-clock.svg" />
        </div>
        <div className="text-left md:hidden block">
          <p className="text-[43px] tracking-[-0.43px] text-center">3600+</p>
          <p className="paragraph-10 text-center text-[17.28px]">STATISTICS</p>
        </div>

        <p className="paragraph-8 flex md:block items-center justify-center text-[17.28px]">
          01
        </p>
      </div>
      <div className="text-left hidden md:block">
        <p className="paragraph-9">3600+</p>
        <p className="paragraph-10">STATISTICS</p>
      </div>
    </div>
  );
};
export default StatisticCard;
