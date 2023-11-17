// blogReducer.js
export const ReducerType = {
    SET_BLOG_POST: "SET_SINGLE_BLOG_POST",
    SET_DISPLAY_BLOGS: "SET_DISPLAY_BLOGS",
    SET_DISPLAY_BLOG_CARDS: "SET_DISPLAY_BLOG_CARDS",
    SET_LATEST_BLOG: "SET_LATEST_DISPLAY_BLOG_CARDS",
    SET_UNIQUE_CATEGORY: "SET_UNIQUE_CATEGORY",
    SET_HOME_BLOGS: "SET_HOME_BLOGS",
    SET_RELATED_BLOGS: "SET_RELATED_BLOGS",
    SET_SEARCHED_BLOG_CARDS: "SET_SEARCHED_BLOG_CARDS",
    TOGGLE_BOOKMARKS: "TOGGLE_BOOKMARKS",
}

export default function blogReducer(state, action) {
  switch (action.type) {
    case ReducerType.SET_BLOG_POST:
      return {
        ...state,
        blogPost: action.payload,
      };
    case ReducerType.SET_RELATED_BLOGS:
      return {
        ...state,
        relatedBlogs: action.payload,
      };
    case ReducerType.SET_SEARCHED_BLOG_CARDS:
      return {
        ...state,
        displayBlogs: action.payload,
      };
    case ReducerType.SET_DISPLAY_BLOG_CARDS:
      return {
        ...state,
        displayBlogs: action.payload,
        activeCat: action.catName,
      };
    case ReducerType.SET_LATEST_BLOG:
      return {
        ...state,
        latestBlog: action.payload,
      };
    case ReducerType.SET_UNIQUE_CATEGORY:
      return {
        ...state,
        uniqueCategory: action.payload,
      };
    case ReducerType.SET_HOME_BLOGS:
      return {
        ...state,
        homeBlogs: action.payload,
      };
    case ReducerType.TOGGLE_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.payload,
      };
    default:
      return state;
  }
}
