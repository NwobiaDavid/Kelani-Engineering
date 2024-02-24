import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "react-phone-number-input/style.css";
import Input from "react-phone-number-input/input";
import { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
  businessNeed: z.string().nonempty({ message: "Business need is required" }),
  address: z.string().nonempty({ message: "Address is required" }),
  city: z.string().nonempty({ message: "City is required" }),
  state: z.string().nonempty({ message: "State is required" }),
  businessName: z.string().nonempty({ message: "Business name is required" }),
  loadType: z.string().nonempty({ message: "Load type is required" }),
  lastMonthUtilityBillInNaira: z
    .number({
      required_error: "Last month's Utility Bill is required",
      invalid_type_error: "Last month's Utility Bill must be a number",
    })
    .nonnegative({ message: "Last month's utility bill is required" }),
  averageMonthlyConsumptionInKwh: z
    .number({
      required_error: "Average Monthly Consumption is required",
      invalid_type_error: "Average Monthly Consumption must be a number",
    })
    .nonnegative({ message: "Average Monthly consumption is required" }),
  hoursOfPowerRequired: z
    .number({
      required_error: "Hours Of Power is required",
      invalid_type_error: "Hours Of Power must be a number",
    })
    .nonnegative({ message: "Hours Of power required is required" }),
});

type FormSchema = z.infer<typeof schema>;

const SubsidiaryCtaForm = ({ close }: { close: () => void }) => {
  const ref = useRef();
  useEffect(() => {}, [ref]);

  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [thankYouMessageShowing, setThankYouMessageShowing] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const handleFormSubmit = async (data: FormSchema) => {
    const url = "https://app.nocodb.com/api/v2/tables/m6oho0240o5tcx8/records";
    const options = {
      headers: {
        "xc-token": import.meta.env.VITE_APP_NOCODB_AUTH_TOKEN,
      },
    };
    const requestData = {
      ...data,
    };
    try {
      setFormLoading(true);
      const response = await axios.post(url, requestData, options);
      if (response.status == 200) setFormSubmitted(true);
      setFormSubmitted(true);
      setTimeout(() => setThankYouMessageShowing(true), 420);
    } catch (err) {
      console.log(err);
    } finally {
      setFormLoading(false);
    }
  };

  return createPortal(
    <>
      <motion.div
        data-lenis-prevent
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
        className="w-[100dvw] lg:w-[80dvw] max-h-screen bg-white z-[90] fixed top-0 right-0 bottom-0 p-[10px] overflow-y-scroll"
      >
        <AnimatePresence>
          {thankYouMessageShowing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4 },
              }}
              onAnimationComplete={() => setTimeout(() => close(), 2000)}
              className="w-full h-full flex items-center justify-center museo-sans flex-col max-w-[60%] text-center mx-auto"
            >
              <p className="text-[32px] font-medium">Thank You!</p>
              <p className="text-[24px]">
                Your response has been recorded, a member of our team will reach
                out to you shortly.
              </p>
            </motion.div>
          )}
          {!formSubmitted && (
            <motion.form
              onSubmit={handleSubmit(handleFormSubmit)}
              exit={{
                opacity: 0,
                transition: { duration: 0.4 },
              }}
              className=" p-[56px] "
            >
              <header className="text-[32px] space-grotesk-semibold pb-[56px] border-b-zinc-500 border-b border-opacity-50">
                Kelani Power CTA
              </header>
              <div className="lg:grid grid-cols-2 gap-[40px] flex flex-col  mt-[56px]">
                <section className="space-y-[56px]">
                  <div>
                    <p className="text-[18px] space-grotesk-semibold mb-[32px]">
                      Personal Information
                    </p>
                    <div className="flex flex-col space-y-[20px]">
                      <div className="flex flex-col">
                        <label className="museo-sans text-[#888A8B]">
                          Name
                        </label>
                        <div
                          className={
                            errors.name ? "error relative" : "relative "
                          }
                        >
                          <input
                            {...register("name")}
                            className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full musio-sans"
                          />
                          <motion.p
                            animate={{ opacity: errors.name?.message ? 1 : 0 }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px]"
                          >
                            {errors.name?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <label className="museo-sans text-[#888A8B]">
                          Phone Number
                        </label>
                        {/* <input className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full musio-sans" /> */}
                        <div
                          className={
                            errors.phoneNumber ? "error relative" : "relative "
                          }
                        >
                          <Input
                            onBlur={() => trigger("phoneNumber")}
                            value={watch("phoneNumber")}
                            onChange={(value: string) => {
                              setValue("phoneNumber", value);
                              // trigger("phoneNumber");
                            }}
                          />
                          <motion.p
                            animate={{
                              opacity: errors.phoneNumber?.message ? 1 : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px]"
                          >
                            {errors.phoneNumber?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <label className="museo-sans text-[#888A8B]">
                          Email Address
                        </label>
                        <div
                          className={
                            errors.email ? "error relative" : "relative "
                          }
                        >
                          <input
                            {...register("email")}
                            className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full musio-sans"
                          />
                          <motion.p
                            animate={{ opacity: errors.email?.message ? 1 : 0 }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px]"
                          >
                            {errors.email?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="museo-sans text-[#888A8B]">
                          Business Need
                        </label>
                        <div
                          className={
                            errors.businessNeed ? "error relative" : "relative "
                          }
                        >
                          <select
                            {...register("businessNeed")}
                            className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full musio-sans"
                          >
                            <option disabled selected value="">
                              Choose Your Business' Need
                            </option>
                            <option value="Financing">Financing</option>
                            <option value="Connection">Connection</option>
                          </select>
                          <motion.p
                            animate={{
                              opacity: errors.businessNeed?.message ? 1 : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px]"
                          >
                            {errors.businessNeed?.message}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[18px] space-grotesk-semibold mb-[32px]">
                      Location
                    </p>
                    <div className="flex flex-col space-y-[20px]">
                      <div className="flex flex-col">
                        <label className="museo-sans text-[#888A8B]">
                          Address
                        </label>
                        <div
                          className={
                            errors.address ? "error relative" : "relative "
                          }
                        >
                          <input
                            {...register("address")}
                            className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full musio-sans"
                          />
                          <motion.p
                            animate={{
                              opacity: errors.address?.message ? 1 : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px]"
                          >
                            {errors.address?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="museo-sans text-[#888A8B]">
                          City
                        </label>
                        <div
                          className={
                            errors.city ? "error relative" : "relative "
                          }
                        >
                          <input
                            {...register("city")}
                            className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full musio-sans"
                          />
                          <motion.p
                            animate={{ opacity: errors.city?.message ? 1 : 0 }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px]"
                          >
                            {errors.city?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="museo-sans text-[#888A8B]">
                          State
                        </label>
                        <div
                          className={
                            errors.state ? "error relative" : "relative "
                          }
                        >
                          <input
                            {...register("state")}
                            className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full musio-sans"
                          />
                          <motion.p
                            animate={{ opacity: errors.state?.message ? 1 : 0 }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px]"
                          >
                            {errors.state?.message}
                          </motion.p>
                        </div>
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
                        <div
                          className={
                            errors.businessName ? "error relative" : "relative "
                          }
                        >
                          <input
                            {...register("businessName")}
                            style={{
                              borderColor: errors.businessName
                                ? "#fe3514"
                                : "#C3DECE",
                            }}
                            className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full musio-sans"
                          />
                          <motion.p
                            animate={{
                              opacity: errors.businessName?.message ? 1 : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px]"
                          >
                            {errors.businessName?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-[20px]">
                        <div className="flex flex-col">
                          <label className="museo-sans text-[#888A8B]">
                            Type Of Load
                          </label>
                          <div
                            className={
                              errors.loadType ? "error relative" : "relative "
                            }
                          >
                            <select
                              {...register("loadType")}
                              className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full musio-sans"
                            >
                              <option disabled selected value="">
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
                            <motion.p
                              animate={{
                                opacity: errors.loadType?.message ? 1 : 0,
                              }}
                              className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px]"
                            >
                              {errors.loadType?.message}
                            </motion.p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <label className="museo-sans text-[#888A8B]">
                          Last month's Utility Bill (₦)
                        </label>
                        {/* <input className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full musio-sans" /> */}
                        <div
                          className={
                            errors.lastMonthUtilityBillInNaira ? "error" : ""
                          }
                        >
                          <InputNumber
                            value={watch("lastMonthUtilityBillInNaira")}
                            onBlur={() =>
                              trigger("lastMonthUtilityBillInNaira")
                            }
                            onValueChange={(e) =>
                              setValue("lastMonthUtilityBillInNaira", e.value)
                            }
                            minFractionDigits={2}
                            maxFractionDigits={5}
                          />
                          <motion.p
                            animate={{
                              opacity: errors.lastMonthUtilityBillInNaira
                                ?.message
                                ? 1
                                : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px]"
                          >
                            {errors.lastMonthUtilityBillInNaira?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <label className="museo-sans text-[#888A8B]">
                          Average / expected monthly consumption (in kWh)
                        </label>
                        <div
                          className={
                            errors.averageMonthlyConsumptionInKwh ? "error" : ""
                          }
                        >
                          <InputNumber
                            value={watch("averageMonthlyConsumptionInKwh")}
                            onBlur={() =>
                              trigger("averageMonthlyConsumptionInKwh")
                            }
                            onValueChange={(e) =>
                              setValue(
                                "averageMonthlyConsumptionInKwh",
                                e.value
                              )
                            }
                            minFractionDigits={0}
                            maxFractionDigits={5}
                          />
                          <motion.p
                            animate={{
                              opacity: errors.averageMonthlyConsumptionInKwh
                                ?.message
                                ? 1
                                : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px]"
                          >
                            {errors.averageMonthlyConsumptionInKwh?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <label className="museo-sans text-[#888A8B]">
                          Hours of Power Required
                        </label>
                        <div
                          className={errors.hoursOfPowerRequired ? "error" : ""}
                        >
                          <InputNumber
                            value={watch("hoursOfPowerRequired")}
                            onBlur={() => trigger("hoursOfPowerRequired")}
                            onValueChange={(e) =>
                              setValue("hoursOfPowerRequired", e.value)
                            }
                            minFractionDigits={0}
                            maxFractionDigits={5}
                          />
                          <motion.p
                            animate={{
                              opacity: errors.hoursOfPowerRequired?.message
                                ? 1
                                : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] absolute -bottom-[20px]"
                          >
                            {errors.hoursOfPowerRequired?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <label className="museo-sans text-[#888A8B]">
                          Does the property own any of the following? (select
                          all that apply)
                        </label>
                        <div className="grid grid-cols-3 gap-[5px] museo-sans mt-[5px]">
                          <div className="flex space-x-[8px] items-center">
                            <input
                              type="checkbox"
                              className="w-[16px] h-[16px]"
                            />
                            <label className="text-[#888A8B] text-[16px]">
                              Solar Panels
                            </label>
                          </div>
                          <div className="flex space-x-[8px] items-center">
                            <input
                              type="checkbox"
                              className="w-[16px] h-[16px]"
                            />
                            <label className="text-[#888A8B] text-[16px]">
                              Deisel Generators
                            </label>
                          </div>
                          <div className="flex space-x-[8px] items-center">
                            <input
                              type="checkbox"
                              className="w-[16px] h-[16px]"
                            />
                            <label className="text-[#888A8B] text-[16px]">
                              Inverter
                            </label>
                          </div>
                          <div className="flex space-x-[8px] items-center">
                            <input
                              type="checkbox"
                              className="w-[16px] h-[16px]"
                            />
                            <label className="text-[#888A8B] text-[16px]">
                              Petrol Generators
                            </label>
                          </div>
                          <div className="flex space-x-[8px] items-center">
                            <input
                              type="checkbox"
                              className="w-[16px] h-[16px]"
                            />
                            <label className="text-[#888A8B] text-[16px]">
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
                className="py-[12px] px-[32px] w-fit text-[#222] border border-[#222] rounded-full disabled:opacity-50 mt-[40px] cursor-pointer"
                type="submit"
              >
                {formLoading ? "Please Wait..." : "Send"}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default SubsidiaryCtaForm;
