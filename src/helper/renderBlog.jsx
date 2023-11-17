
export default function renderBlogContent(article) {

  return (<>
  <p className="text-sm">{article.category}</p>
    <h1 className="mb-6">{article?.title}</h1>
    {article.content.map((item, index) => {
      if (item.type === "text") {
        return <p key={index}>{item.text}</p>;
      } else if (item.type === "image") {
        return <div key={index} className="p-4 m-auto w-full sm:w-2/3 md:w-1/2">
          <img src={item.src.length >= 50 ? item.src : `https://picsum.photos/600/400/?${item.src}`} alt={item.alt} />
        </div>
      } else if (item.type === "subtitle") {
        return (
          <h2 key={index} className="mt-6 mb-1 text-green-900 dark:text-green-100">
            {item.text}
          </h2>
        );
      }
    })}
  </>)
}