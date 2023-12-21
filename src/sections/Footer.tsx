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
type FormSchema = z.infer<typeof schema>;

const Footer = () => {
    const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormSchema>({ resolver: zodResolver(schema) })
  return (
    <div className="w-screen h-screen relative p-[24px]">
          <img className="w-full h-full object-cover absolute top-0 right-0 left-0 bottom-0 -z-10" src="/assets/images/footer-bg.png" />
          <div className="bg-white w-full h-full rounded-[9.6px] grid grid-cols-2 gap-[24px]">
              <div className="h-full p-[56px] flex flex-col justify-center items-center relative">

                <div className="h-[50px] w-[150px] bg-gray-400 mb-[84px]">

                </div>
                <div className="flex flex-col text-center text-[20px]">
                  <p>SHUTTLEWORTHSTRASSE 31-33,</p>
                  <p>1210 VIENNA, AUSTRIA</p>
                  <p>SALES@6B47.COM</p>
                </div>

                <div className="flex absolute bottom-[46px]">
                  <p className="mr-[100px] text-[#888A8B]">© 2023 6B47 REAL ESTATE INVESTORS AG</p>
                  <p className="flex text-[#888A8B]">
                    <a className="mr-[23px] inline-block">Imprints</a>
                    <a className="">Legal</a>
                  </p>
                </div>

                <div className="flex gap-[23px] mt-[40px]"><p>linkedin</p><p>google</p></div>
              </div>
              <div className="h-full p-[56px] pb-[97px] flex flex-col justify-between">
                  <p className="max-w-[80%] text-[17.25px]">If you want to book an appointment or find solutions, fill out the form below and our manager will contact you within a day</p>
                  <form className="flex flex-col gap-[50px]">
                      <ContactUsInput register={register} name="name" placeholder="Name" value="" onChange={() => {}} />
                      <ContactUsInput register={register} name="email" placeholder="Email" value="" type="email" onChange={() => {}} />
                      <ContactUsInput register={register} name="subject" placeholder="Subject" value="" onChange={() => {}} />
                      <textarea {...register("message")} className="pb-[9px] text-[18px] placeholder:text-[18px] placeholder:text-[#888A8B] focus:outline-none border-b border-b-[#D2DADF] w-full xl:text-[20px] resize-none" placeholder="Message" >
                      </textarea>
                  </form>
                      <button className="py-[12px] px-[32px] w-fit text-[#222] border border-[#222] rounded-full" type="submit">Send</button>
              </div>

          </div>
    </div>
  );
};

export default Footer;
