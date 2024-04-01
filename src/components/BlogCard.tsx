import { useState } from "react";
import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"
import FadeUpAnimation from "./FadeUpAnimation";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
dayjs.extend(localizedFormat)

interface BlogCardProps {
    featuredImage: string;
    title: string;
    id: string;
    datePublished: string;
}
const BlogCard: React.FC<BlogCardProps> = ({ featuredImage, title, datePublished, id }) => {
    const [cardHovered, setCardHovered] = useState(false)
    const navigate = useNavigate()
    return (
        <FadeUpAnimation delay={0.7}>
            <div onClick={() => navigate(`/blog/${id}`)} onMouseEnter={() => setCardHovered(true)} onMouseLeave={() => setCardHovered(false)} className="w-full cursor-pointer  shadow-[0_0px_10px_2px_rgba(0,0,0,0.06)]">
                <div className="w-full aspect-[1.7] overflow-hidden"><motion.img animate={{ scale: cardHovered ? 1.1 : 1, transition: { duration: 0.5 } }} className="w-full aspect-[1.7] object-cover" src={featuredImage} /></div>
                <div className="p-[20px] flex flex-col justify-between h-[150px]">
                    <div className="flex flex-col">
                        <p className="text-[14px] opacity-60 mb-[4px]">{dayjs(datePublished).format("LL")}</p>
                        <p style={{ textDecoration: cardHovered ? "underline" : "" }} className="text-[19px] xl:text-[22px] space-grotesk-semibold leading-[1.15]">{title}</p>
                    </div>
                </div>
            </div>
        </FadeUpAnimation>
    );
}

export default BlogCard;