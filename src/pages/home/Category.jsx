import { Link } from "react-router-dom";
import useBlog from "../../context/BlogContext"

const CategoryCard = ({ img, label }) => {
    const { setBlogByCategory } = useBlog();
    return (
        <Link to="/blog" className="group relative rounded-lg overflow-hidden aspect-[4/6] w-60 h-full flex-shrink-0" onClick={() => { setBlogByCategory(label) }}>
            <img className="group-hover:scale-125 transition-all" src={img} alt={label} />
            <div className="absolute top-1/2 left-0 bottom-0 w-full bg-gradient-to-t from-neutral-950 flex-center">
                <p className="relative p-1 text-2xl font-bold text-center text-neutral-100 dark:text-neutral-100">{label}</p>
            </div>
        </Link>
    )
}

export default function Category() {
    const { uniqueCategory } = useBlog();
    const colors = {
        0: "https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGZyb250ZW5kJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
        1: "https://images.unsplash.com/photo-1545670723-196ed0954986?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D",
        2: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2JTIwZnJhbWV3b3JrfGVufDB8fDB8fHww",
        3: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww",
        4: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG9vbHN8ZW58MHx8MHx8fDA%3D",
        5: "https://images.unsplash.com/photo-1516381548400-349d680edb56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG51bWJlcnN8ZW58MHx8MHx8fDA%3D",
        6: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHdlYiUyMGRldiUyMGZyYW1ld29ya3xlbnwwfHwwfHx8MA%3D%3D",
        7: "https://plus.unsplash.com/premium_photo-1684225765169-2c46196bcca6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        8: "https://plus.unsplash.com/premium_photo-1676618539987-12b7c8a8ae61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
        9: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        10: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGluZyUyMGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
        11: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWR5fGVufDB8fDB8fHww",
        12: "https://images.unsplash.com/photo-1533561797500-4fad4750814e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpZGV8ZW58MHx8MHx8fDA%3D",
        13: "https://images.unsplash.com/photo-1459180129673-eefb56f79b45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZWVyfGVufDB8fDB8fHww",
        14: "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVydmlld3xlbnwwfHwwfHx8MA%3D%3D",
    }
    return (
        <section className="section-padding">
            <h1 className="mb-8">Browse by Category</h1>
            <div className="flex gap-4 overflow-x-scroll">
                {uniqueCategory.map((item, i) => {
                    return <CategoryCard key={i + "fqweq3"} img={`${colors[i]}`} label={item} />
                })}
            </div>
        </section>
    )
}
