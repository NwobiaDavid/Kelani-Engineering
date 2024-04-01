import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { IoIosArrowRoundForward } from "react-icons/io";

const ProductView: React.FC<{
  setCtaFormShowing: Dispatch<SetStateAction<boolean>>;
}> = ({ setCtaFormShowing }) => {
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
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [filterText, setFilterText] = useState('Filter');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://app.nocodb.com/api/v2/tables/m8b3fl84ik1zrb1/records",
        {
          params: {
            offset: "0",
            limit: "85",
            where: "",
            viewId: "vwhokgceoueuuiss",
          },
          headers: {
            "xc-token": import.meta.env.VITE_APP_NOCODB_AUTH_TOKEN,
          },
          method: "GET",
        }
      );
      setData(response.data.list);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Extract unique product collections
  const uniqueCollections = [
    ...new Set(data.map((item: any) => item.Product_Collection)),
  ];

  const handleCollectionSelect = (collection: string) => {
    setSelectedCollection(collection);
    setFilterText(collection === 'all' ? 'Filter' : collection);
  };

  const [dropOpen, setDropOpen] = useState(false);

  const handleClick = () => {
    setDropOpen(!dropOpen);
  };

  return (
    <div className="w-full py-10 h-full md:px-5 px-2  lg:px-10 flex justify-center flex-col items-center ">
      <div className="w-full py-4 relative">
        <div
          onClick={handleClick}
          className="px-5 py-2 w-fit ml-[2%] active:scale-95 duration-200 hover:border-gray-500 text-center text-white rounded-lg border border-gray-700 cursor-pointer"
        >
           {filterText}
        </div>
        {dropOpen && (
          <div className="absolute flex flex-col rounded-xl z-[60] top-[calc(100%+5px)] p-2 bg-black border ">
            <div className=" flex flex-col text-center uppercase items-center ">
              <a className=" w-full p-2 cursor-pointer hover:bg-gray-800 duration-200 rounded-lg  " onClick={() => {handleCollectionSelect("all"); setDropOpen(false)}}>all</a>
              {uniqueCollections.map((collection, index) => (
                <a
                className=" w-full p-2 cursor-pointer hover:bg-gray-800 duration-200 rounded-lg  " 
                  key={index}
                  onClick={() => {handleCollectionSelect(collection); setDropOpen(false) }}
                >
                  {collection}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center items-center w-full h-full">
        {data
          .filter(
            (item: any) =>
              selectedCollection === "all" ||
              item.Product_Collection === selectedCollection
          )
          .map((item: any, index: number) => (
            <div key={index}>
              <ProductItem data={item} />
            </div>
          ))}
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
          className="cursor-pointer text-black py-2 w-fit flex justify-center items-center rounded-full px-4 lg:px-5 bg-white inter text-[14px] md:text-[16px]"
        >
          <Link to={"#"} className="">
            See more
          </Link>
          <motion.span
            className="sm:block hidden"
            animate={
              buttonHovered ? { x: 10, transition: { duration: 0.3 } } : {}
            }
            whileHover={"whileHover"}
          >
            <IoIosArrowRoundForward size={30} />
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductView;
