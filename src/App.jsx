import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import './index.css'
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import { BlogProvider } from "./context/BlogContext";
import BlogPost from "./pages/blogPost/BlogPost";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <BlogPost />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);


export default function App() {
  return (
    <>
      <BlogProvider>
        <Toaster
          position="bottom-left"
          reverseOrder={false}
        />
        <RouterProvider router={router} />
      </BlogProvider>
    </>
  )
}