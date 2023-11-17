import useBlog from "../../context/BlogContext";
import BlogCardBox from "../../components/ui/BlogCardBox";
import { Link } from "react-router-dom";


export default function Latest() {
    const { latestBlog } = useBlog();

    return (
        <>
            <div className="h-16 bg-gradient-to-t from-gray-300 dark:from-gray-950">
                <div className="mt-8 mx-auto w-fit">
                    <Link to="/blog" className="btn-soft">View More</Link>
                </div>
            </div>
            <section className="section-padding set-bg-dark">
                <h1 className="mb-8">Latest Updates</h1>
                <div className="grid gap-4 grid-col-1 sm:grid-cols-2 md:grid-cols-4">
                    {latestBlog.map(item => {
                        return <BlogCardBox key={item.id + 1} id={item.id} img={item.content.find(contentItem => contentItem.type === "image")?.src} category={item.category} title={item.title} content={item.content[0].text} />
                    })}
                </div>
            </section>
            <div className="h-16 bg-gradient-to-b from-gray-300 dark:from-gray-950">
            </div>
        </>
    )
}
