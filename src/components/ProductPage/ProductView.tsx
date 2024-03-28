/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem"
import { motion } from "framer-motion"
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import axios from "axios";

const ProductView:React.FC<{setCtaFormShowing: Dispatch<SetStateAction<boolean>>;}> = ({setCtaFormShowing}) => {
    const ctaButtonVariant = {
        whileHover: {
          scale: 1.05,
          transition: { duration: 0.3 },
        },
        whileTap: {
          scale: 0.98,
          transition: { duration: 0.15 },
        },
      };

    const [buttonHovered, setButtonHovered] = useState(false);


    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://app.nocodb.com/api/v2/tables/m8b3fl84ik1zrb1/records', {
          params: {
            offset: '0',
            limit: '75',
            where: '',
            viewId: 'vwhokgceoueuuiss'
          },
          headers: {
            'xc-auth': import.meta.env.VITE_APP_NOCODB_XC_AUTH
          },
          method: 'GET'
        });
        setData(response.data.list);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  return (
    <div className="w-full py-10 h-full md:px-5 px-2  lg:px-10 flex justify-center flex-col items-center " >

    <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center items-center w-full h-full ">

    {data.map((item:any , index:number) => (
    <div key={index} >
        <ProductItem data={item} />
    </div>
       ))}
        {/* <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem /> */}
        {/* <ProductItem /> */}
    </div>

    <div className="w-full justify-center h-[200px] flex items-center ">
        
        <motion.div
            onClick={() => setCtaFormShowing(true)}
            variants={ctaButtonVariant}
            onMouseEnter={() => {
                setButtonHovered(true);
            }}
            onMouseLeave={() => {
                setButtonHovered(false);
            }}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.7, delay: 1.4 },
            }}
            whileHover="whileHover"
            whileTap={"whileTap"}
            className=" cursor-pointer text-black py-2 w-fit flex justify-center items-center rounded-full px-4 lg:px-5 bg-white inter text-[14px] md:text-[16px]"
        >
            <Link to={"#"} className="">
                See more
            </Link>
            <motion.span
                className="sm:block hidden"
                animate={
                    buttonHovered
                        ? { x: 10, transition: { duration: 0.3 } }
                        : {}
                }
                whileHover={"whileHover"}
            >
                <IoIosArrowRoundForward size={30} />
            </motion.span>
        </motion.div>

    </div>

</div>
  )
}

export default ProductView
