import ContactUsInput from "../components/ContactUsInput";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
    name: z.string().nonempty({ message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email' }),
    phone: z.string().nonempty({ message: 'Phone is required' }),
    message: z.string().nonempty({ message: 'Message is required' }),
});

const Footer = () => {
  return (
    <div className="w-screen h-screen relative p-[24px]">
          <img className="w-full h-full object-cover absolute top-0 right-0 left-0 bottom-0 -z-10" src="/assets/images/footer-bg.png" />
          <div className="bg-white w-full h-full rounded-[9.6px] grid grid-cols-2 gap-[24px]">
              <div className="h-full p-[56px]"></div>
              <div className="h-full p-[56px] pb-[97px] flex flex-col gap-[70px]">
                  <p className="max-w-[80%] text-[17.25px]">If you want to book an appointment or find solutions, fill out the form below and our manager will contact you within a day</p>
                  <form className="flex flex-col gap-[50px]">
                      <ContactUsInput placeholder="Name" value="" onChange={() => {}} />
                      <ContactUsInput placeholder="Name" value="" onChange={() => {}} />
                      <ContactUsInput placeholder="Name" value="" onChange={() => {}} />
                      <ContactUsInput placeholder="Name" value="" onChange={() => {}} />
                  </form>
              </div>

          </div>
    </div>
  );
};

export default Footer;
