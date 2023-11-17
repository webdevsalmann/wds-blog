import { useEffect } from "react";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import useBlog from "../../context/BlogContext";
import renderBlogContent from "../../helper/renderBlog";
import RelatedBlogs from "./comp/RelatedBlogs";
import { ScrollRestoration } from "react-router-dom";
import { useParams } from 'react-router-dom';



export default function BlogPost() {
    const { id } = useParams();
    const { blogPost, setBlogById, relatedBlogs, setRelatedBlogs } = useBlog();

    useEffect(() => {
        setRelatedBlogs(blogPost.category);
        setBlogById(id);
    }, [id]);
    
    return (
        <>
            <Header />
            <main>
                <section className="sm:w-[640px] p-4 sm:m-auto sm:pt-4">
                    {
                        JSON.stringify(blogPost) !== '{}' && renderBlogContent(blogPost)
                    }
                </section>
                <RelatedBlogs blogs={relatedBlogs} />
            </main>
            <ScrollRestoration />
            <Footer />
        </>
    )
}
