import useBlog from "../../context/BlogContext"

export default function Sidebar() {
  const { uniqueCategory, activeCat, setBlogByCategory, setSavedBlogs } = useBlog();
  return (
    <div className="relative p-4">
      <div className=" relative">
        <p className="mb-2 set-text font-bold">Categories</p>
        <ul className="sticky top-0  flex flex-col gap-1">
          {uniqueCategory.map((item, i) => {
            return <li key={i + 1} className={`py-1 px-2 set-bg text-balance-hover cursor-pointer hover:set-bg-dark rounded ${activeCat === item && "font-bold set-bg-dark "}`} onClick={() => { setBlogByCategory(item) }}> {item}</li>
          })}
          <li className={`py-1 px-2 set-bg text-balance-hover cursor-pointer hover:set-bg-dark rounded ${activeCat === "saved" && "font-bold set-bg-dark "}`} onClick={async () => await setSavedBlogs("saved")}> Saved</li>
        </ul>
      </div>
    </div>
  )
}
