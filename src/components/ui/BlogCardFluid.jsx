import { Link } from "react-router-dom";
import BookmarkBtn from "../../helper/BookmarkBtn";


export default function BlogCardFluid({ id, category, title, img, content }) {
    return (
        <div className="set-bg-light block md:grid md:grid-cols-10 rounded-lg overflow-hidden shadow-lg">
            <div className="w-full col-span-2 aspect-video md:aspect-[9/10]">
                <div className="w-full h-full">
                    <img src={img?.length >= 50  ? img : `https://picsum.photos/600/400/?${img}`} alt={img} />
                </div>
            </div>
            <div className="p-4 col-span-8">
                <div className="mb-1 flex-between gap-2">
                    <p className="px-2 py-1 w-fit bg-green-300 text-xs font-bold text-green-700 dark:text-green-700 rounded-sm">{category}</p>
                    <BookmarkBtn id={id} />
                </div>
                <Link to={`/blog/${id}`}><p className="set-text text-2xl hover:underline hover:text-green-700 dark:hover:text-green-400 font-bold">{title}</p></Link>
                <p>{content}</p>
            </div>
        </div>
    )
}
