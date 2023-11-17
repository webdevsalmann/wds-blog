import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import HiddenSidebar from "./HiddenSidebar";
// import Aside from "./Aside";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import { ScrollRestoration } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <Header />
      <div className="relative flex min-h-screen">

        <HiddenSidebar />
        
        <div className="sticky top-0 w-0 max-w-0 md:max-w-[16rem] md:w-full sidebar-border  overflow-hidden set-bg-light">
          <Sidebar />
        </div>

        <MainContent />

      </div>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
