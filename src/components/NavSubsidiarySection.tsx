interface NavSubsidiarySection {
  icon: string;
  text: string;
  link?: string;
  hasRightBorder?: boolean;
}

const NavSubsidiarySection = ({
  icon,
  text,
  link,
  hasRightBorder,
}: NavSubsidiarySection) => {
  return (
    <a
      href={link}
      className={`h-full border-[#FEFEFE] border-t lg:border-t-0 ${
        hasRightBorder ? "lg:border-r" : ""
      }  flex-grow flex items-center justify-center relative`}
    >
      <img src={icon} className="w-[130px] h-[130px] xl:w-[160px] xl:h-[160px] hidden lg:block" />
      <p className="lg:absolute bottom-[32px] left-[40px] text-white text-[21.2px] flex justify-between items-center w-[calc(100%-80px)]">
        {text}
        <img src="/assets/images/icon-link.svg" />
      </p>
    </a>
  );
};
export default NavSubsidiarySection;
