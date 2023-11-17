import Header from "../../components/layouts/Header"
import Footer from "../../components/layouts/Footer"
import Hero from "./Hero"
import Latest from "./Latest"
import Category from "./Category"
import Blogs from "./Blogs"

export default function Home() {
  return (
    <div>
      <Header />
      <main className="home">
        <Hero />
        <Blogs />
        <Latest />
        <Category />
      </main>
      <Footer />
    </div>
  )
}
