// blogContext.js
import { createContext, useContext, useReducer, useEffect } from "react";
import { blog } from "../data/blog";
import blogReducer, { ReducerType } from "../helper/blogReducer";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const initialState = {
        blog: blog,
        homeBlogs: [],
        latestBlog: [],
        displayBlogs: [],
        uniqueCategory: [],
        activeCat: "",
        blogPost: {},
        relatedBlogs: [],
        bookmarks: JSON.parse(localStorage.getItem("bookmarks")) || [],
    };
    const [state, dispatch] = useReducer(blogReducer, initialState);

    const handleSearchedBlog = (text) => {
        const filteredBlogs = blog.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        dispatch({
            type: ReducerType.SET_SEARCHED_BLOG_CARDS,
            payload: filteredBlogs,
        });
    };

    const setBlogById = (id) => {
        const blogPost = blog.find((item) => item.id === id);
        dispatch({ type: ReducerType.SET_BLOG_POST, payload: blogPost });
    };

    const setBlogByCategory = (catName) => {
        const blogs = blog.filter((item) => item.category === catName);
        dispatch({
            type: ReducerType.SET_DISPLAY_BLOG_CARDS,
            payload: blogs,
            catName,
        });
    };

    const setSavedBlogs = async () => {
        const blogs = await blog.filter((item) =>
            initialState.bookmarks.includes(item.id)
        );
        dispatch({
            type: ReducerType.SET_DISPLAY_BLOG_CARDS,
            payload: blogs,
            catName: "Saved",
        });
    };

    const setLatestBlog = () => {
        const blogs = blog.slice(-4).reverse();
        dispatch({ type: ReducerType.SET_LATEST_BLOG, payload: blogs });
    };

    const setHomeBlog = () => {
        const uniqueCategoriesSet = new Set();
        const uniqueBlogs = blog.filter((item) => {
            if (!uniqueCategoriesSet.has(item.category)) {
                uniqueCategoriesSet.add(item.category);
                return true;
            }
            return false;
        });
        dispatch({ type: ReducerType.SET_HOME_BLOGS, payload: uniqueBlogs });
    };

    const setRelatedBlogs = (category) => {
        const relatedBlogs = blog.filter((item) => item.category === category);
        dispatch({ type: ReducerType.SET_RELATED_BLOGS, payload: relatedBlogs });
    };

    const setUniqueCategory = () => {
        const uniqueCategories = [...new Set(blog.map((item) => item.category))];
        dispatch({ type: ReducerType.SET_UNIQUE_CATEGORY, payload: uniqueCategories });
    };

    const toggleBookmark = (id) => {
        const updatedBookmarks = state.bookmarks.includes(id)
            ? state.bookmarks.filter((blogId) => blogId !== id)
            : [...state.bookmarks, id];

        dispatch({ type: ReducerType.TOGGLE_BOOKMARKS, payload: updatedBookmarks });
        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    };

    useEffect(() => {
        setBlogByCategory("Front-End");
        setUniqueCategory();
        setLatestBlog();
        setHomeBlog();
    }, []);

    const contextValues = {
        handleSearchedBlog,
        setBlogById,
        setBlogByCategory,
        setSavedBlogs,
        setLatestBlog,
        setHomeBlog,
        setRelatedBlogs,
        setUniqueCategory,
        toggleBookmark,
        ...state,
    };

    return (
        <BlogContext.Provider value={contextValues}>{children}</BlogContext.Provider>
    );
};

export default function useBlog() {
    return useContext(BlogContext);
}
