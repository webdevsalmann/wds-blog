import useBlog from "../../context/BlogContext";
import BlogCardBox from "../../components/ui/BlogCardBox";

export default function Blogs() {
    const { homeBlogs } = useBlog();

    return (
        <section className="section-padding pb-0">
            <h1 className="mb-8">Blogs</h1>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                {homeBlogs.map((item) => {
                    return <BlogCardBox key={item.id + 1} img={item.content.find(contentItem => contentItem.type === "image")?.src} id={item.id} category={item.category} title={item.title} content={item.content[0].text} />
                })}
            </div>
        </section>
    )
}
