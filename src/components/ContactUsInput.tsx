interface ContactUsInputProps {
    type?: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }

const ContactUsInput = ({ type = "text", placeholder, value, onChange } : ContactUsInputProps) => {
  return <input value={value} onChange={onChange} className="pb-[9px] text-[18px] placeholder:text-[18px] placeholder:text-[#888A8B] focus:outline-none border-b border-b-[#D2DADF] w-full xl:text-[20px]" type={type} placeholder={placeholder} />;
};

export default ContactUsInput;
