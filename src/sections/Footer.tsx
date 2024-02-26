import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import ContactUsInput from "../components/ContactUsInput";
import axios from "axios";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  subject: z.string().nonempty({ message: "Subject Is Required" }),
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
      className="w-[45px] h-[45px] lg:w-[57px] lg:h-[57px] rounded-full border-[#D2DADF] border flex items-center justify-center"
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

  const handleFormSubmit = async (data: FormSchema) => {
    const url = "https://app.nocodb.com/api/v2/tables/mjgtqh17rbqo28w/records";
    const options = {
      headers: {
        "xc-token": import.meta.env.VITE_APP_NOCODB_AUTH_TOKEN,
      },
    };
    const requestData = {
      Name: data.name,
      Email: data.email,
      Subject: data.subject,
      Message: data.message,
    };
    try {
      setFormLoading(true);
      const response = await axios.post(url, requestData, options);
      if (response.status == 200) setFormSubmitted(true);
    } catch (err) {
      console.log(err);
    } finally {
      setFormLoading(false);
    }
  };
  return (
    <div className="-mt-[90dvh] ">
      <div ref={containerRef} className="h-[100dvh] w-full"></div>
      <div className="sticky top-0 bottom-0 footer">
        <div className="w-full z-[9999999999999] h-screen relative p-[15px] md:p-[24px] bg-[#fefefe]">
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

              <div className="flex flex-col lg:flex-row left-[56px] absolute lg:block lg:bottom-[46px]">
                <p className="lg:mr-[100px] text-[#888A8B]">© 2024 Kelani</p>
              </div>

              <div className="flex gap-[23px] mt-[40px] items-center flex-wrap justify-center">
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
            {!formSubmitted && (
              <div className="h-full p-[24px] lg:p-[56px] pb-[20px] lg:pb-[97px] flex flex-col gap-[30px] lg:justify-between border-t lg:border-t-0 border-t-[#D2DADF] lg:border-top-0">
                <p className="lg:max-w-[80%] text-[17.25px]">
                  Excited to bring your ideas to life? Reach out and let's chat!
                  Our team is here to tailor solutions just for you. Don't
                  hesitate to drop us a line – we're ready to turn your vision
                  into reality!
                </p>
                <form
                  onSubmit={handleSubmit(handleFormSubmit)}
                  className="flex flex-col space-y-[50px]"
                >
                  <div>
                    <input
                      style={{
                        borderBottomColor: errors.name?.message
                          ? "#fe3514"
                          : "#D2DADF",
                      }}
                      {...register("name")}
                      className="pb-[9px] text-[18px] placeholder:text-[18px] placeholder:text-[#888A8B] focus:outline-none border-b border-b-[#D2DADF] w-full xl:text-[20px]"
                      placeholder={"Name"}
                    />
                    {errors.name?.message && (
                      <p className="text-right text-[12px] text-[#fe3514]">
                        {errors.name?.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      style={{
                        borderBottomColor: errors.email?.message
                          ? "#fe3514"
                          : "#D2DADF",
                      }}
                      {...register("email")}
                      className="pb-[9px] text-[18px] placeholder:text-[18px] placeholder:text-[#888A8B] focus:outline-none border-b  w-full xl:text-[20px] transition-all"
                      type={"email"}
                      placeholder={"Email"}
                    />
                    {errors.email?.message && (
                      <p className="text-right text-[12px] text-[#fe3514]">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      style={{
                        borderBottomColor: errors.subject?.message
                          ? "#fe3514"
                          : "#D2DADF",
                      }}
                      {...register("subject")}
                      className="pb-[9px] text-[18px] placeholder:text-[18px] placeholder:text-[#888A8B] focus:outline-none border-b border-b-[#D2DADF] w-full xl:text-[20px]"
                      type={"text"}
                      placeholder={"Subject"}
                    />
                    {errors.subject?.message && (
                      <p className="text-right text-[12px] text-[#fe3514]">
                        {errors.subject?.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <textarea
                      {...register("message")}
                      className="pb-[9px] text-[18px] placeholder:text-[18px] placeholder:text-[#888A8B] focus:outline-none border-b border-b-[#D2DADF] w-full xl:text-[20px] resize-none h-[200px] lg:h-[80px]"
                      placeholder="Message"
                    ></textarea>
                    {errors.message?.message && (
                      <p className="text-right text-[12px] text-[#fe3514]">
                        {errors.message?.message}
                      </p>
                    )}
                  </div>
                  <motion.button
                    disabled={formLoading}
                    whileTap={{ scale: 0.95 }}
                    className="py-[12px] px-[32px] w-fit text-[#222] border border-[#222] rounded-full disabled:opacity-50"
                    type="submit"
                  >
                    {formLoading ? "Please Wait..." : "Send"}
                  </motion.button>
                </form>
              </div>
            )}{" "}
            {formSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <p className="text-[24px]">Thank You</p>
                <p className="text-[16px]">We'll Reach Out to You Soon</p>
              </motion.div>
            )}
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
