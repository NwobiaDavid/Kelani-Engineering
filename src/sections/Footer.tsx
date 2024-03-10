import { zodResolver } from "@hookform/resolvers/zod";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import ContactUsInput from "../components/ContactUsInput";
import axios from "axios";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
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
      className="w-[45px] h-[45px] lg:w-[57px] lg:h-[57px] rounded-full border-[#DEDEDE] border-[2px] flex items-center justify-center"
    >
      <img
        src={`/assets/images/icon-social-${icon}-black.svg`}
        className="fill-[#222222]"
      />
    </motion.a>
  );
};

const Footer = ({ contactUsUrl }: { contactUsUrl: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

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
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [thankYouMessageShowing, setThankYouMessageShowing] = useState(false);

  const handleFormSubmit = async (data: FormSchema) => {
    const url = contactUsUrl;
    const options = {
      headers: {
        "xc-token": import.meta.env.VITE_APP_NOCODB_AUTH_TOKEN,
      },
    };
    const requestData = {
      Name: data.name,
      Email: data.email,
      // Subject: data.subject,
      Message: data.message,
    };
    try {
      setFormLoading(true);
      const response = await axios.post(url, requestData, options);
      if (response.status == 200) {
        setFormSubmitted(true);
        setTimeout(() => setThankYouMessageShowing(true), 420);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setFormLoading(false);
    }
  };
  return (
    <div className=" -mt-[90dvh]">
      <div
        ref={containerRef}
        className=" h-[79.2dvh] md:h-[100dvh] w-full"
      ></div>

      <div className="sticky  top-0 bottom-0 footer">
        <div className="w-full z-[60] h-screen relative p-[15px] md:p-[24px] lg:p-[32px] bg-[#fefefe]">
          <motion.div
            animate={{
              opacity: currentFooterScrollProgress.get() > 0.9 ? 1 : 0,
              transition: { duration: 0.5 },
            }}
            style={{ scale, y }}
            className="absolute bottom-[15px] md:bottom-[24px] lg:bottom-[32px] h-[40px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)] z-10 left-[16px] md:left-[24px] lg:left-[32px] rounded-b-[9.6px] right-[16px] md:right-[24px] lg:right-[32px] lg:hidden"
          ></motion.div>

          <motion.img
            animate={{
              opacity: currentFooterScrollProgress.get() > 0 ? 1 : 0,
              transition: { duration: 0.5 },
            }}
            className="w-full h-full object-cover absolute top-0 right-0 left-0 bottom-0 z-[1]"
            src="/assets/images/kelani-contact-us-footer.png"
          />
          <motion.div
            style={{ scale, y }}
            className="bg-[white] shadow-[0_0px_10px_2px_rgba(0,0,0,0.1)] w-full h-full rounded-[9.6px] flex flex-col overflow-y-scroll  lg:grid grid-cols-2 lg:gap-[24px] lg:p-0 relative z-[2]"
          >
            <div className="h-full p-[24px] lg:p-[56px] flex flex-col justify-center items-center lg:relative space-y-[4px] max-h-full">
              <div className="p-[24px] bg-[#F7F7F7] w-full rounded-[8px] flex justify-center items-center">
                <img
                  src="/assets/images/kelani-logo.png"
                  className="h-[60px]"
                />
              </div>
              <div className="p-[24px] bg-[#F7F7F7] w-full rounded-[8px] text-center text-[18.12px] space-grotesk-medium text-[#525251] leading-[1.5]">
                <p>Block 6, Plot 1, Asaba Industrial Estate,</p>
                <p>Asaba-Ibusa Expressway,</p>
                <p>Asaba, Delta State</p>
              </div>
              <div className="p-[24px] bg-[#F7F7F7] w-full rounded-[8px] text-center text-[18.12px] space-grotesk-medium text-[#525251] leading-[1.5]">
                <p>Suite A8, 9 Sarah’s Place,</p>
                <p> Channels TV Avenue, Opic Isheri,</p>
                <p>Lagos-Ibadan Expressway,</p>
                <p>Lagos State.</p>
              </div>
              <div className="p-[24px] bg-[#F7F7F7] w-full rounded-[8px] text-center text-[18.12px] space-grotesk-medium text-[#525251] leading-[1.5] flex space-x-[23px] justify-center">
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
              <div className="p-[24px] bg-[#F7F7F7] w-full rounded-[8px] text-center text-[15.28px] space-grotesk-medium text-[#525251] leading-[1.5] justify-between flex">
                <p className="lg:mr-[100px] text-[#888A8B] ">© 2024 Kelani</p>
                <div className="text-[#888A8B] flex space-x-[23px]">
                  <p className="cursor-pointer">Imprint</p>
                  <p className="cursor-pointer">Legal</p>
                </div>
              </div>
            </div>
            <AnimatePresence>
              {!formSubmitted && (
                <div className="flex flex-col justify-center ">
                  <motion.div
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.4 },
                    }}
                    className="h-full p-[24px] lg:p-[56px] flex flex-col gap-[30px]  border-t lg:border-t-0 border-t-[#D2DADF] lg:border-top-0 lg:max-h-[700px]"
                  >
                    <p className="lg:max-w-[80%] text-[17.25px] space-grotesk-medium text-[#888A8B] leading-[1.25]">
                      Have questions, suggestions, or just want to say hello?
                      We'd love to hear from you! Fill out the form below, and
                      our team will get back to you as soon as possible.
                    </p>
                    <form
                      onSubmit={handleSubmit(handleFormSubmit)}
                      className="flex flex-col space-y-[20px] h-full"
                    >
                      <div className="flex flex-col">
                        <label className="museo-sans text-[#888A8B] text-[17.25px]">
                          Name
                        </label>
                        <div
                          className={
                            errors.name ? "error relative" : "relative "
                          }
                        >
                          <input
                            {...register("name")}
                            className="bg-[#F7F7F7] border-[#DEDEDE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans text-[17.25px]"
                          />
                          <motion.p
                            animate={{
                              opacity: errors.name?.message ? 1 : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px] right-0"
                          >
                            {errors.name?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="museo-sans text-[#888A8B] text-[17.25px]">
                          Email
                        </label>
                        <div
                          className={
                            errors.email ? "error relative" : "relative "
                          }
                        >
                          <input
                            {...register("email")}
                            className="bg-[#F7F7F7] border-[#DEDEDE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans text-[17.25px]"
                          />
                          <motion.p
                            animate={{
                              opacity: errors.email?.message ? 1 : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px] right-0"
                          >
                            {errors.email?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 max-h-[calc(100%-20px)]">
                        <label className="museo-sans text-[#888A8B] text-[17.25px]">
                          Message
                        </label>
                        <div
                          className={
                            errors.message
                              ? "error relative flex-1"
                              : "relative flex-1"
                          }
                        >
                          <textarea
                            {...register("message")}
                            className="bg-[#F7F7F7] border-[#DEDEDE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans text-[17.25px] h-full resize-none can-scroll"
                          />
                          <motion.p
                            animate={{
                              opacity: errors.message?.message ? 1 : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[25px] right-0"
                          >
                            {errors.message?.message}
                          </motion.p>
                        </div>
                      </div>
                      <motion.button
                        onClick={() => console.log(errors)}
                        disabled={formLoading}
                        whileTap={{ scale: 0.95 }}
                        className="py-[12px] px-[32px] w-fit text-[#222] border border-[#222] rounded-[8px] lg:px-[74px] lg:py-[14px] disabled:opacity-50 space-grotesk-medium"
                        type="submit"
                      >
                        {formLoading ? "Please Wait..." : "Send"}
                      </motion.button>
                    </form>
                  </motion.div>
                </div>
              )}{" "}
              {thankYouMessageShowing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.4 },
                  }}
                  onAnimationComplete={() => setTimeout(() => close(), 2000)}
                  className="w-full h-full min-h-[500px] flex items-center justify-center museo-sans flex-col max-w-[60%] text-center mx-auto"
                >
                  <p className="text-[26px] font-medium">Thank You!</p>
                  <p className="text-[20px]">
                    Your response has been recorded, a member of our team will
                    reach out to you shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex flex-col lg:flex-row text-center  lg:hidden block px-[24px] pb-[20px]">
              <p className="lg:mr-[100px] text-[#888A8B]">© 2024 Kelani</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
