import { Link } from "react-router-dom";
import BookmarkBtn from "../../helper/BookmarkBtn";

export default function BlogCardBox({ id, category, title, img, content }) {

    return (
        <div className="relative set-bg-light block rounded-md overflow-hidden group shadow-lg">
            <div className="w-full aspect-video group-hover:brightness-75">
                <img src={img?.length >= 50 ? img : `https://picsum.photos/600/400/?${img}`} alt={img} className="" />
            </div>
            <div className="relative p-4 col-span-8">
                <Link to={`/blog/${id}`}><p className="set-text text-base font-bold hover:underline line-clamp-2 hover:text-green-700 dark:hover:text-green-400">{title}</p></Link>
                <p className="line-clamp-3 text-sm">{content}</p>
            </div>
            <div className="p-2 absolute top-0 left-0 w-full flex-between gap-4 opacity-0 group-hover:opacity-100">
                <p className="px-2 py-1 w-fit bg-green-300 text-xs font-bold text-green-700 dark:text-green-700 rounded-sm">{category}</p>
                <BookmarkBtn id={id} />
            </div>
        </div>
    )
}
