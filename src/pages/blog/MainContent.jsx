import { useState } from "react";
import useBlog from "../../context/BlogContext";
import BlogCardFluid from "../../components/ui/BlogCardFluid";
// import renderBlogContent from "../../helper/renderBlog"



export default function MainContent() {
    const { displayBlogs, handleSearchedBlog } = useBlog();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchString, setSearchString] = useState("");
    const totalBlogs = displayBlogs.length;
    // HANDLE PAGES
    const itemsPerPage = 5;
    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // Slice the data to display only the items for the current page
    const filteredBlogs = displayBlogs.slice(startIndex, endIndex);
    const totalPages = Math.ceil(displayBlogs.length / itemsPerPage);
    const jumpToSection = () => document.getElementById("blog-card-container").scrollIntoView({ behavior: 'smooth' });
    const handlePreviousPage = () => { if (currentPage > 1) { setCurrentPage(currentPage - 1); } jumpToSection() };
    const handleNextPage = () => { if (currentPage < totalPages) { setCurrentPage(currentPage + 1); } jumpToSection() };


    // HANDLE SEARCH
    const handleSearch = (e) => {
        const newSearchString = e.target.value;
        setSearchString(newSearchString)
        handleSearchedBlog(searchString)
    }


    return (
        <main id="blog-card-container" className="px-4 relative flex-1">

            <div className="mb-4 flex gap-4">
                <input className="px-4 py-2 w-full rounded-lg shadow-md" value={searchString} type="search" placeholder="Search Blogs Here" onChange={handleSearch} />
            </div>
            <div className="mb-4 py-1 px-4 w-fit set-bg-light rounded-md">Total <span className="font-bold">{totalBlogs}-Blog</span> found</div>

            <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
                {filteredBlogs.map(item => {
                    return (
                        <BlogCardFluid key={item.id + 2} id={item.id} img={item.content.find(contentItem => contentItem.type === "image")?.src} category={item.category} title={item.title} content={item.content[0].text} />
                    )
                })}
            </div>

            <div className="mt-4 flex float-right gap-4">
                <button className={`btn-outline text-sm ${currentPage === 1 && "text-neutral-500 cursor-not-allowed"}`} onClick={handlePreviousPage}>Previous</button>
                <button>{currentPage + "/" + totalPages}</button>
                <button className={`btn-outline text-sm ${currentPage === totalPages && "text-neutral-500 cursor-not-allowed"}`} onClick={handleNextPage} >Next</button>
            </div>
        </main>
    )
}
