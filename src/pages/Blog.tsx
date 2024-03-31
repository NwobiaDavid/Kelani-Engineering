import Lenis from "@studio-freight/lenis/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BlogCard from "../components/BlogCard";
import FadeUpAnimation from "../components/FadeUpAnimation";
import TopNav from "../components/TopNav";

interface BlogProps {
    lenis: Lenis;
}

interface BlogPost {
    title: string;
    featuredImage: string;
    Id: string;
    datePublished: string;
}

const Blog: React.FC<BlogProps> = ({ lenis }) => {
    const [loading, setLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState([])
    const url = "https://app.nocodb.com/api/v2/tables/mhmtgilh33ggz63/records";
    const options = {
        headers: {
            "xc-token": import.meta.env.VITE_APP_NOCODB_AUTH_TOKEN,
        },
    };
    const fetchBlogPosts = async () => {
        const result = await axios.get(url, options);
        setBlogPosts(result.data.list)
        console.log(result)
    }
    useEffect(() => {
        setLoading(true);
        try {
            fetchBlogPosts()
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }, [])
    return (
        <>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <TopNav lenis={lenis} />

            <main className="mt-[40px] p-[20px] md:p-[30px] md:px-[48px] mb-[100px] relative">
                <FadeUpAnimation>
                    <h1 className="text-[40px] md:text-[60px] space-grotesk-semibold text-center">OUR BLOG</h1>
                    <p className="text-[13px] md:text-[20px] museo-sans max-w-[820px] text-center mx-auto opacity-60">Stay in the Loop. Discover Our Latest Events, News, Online Trainings, and Products</p>
                </FadeUpAnimation>

                {!loading && <div className="w-full grid md:grid-cols-3 lg:grid-cols-4 gap-y-[60px] gap-x-[20px] mt-[60px]">
                    {blogPosts?.map((blogPost: BlogPost) => (<BlogCard
                        title={blogPost.title}
                        featuredImage={blogPost.featuredImage}
                        datePublished={blogPost.datePublished}
                        id={blogPost.Id}
                    />))}
                </div>}
                {loading && <div className="h-[400px] flex items-center justify-center">
                    <img className="w-[30px]" src="/assets/images/loader.gif" />
                </div>}
            </main>
            {/* <Footer contactUsUrl={
                "https://app.nocodb.com/api/v2/tables/mjgtqh17rbqo28w/records"
            } /> */}
        </>
    );
}

export default Blog;