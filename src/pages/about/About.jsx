import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import { testimonial } from "../../data/const";



export default function About() {
  return (
    <>
      <Header />
      <section className="section-padding">
        <div className="m-auto w-full md:w-3/4">
          <h2 className="mb-6 text-center">Unveiling Our Web Development Journey</h2>
          <p className="text-center">Welcome to our digital space, where innovation meets passion. Explore the story behind our web development endeavors and discover the essence of our mission-driven organization.</p>
        </div>
      </section>

      <section className="section-padding set-bg-dark">
        <div className="md:flex gap-4">
          <div className="mb-4 md:w-1/2 m-auto">
            <h2 className="mb-6 text-center">Mission and Vision</h2>
            <p className="text-center">Our mission is to redefine the digital landscape through cutting-edge web development, fostering creativity, and empowering businesses to thrive in the online realm. We envision a future where every website we craft becomes a gateway to success for our clients.</p>
          </div>
          <div className="img-box md:w-1/2 h-96 bg-fixed bg-[url('https://images.unsplash.com/photo-1595312222782-e5e2517b14b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1pc3Npb258ZW58MHx8MHx8fDA%3D')]">
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="md:flex gap-4">
          <div className="img-box md:w-1/2 h-96 bg-fixed bg-[url('https://images.unsplash.com/photo-1592252032050-34897f779223?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D')]">
          </div>
          <div className="mt-4 md:w-1/2 m-auto">
            <h2 className="mb-6 text-center">History and Milestones</h2>
            <p className="text-center">Embark on a journey through time as we recount the pivotal moments that shaped our programming journey. From our humble beginnings to groundbreaking achievements, each milestone reflects our commitment to pushing the boundaries of web development. Explore the timeline of our growth, and witness the evolution that defines us today.</p>
          </div>
        </div>
      </section>

      <section className="section-padding set-bg-dark">
        <div className="m-auto w-full md:w-3/4">
          <h2 className="mb-6 text-center">Team and Leadership</h2>
          <p className="text-center">Meet the faces driving our passion for web development. Our team brings together diverse talents and expertise, united by a shared commitment to excellence. Get to know the leaders steering our organization toward new horizons.</p>

          <div className="mt-6 flex-center gap-4">
            <div className="p-4 w-80 set-bg rounded md flex-center flex-col gap-2">
              <div className="img-box w-12 h-12 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
              <p className="text-center text-sm font-bold">John Doe <span className="text-xs italic"> - Founder & CEO</span></p>
              <p className="text-center text-sm">Visionary leader with a decade of experience in web development.</p>
            </div>

            <div className="p-4 w-80 set-bg rounded md flex-center flex-col gap-2">
              <div className="img-box w-12 h-12 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600603405959-6d623e92445c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
              <p className="text-center text-sm font-bold">Jane Smith <span className="text-xs italic"> - Head of Design</span></p>
              <p className="text-center text-sm">Creative guru behind our visually stunning and user-friendly interfaces.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="section-padding">
        <div className="md:flex gap-4">
          <div className="mb-4 md:w-1/2 m-auto">
            <h2 className="mb-6 text-center">Values and Culture</h2>
            <p className="text-center">Rooted in integrity, innovation, and collaboration, our core values shape the culture at programming hub. We believe in creating an environment where creativity thrives, and every team member contributes to our collective success.</p>
          </div>
          <div className="img-box md:w-1/2 h-96 bg-fixed bg-[url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbXxlbnwwfHwwfHx8MA%3D%3D')]"></div>
        </div>
      </section>

      <section className="section-padding set-bg-dark">
        <div className="m-auto w-full md:w-3/4">
          <h2 className="mb-6 text-center">Customer Testimonials</h2>
          <p className="text-center">Discover the impact of our web development solutions through the voices of our satisfied clients. Their success stories speak volumes about the quality and dedication we bring to every project.</p>
        </div>

        <div className="mt-4 flex gap-4 overflow-x-scroll">
          {testimonial.map(item => {
            return <div key={item.title} className="relative p-4 w-96 set-bg-light rounded-md flex-shrink-0">
              <div className="font-lora">{item.title}</div>
              <p className="py-4 text-sm">"{item.desc}"</p>
              <span className="w-full text-right font-bold italic">{item.name}</span>
              </div>
          })}
        </div>

      </section>
      <Footer />
    </>
  )
}
