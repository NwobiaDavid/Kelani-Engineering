import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa6";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface Contents {
    img: string,
    point1: string,
    point2: string,
    point3: string,
    point4: string,
    point5: string,
    point6: string,
    classname: string
}

interface Header {
    text: string
    className: string
}

export default function SlideshowSection2() {
    const content: Contents[] = [
        {
            img: 'assets/images/subsidiaryPagesImages/Card.png',
            point1: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point2: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point3: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point4: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point5: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point6: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            classname: " "
        },
        {
            img: 'assets/images/subsidiaryPagesImages/Card.png',
            point1: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point2: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point3: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point4: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point5: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point6: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            classname: " "
        },
        {
            img: 'assets/images/subsidiaryPagesImages/Card.png',
            point1: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point2: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point3: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point4: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point5: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point6: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            classname: " "
        }
        ,
        {
            img: 'assets/images/subsidiaryPagesImages/Card.png',
            point1: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point2: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point3: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point4: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point5: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point6: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            classname: " "
        }
        ,
        {
            img: 'assets/images/subsidiaryPagesImages/Card.png',
            point1: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point2: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point3: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point4: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point5: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point6: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            classname: " "
        }
        ,
        {
            img: 'assets/images/subsidiaryPagesImages/Card.png',
            point1: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point2: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point3: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point4: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point5: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point6: "Forecast,000  detect, and resolve curtailment and congestion issues wi remote and process automation",
            classname: " "
        }
    ]

    const header: Header[] = [
        {
            text: "Alignment Assessment",
            className: "pr-2"
        },
        {
            text: "Integration Planning",
            className: ""
        },
        {
            text: "Specialization Training",
            className: ""
        },
        {
            text: "Client-Centric Approach",
            className: ""
        },
        {
            text: "Outsourcing Strategy",
            className: ""
        },
        {
            text: "Continuous Monitoring",
            className: ""
        },
    ]


    const [display, setDisplay] = useState(0);
    const [showCard, setShowCard] = useState(0);

    const [hover, setHover]= useState(false);
    const [hover2, setHover2]= useState(false);



    const handleHeaderClick = (index: number) => {
        setDisplay(index);
        setShowCard(index);
    };

    const handleNext = () => {
        setDisplay((prevDisplay) => (prevDisplay + 1) % content.length);
        // setShowCard((prevDisplay) => (prevDisplay + 1) % content.length)
    };

    const handlePrevious = () => {
        setDisplay((prevDisplay) => (prevDisplay - 1 + content.length) % content.length);
        // setShowCard((prevDisplay) => (prevDisplay - 1 + content.length) % content.length)
    };

    const buttonRightVariants = {
        initial: { x: 0 },
        hover: { x: [0, 40, 0, -20, 0], y: [0, 0, 0,30,0, 0, 0], opacity: [1, 0, 0, 0, 1] , transition: { duration: 0.4 } },
    };

    const buttonLeftVariants = {
        initial: { x: 0 },
        hover: { x: [ -40], opacity: [0], transition: { duration: 0.4 }  },
        exit: { }
    };

    const containerVariants = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
    };

    return (

        <div className="lg:h-[1100px] h-[1350px] w-full z-30 text-white " >
             {/* <div className="w-full h-[100px] bg-gradient-to-t opacity-20 from-black via-purple-900 to-purple-800"> </div> */}
            <div className='w-full mb-6 flex flex-col lg:px-4 justify-center pt-10 items-center '>

                <div className=' w-[65%] flex justify-center items-center ' >
                    <div className='flex  w-full lg:flex-row flex-col items-center mb-10 justify-center lg:justify-between '>

                        <div className='uppercase text-center lg:text-left '>
                            <p className='font-semibold lg:text-base text-xs opacity-60 tracking-wide '>
                                INSTANT INSIGHTS FOR INFORMED ACTIONS:<br /> User SOLUTIONS FOR REAL-TIME DECISIONS
                            </p>
                            <h1 className='text-3xl lg:text-5xl my-5 opacity-90 font-semibold '>Roadmap for Industry Advancement</h1>
                        </div>

                        <div className='flex mt-3 lg:mt-0 relative items-center justify-center lg:justify-between lg:w-[15%] md:w-[20%] w-full '>

                        <motion.div className=' flex justify-center items-center h-[60px] w-[100px]  ' onClick={handlePrevious} >
                                <motion.button onHoverStart={() => setHover((prev) => !prev)}  onHoverEnd={() => setHover((prev) => !prev)}  className="  overflow-hidden text-2xl rounded-full   relative border flex duration-200  hover:bg-purple-400 items-center w-[60px] h-full " >
                                    <motion.div whileHover={{ x: hover ? -50 : 0, opacity: hover ? 1 : 0 }} transition={{  duration: 0.2  }}  className="flex justify-between items-center h-full w-[100px] absolute "  style={{ pointerEvents: hover ? 'auto' : 'none' }} >
                                        <span className={hover? " opacity-0 " : " w-full absolute -right-1  p-3 opacity-100 "}>
                                            <BsArrowLeft />
                                        </span>
                                        <span className={hover ? "opacity-100 p-3 pl-6 " : " opacity-0 pr-6 "}>
                                            <BsArrowLeft />
                                        </span>
                                    </motion.div>
                                </motion.button>
                            </motion.div>

                            <div className="lg:hidden px-3 flex" >
                                <h1>{display + 1}/{content.length}</h1>
                            </div>

                            <motion.div className='  flex justify-center items-center h-[60px] w-[100px]  ' onClick={handleNext} >
                                <motion.button onHoverStart={() => setHover2((prev) => !prev)}  onHoverEnd={() => setHover2((prev) => !prev)}  className=" overflow-hidden text-2xl rounded-full justify-end   relative border flex duration-200  hover:bg-purple-400 items-center w-[60px] h-full " >
                                    <motion.div whileHover={{ x: hover2 ? 50 : 0, opacity: hover2 ? 1 : 0 }} transition={{  duration: 0.2  }}  className="flex justify-between items-center h-full w-[100px] absolute "  style={{ pointerEvents: hover2 ? 'auto' : 'none' }} >
                                        <span className={hover2 ? "opacity-100 p-3 pr-6   " : " opacity-0 pr-6 "}>
                                            <BsArrowRight />
                                        </span>
                                        <span className={hover2? " opacity-0  " : " w-full  -left-1 p-3 opacity-100  "}>
                                            <BsArrowRight />
                                        </span>
                                    </motion.div>
                                </motion.button>
                            </motion.div>

                        </div>
                    </div>
                </div>


                <div className='w-full mb-6 flex justify-center items-center ' >
                    <div className='w-[65%] flex justify-center lg:justify-between items-center'>
                        {header.map((item, index) => (
                            <div
                                className={`${display === index
                                    ? "h-[60px] font-semibold lg:text-left text-center opacity-60 tracking-wide lg:w-[150px] w-[200px]"
                                    : "h-[60px] cursor-pointer hidden lg:flex font-semibold opacity-60 tracking-wide w-[150px]"
                                    }`}
                                key={index}
                                onClick={() => handleHeaderClick(index)}
                            >
                                <h1 className='p-2 lg:w-fit w-full '>{item.text}</h1>
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    animate={{ x: display === index ? '0%' : '-100%' }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className={`${display === index ? 'w-full relative flex items-center justify-center ' : 'w-full hidden'}`}
                                >
                                    <img
                                        className=' w-full -left-8 absolute '
                                        src='assets/images/subsidiaryPagesImages/props/svgviewer-output.svg'
                                        alt=''
                                    />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            <div className=' flex pt-[1rem] px-3 lg:px-0 items-center justify-center w-full ' >

                <AnimatePresence mode="wait">

                    <motion.div
                        key={display}
                        className="w-full lg:w-[70%] z-50 h-full flex lg:flex-row flex-col"
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                    >
                        <div>
                            <img src={content[display].img} alt={`Slide ${display + 1}`} />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:w-[42%] lg:ml-6">
                            <ul className="grid h-full text-sm lg:text-sm w-full lg:gap-y-0 gap-y-5 gap-6 px-1 pt-10 lg:p-4 lg:grid-rows-3 md:grid-cols-2 grid-cols-1 lg:grid-cols-2">
                                {[content[display].point1, content[display].point2, content[display].point3, content[display].point4, content[display].point5, content[display].point6].map((point, index) => (
                                    <motion.li
                                        key={index}
                                        className="w-full flex"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <FaRegCircle className="mr-2 lg:text-[20px] mt-2" /> {point}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

            </div>

        </div>
    );
}

