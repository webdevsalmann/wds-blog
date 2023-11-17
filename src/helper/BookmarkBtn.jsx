import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import useBlog from "../context/BlogContext";

export default function BookmarkBtn({ id }) {
    const { toggleBookmark, bookmarks } = useBlog();

    return (
        <div className="p-1 flex-center gap-2 bg-red-500 hover:bg-red-600 rounded-sm hover:cursor-pointer" onClick={() => { toggleBookmark(id) }}>
            <div className="icon-box w-3 text-neutral-100 dark:text-neutral-100">
            {bookmarks.includes(id) ? <BsBookmarkFill /> : <BsBookmark />}
            </div>
            <span className=" text-xs font-bold text-neutral-100 dark:text-neutral-100">SAVE</span>
        </div>
    )
}
