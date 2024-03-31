import { useState } from "react";
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import FadeUpAnimation from "./FadeUpAnimation";
import { motion } from "framer-motion"
dayjs.extend(relativeTime)

interface BlogCardProps {
    featuredImage: string;
    title: string;
    id: string;
    datePublished: string;
    text: string;
}
const BlogCard: React.FC<BlogCardProps> = ({ featuredImage, title, datePublished }) => {
    const [cardHovered, setCardHovered] = useState(false)
    return (
        <FadeUpAnimation delay={0.7}>
            <div onMouseEnter={() => setCardHovered(true)} onMouseLeave={() => setCardHovered(false)} className="w-full rounded-[4px] cursor-pointer">
                <div><motion.img className="w-full aspect-[1.35] object-cover rounded-[5px]" src={featuredImage} /></div>
                <div className="flex flex-col justify-between h-[150px] mt-[20px]">
                    <p style={{ textDecoration: cardHovered ? "underline" : "" }} className="text-[19px] xl:text-[22px] space-grotesk-semibold leading-[1.15]">{title}</p>
                    <div className="flex justify-between">
                        <p className="text-[14px] opacity-60">{dayjs().to(dayjs(datePublished))}</p>
                        {/* <p className="text-[14px] opacity-60"></p> */}
                    </div>
                </div>
            </div>
        </FadeUpAnimation>
    );
}

export default BlogCard;