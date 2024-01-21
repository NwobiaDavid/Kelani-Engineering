import ContactUsInput from "../components/ContactUsInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useScreenSize from "../hooks/useScreenSize";
import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import useScrollPosition from "../hooks/useScrollPosition";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  phone: z.string().nonempty({ message: "Phone is required" }),
  message: z.string().nonempty({ message: "Message is required" }),
});
type FormSchema = z.infer<typeof schema>;

const FooterIcon = ({ link, icon }: { link: string; icon: string }) => {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={link}
      target="_blank"
      className="w-[57px] h-[57px] rounded-full border-[#D2DADF] border flex items-center justify-center"
    >
      <img
        src={`/assets/images/icon-social-${icon}-black.svg`}
        className="fill-[#222222]"
      />
    </motion.a>
  );
};

const Footer = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver(schema) });

  const { width } = useScreenSize();
  const { y: scrollPosition } = useScrollPosition();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.5, 1], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0.5, 1], [30, 0]);
  const currentFooterScrollProgress = useTransform(
    scrollYProgress,
    [0.85, 1],
    [0, 1]
  );

  return (
    <div className="-mt-[100dvh]">
      <div ref={containerRef} className="h-[100dvh] w-full"></div>
      <div className="sticky top-0 bottom-0 footer">
        <div className="w-full h-screen relative p-[24px] bg-[#fefefe]">
          <motion.img
            animate={{
              opacity: currentFooterScrollProgress.get() > 0 ? 1 : 0,
              transition: { duration: 0.5 },
            }}
            className="w-full h-full object-cover absolute top-0 right-0 left-0 bottom-0 z-[1]"
            src="/assets/images/footer-bg.png"
          />
          <motion.div
            style={{ scale, y }}
            className="bg-[white] shadow-[0_0px_10px_2px_rgba(0,0,0,0.1)] w-full h-full rounded-[9.6px] flex flex-col overflow-y-scroll lg:overflow-hidden lg:grid grid-cols-2 lg:gap-[24px] lg:p-0 relative z-[2]"
          >
            <div className="h-full p-[24px] lg:p-[56px] flex flex-col justify-center items-center lg:relative">
              <img
                src="/assets/images/kelani-logo.png"
                className="h-[50px] mb-[84px]"
              />
              <div className="flex flex-col text-center text-[18px]">
                <p>Block 6, Plot 1, Asaba Industrial Estate,</p>
                <p>Asaba-Ibusa Expressway,</p>
                <p>Asaba, Delta State</p>
              </div>
              <div className="flex flex-col text-center text-[18px] mt-[30px]">
                <p>Isheri North GRA, Opic Estates,</p>
                <p>Lagos-Ibadan Expressway,</p>
                <p>Lagos State.</p>
              </div>

              <div className="flex flex-col lg:flex-row left-[56px] absolute hidden lg:block lg:bottom-[46px]">
                <p className="lg:mr-[100px] text-[#888A8B]">
                  © 2023 6B47 REAL ESTATE INVESTORS AG
                </p>
                <p className="flex text-[#888A8B] flex-row">
                  <a className="mr-[23px] inline-block">Imprints</a>
                  <a className="">Legal</a>
                </p>
              </div>

              <div className="flex gap-[23px] mt-[40px] items-center">
                <FooterIcon
                  link="https://web.facebook.com/kelaniengr/"
                  icon="facebook"
                />
                <FooterIcon
                  link="https://www.youtube.com/channel/UC5UQ-v-As3beWcqk4j97CrQ"
                  icon="youtube"
                />
                <FooterIcon
                  link="https://www.instagram.com/kelaniengineering/"
                  icon="instagram"
                />
                <FooterIcon
                  link="https://www.linkedin.com/company/kelaniengineering/"
                  icon="linkedin"
                />
              </div>
            </div>
            <div className="h-full p-[24px] lg:p-[56px] pb-[48px] lg:pb-[97px] flex flex-col gap-[30px] lg:justify-between border-t lg:border-t-0 border-t-[#D2DADF] lg:border-top-0">
              <p className="lg:max-w-[80%] text-[17.25px]">
                If you want to book an appointment or find solutions, fill out
                the form below and our manager will contact you within a day
              </p>
              <form className="flex flex-col gap-[50px]">
                <ContactUsInput
                  register={register}
                  name="name"
                  placeholder="Name"
                  value=""
                  onChange={() => {}}
                />
                <ContactUsInput
                  register={register}
                  name="email"
                  placeholder="Email"
                  value=""
                  type="email"
                  onChange={() => {}}
                />
                <ContactUsInput
                  register={register}
                  name="subject"
                  placeholder="Subject"
                  value=""
                  onChange={() => {}}
                />
                <textarea
                  {...register("message")}
                  className="pb-[9px] text-[18px] placeholder:text-[18px] placeholder:text-[#888A8B] focus:outline-none border-b border-b-[#D2DADF] w-full xl:text-[20px] resize-none"
                  placeholder="Message"
                ></textarea>
              </form>
              <button
                className="py-[12px] px-[32px] w-fit text-[#222] border border-[#222] rounded-full"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="flex flex-col lg:flex-row text-center  lg:hidden block px-[24px] pb-[20px]">
              <p className="lg:mr-[100px] text-[#888A8B]">
                © 2023 6B47 REAL ESTATE INVESTORS AG
              </p>
              <p className="flex text-[#888A8B] flex-row lg:flex-col justify-center text-center">
                <a className="mr-[23px] inline-block">Imprints</a>
                <a className="">Legal</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
