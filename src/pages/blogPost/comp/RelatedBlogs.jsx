import BlogCardBox from "../../../components/ui/BlogCardBox";

export default function RelatedBlogs({ blogs }) {
    const displayBlogs = blogs?.slice(0, 8);
    return (
        <section className="section-padding">
            <div className="grid gap-4 grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {displayBlogs.map(item => {
                    return <BlogCardBox key={item.id + 1} id={item.id} img={item.content.find(contentItem => contentItem.type === "image")?.src}  category={item.category} title={item.title} content={item.content[0].text} />
                })}
            </div>
        </section>
    )
}
