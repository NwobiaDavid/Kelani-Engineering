import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const SubsidiaryCtaForm = ({ close }: { close: () => void }) => {
  const ref = useRef();
  useEffect(() => {}, [ref]);
  return createPortal(
    <>
      <motion.div
        ref={ref}
        onClick={close}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        transition={{ duration: 0.35 }}
        className="fixed top-0 right-0 left-0 bottom-0 bg-black z-[80] cursor-pointer"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0.7, x: "80dvw" }}
        transition={{ duration: 0.35 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "80dvw", transition: { duration: 0.2 } }}
        className="lg:w-[80dvw] max-h-screen bg-white z-[90] fixed top-0 right-0 bottom-0 p-[10px] overflow-y-scroll"
      >
        <div className=" p-[56px] ">
          <header className="text-[32px] space-grotesk-semibold pb-[56px] border-b-zinc-500 border-b border-opacity-50">
            Header content Contact Form (Talent Management)
          </header>
          <div className="grid grid-cols-2 gap-[40px]  mt-[56px]">
            <section className="space-y-[56px]">
              <div>
                <p className="text-[18px] space-grotesk-semibold mb-[32px]">
                  Personal Information
                </p>
                <div className="flex flex-col space-y-[20px]">
                  <div className="flex flex-col">
                    <label className="museo-sans text-[#888A8B]">Name</label>
                    <input className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none" />
                  </div>
                  <div className="flex flex-col ">
                    <label className="museo-sans text-[#888A8B]">
                      Phone Number
                    </label>
                    <input className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none" />
                  </div>
                  <div className="flex flex-col ">
                    <label className="museo-sans text-[#888A8B]">
                      Email Address
                    </label>
                    <input className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none" />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[18px] space-grotesk-semibold mb-[32px]">
                  Choice Of Service
                </p>
                <div className="flex flex-col space-y-[20px]">
                  <div className="flex flex-col">
                    <label className="museo-sans text-[#888A8B]">
                      Business Need
                    </label>
                    <select className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none">
                      <option disabled selected value="">
                        Choose Your Business' Need
                      </option>
                      <option value="Financing">Financing</option>
                      <option value="Connection">Connection</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div>
                <p className="text-[18px] space-grotesk-semibold mb-[32px]">
                  Load Enquiry
                </p>
                <div className="flex flex-col space-y-[20px]">
                  <div className="flex flex-col">
                    <label className="museo-sans text-[#888A8B]">
                      Name of Business / Estate/ Hotel or Residence
                    </label>
                    <input className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none" />
                  </div>
                  <div className="flex flex-col space-y-[20px]">
                    <div className="flex flex-col">
                      <label className="museo-sans text-[#888A8B]">
                        Type Of Load
                      </label>
                      <select className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none">
                        <option disabled value="">
                          Choose Type Of Load
                        </option>
                        <option value="Industrial light">
                          Industrial light - (0 - 50KWe)
                        </option>
                        <option value="Industrial">
                          Industrial - (above 50Kwe)
                        </option>
                        <option value="Residential">Residential</option>
                        <option value="Residential heavy">
                          Residential heavy - (above 30kWe)
                        </option>
                        <option value="Commercial">Commercial</option>
                        <option value="Commercial heavy">
                          Commercial heavy (above 30kWe)
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <label className="museo-sans text-[#888A8B]">
                      Last month's Utility Bill (₦)
                    </label>
                    <input className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none" />
                  </div>
                  <div className="flex flex-col ">
                    <label className="museo-sans text-[#888A8B]">
                      Average / expected monthly consumption (in kWh)
                    </label>
                    <input className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none" />
                  </div>
                  <div className="flex flex-col ">
                    <label className="museo-sans text-[#888A8B]">
                      Hours of Power Required
                    </label>
                    <input
                      type="number"
                      className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="museo-sans text-[#888A8B]">
                      Does the property own any of the following? (select all
                      that apply)
                    </label>
                    <div className="grid grid-cols-3">
                      <div className="flex space-x-[5px] items-center">
                        <input type="checkbox" className="w-[16px] h-[16px]" />
                        <label className="text-[#888A8B] text-[14px]">
                          Solar Panels
                        </label>
                      </div>
                      <div className="flex space-x-[5px] items-center">
                        <input type="checkbox" className="w-[16px] h-[16px]" />
                        <label className="text-[#888A8B] text-[14px]">
                          Deisel Generators
                        </label>
                      </div>
                      <div className="flex space-x-[5px] items-center">
                        <input type="checkbox" className="w-[16px] h-[16px]" />
                        <label className="text-[#888A8B] text-[14px]">
                          Inverter
                        </label>
                      </div>
                      <div className="flex space-x-[5px] items-center">
                        <input type="checkbox" className="w-[16px] h-[16px]" />
                        <label className="text-[#888A8B] text-[14px]">
                          Petrol Generators
                        </label>
                      </div>
                      <div className="flex space-x-[5px] items-center">
                        <input type="checkbox" className="w-[16px] h-[16px]" />
                        <label className="text-[#888A8B] text-[14px]">
                          IPP
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <motion.button
            disabled={false}
            whileTap={{ scale: 0.95 }}
            className="py-[12px] px-[32px] w-fit text-[#222] border border-[#222] rounded-full disabled:opacity-50 mt-[40px]"
            type="submit"
          >
            {false ? "Please Wait..." : "Send"}
          </motion.button>
        </div>
      </motion.div>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default SubsidiaryCtaForm;
