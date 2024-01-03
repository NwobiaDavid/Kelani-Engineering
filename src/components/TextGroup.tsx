interface TextGroupProps {
  title: string;
  description: string;
}

const TextGroup = ({ title, description }: TextGroupProps) => {
  return (
    <div className="flex flex-col py-[23px] lg:pt-[40px] lg:pb-[23px] pl-[12px] lg:pl-[70px]">
          <h2 className="text-[26px] leading-[39px] relative">{title}
              <span className="w-[8px] h-[8px] rounded-full bg-[#FF9A53] inline-block absolute -left-[16px] top-[calc(50%-4px)]"></span>
          </h2>
      <p className="text-[17.28px] leading-[26px]">
        {description}
      </p>
    </div>
  );
};

export default TextGroup;
