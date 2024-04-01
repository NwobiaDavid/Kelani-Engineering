import { useParams } from "react-router-dom"
import TopNav from "../components/TopNav";
import Lenis from "@studio-freight/lenis/types";
import { useState, useEffect } from "react";
import axios from "axios";
import Markdown from 'markdown-to-jsx'
import dayjs from "dayjs"
import LocalizedFormat from "dayjs/plugin/localizedFormat"
dayjs.extend(LocalizedFormat);
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BlogPost } from "../types/blog";

interface BlogItemProps {
    lenis: Lenis;
}

const BlogItem: React.FC<BlogItemProps> = ({ lenis }) => {
    const { id } = useParams();
    const [blogPost, setBlogPost] = useState<BlogPost>({
        content: "",
        title: "",
        featuredImage: "",
        Id: "",
        datePublished: ""
    })
    const url = `https://app.nocodb.com/api/v2/tables/mhmtgilh33ggz63/records/${id}`;
    const options = {
        headers: {
            "xc-token": import.meta.env.VITE_APP_NOCODB_AUTH_TOKEN,
        },
    };
    const fetchBlogPosts = async () => {
        const result = await axios.get(url, options);
        setBlogPost(result.data)
        console.log(result)
    }
    useEffect(() => {
        try {
            fetchBlogPosts()
        } catch (err) {
            console.log(err);
        } finally {
        }
    }, [])
    return (
        <>
            <TopNav lenis={lenis} />
            {/* {loading && <div className="h-[400px] flex items-center justify-center">
                <img className="w-[30px]" src="/assets/images/loader.gif" />
            </div>} */}
            {<main className="w-full p-[20px] md:p-[30px] md:px-[48px] max-w-[720px] mx-auto md:pt-[50px]">
                <h1 className="text-[40px] space-grotesk-semibold leading-[1.23]">{blogPost?.title || <Skeleton count={2} />}</h1>
                <p className="text-[16px] mt-[5px] museo-sans font-normal opacity-60">{blogPost?.title ? `Published: ${dayjs(blogPost?.datePublished).format("LL")}.` : <Skeleton />}</p>
                <div className="markdown-container museo-sans mt-[50px]">
                    {blogPost?.content ? <Markdown>
                        {blogPost?.content}
                    </Markdown> : <Skeleton count={10} />}
                </div>
            </main>}
        </>
    );
}

export default BlogItem;