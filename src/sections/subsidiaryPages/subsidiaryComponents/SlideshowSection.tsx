import React from 'react'
// import { Card, CardContent } from "@/components/ui/card"
import { Card, CardContent } from "../../../../@/components/ui/card"
import { FaRegCircle } from "react-icons/fa6";
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../../../../@/components/ui/carousel"

interface Contents {
    img: string,
    point1: string,
    point2: string,
    point3:string,
    point4: string,
    point5: string,
    point6: string,
  }

interface Header {
    text: string
    className: string
}

const SlideshowSection: React.FC  = () => {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
   
    React.useEffect(() => {
      if (!api) {
        return
      }
   
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
   
      api.on("select", () => {
        console.log("current")
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])


    const content:Contents[]=[
        {
            img: 'assets/images/subsidiaryPagesImages/Card.png',
            point1: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point2: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point3: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point4: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point5: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point6: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
        },
        {
            img: 'assets/images/subsidiaryPagesImages/Card.png',
            point1: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point2: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point3: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point4: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point5: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point6: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
        },
        {
            img: 'assets/images/subsidiaryPagesImages/Card.png',
            point1: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point2: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point3: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point4: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point5: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
            point6: "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
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
        }
    ]

    const header:Header[] = [
        {
            text: "Alignment Assessment",
            className: ""
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
  return (
    <>
    <div className='h-screen  w-full px-4 bg-black text-white '>
      
        
        <Carousel setApi={setApi} className="w-full pt-20 h-full overflow-x-hidden">
        <div className=" flex justify-center items-center ">
            <div className='flex w-[70%] items-center mb-10 justify-around '>
                <div className='uppercase '>
                    <p className='font-semibold opacity-60 tracking-wide '>INSTANT INSIGHTS FOR INFORMED ACTIONS:<br/> User SOLUTIONS FOR REAL-TIME DECISIONS</p>
                    <h1 className='text-5xl my-5 opacity-90 font-semibold '>Roadmap for  Industry Advancement</h1>
                </div>
                <div className='flex justify-between w-[4%]'>
                    <div className=' '>
                        <CarouselPrevious className='flex p-2 cursor-pointer' />
                    </div>
                    <div className=' '>
                        <CarouselNext className='flex p-2 cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full mb-6 flex justify-center items-center '>
        <div className="w-[70%] flex justify-around items-center">
        {header.map((item, index) => (
            <div className="h-[60px] font-semibold opacity-60 tracking-wide w-[150px]" key={index}>
            <h1 className="p-2">{item.text}</h1>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: current === index + 1 ? '0%' : '-100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className={`${current === index + 1 ? 'w-full' : 'w-full hidden'}`}
                >
                    <img
                    className="w-full"
                    src="assets/images/subsidiaryPagesImages/props/Light dash.png"
                    alt=""
                    />
                </motion.div>
            </div>
        ))}
</div>

        </div>

            <CarouselContent className=' '>
                {/* {Array.from({ length: 50}).map((_, index) => (
                    <CarouselItem key={index}>
                    <div className="p-1">
                        <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                ))} */}
                {content.map((item,index)=>((
                    <CarouselItem className=' '  key={index} >
                        <div className=' w-[98vw] flex justify-center items-center ' >
                            <Card className='w-[70%] border-0'>
                                <CardContent className=' flex  w-full '>
                                    <div>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className='w-[40%] flex '>
                                        <ul className='grid  w-full gap-3  gap-y-5 p-4 grid-rows-3 grid-cols-2'>
                                            <li className='w-full flex  '> <FaRegCircle size={20} className="mr-2 mt-2" /> {item.point1}</li>
                                            <li className='w-full flex '><FaRegCircle size={20} className="mr-2 mt-2" />{item.point2}</li>
                                            <li className='w-full flex '><FaRegCircle size={20} className="mr-2 mt-2" /> {item.point3}</li>
                                            <li className='w-full flex '><FaRegCircle size={20} className="mr-2 mt-2" /> {item.point4}</li>
                                            <li className='w-full flex '><FaRegCircle size={20} className="mr-2 mt-2" /> {item.point5}</li>
                                            <li className='w-full flex '><FaRegCircle size={20} className="mr-2 mt-2" /> {item.point6}</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                )))}
            </CarouselContent>
        </Carousel>   
        
    </div>
    
    </>
    
  )
}

export default SlideshowSection
