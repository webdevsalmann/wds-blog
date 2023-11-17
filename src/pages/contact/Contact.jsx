import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="section-padding">
          <h1 className="mb-8 text-center">Have some Questions?</h1>
          <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="">
              <img className="object-contain" src="./images/icons/mail.svg" alt="message icon" />
            </div>

            <div className="p-4 flex flex-col gap-4">
              <label htmlFor="contactName">
                <p className="mb-1 font-bold">Full Name</p>
                <input type="text" id="contactName" className="py-1 px-4 w-full rounded text-balance bg-transparent outline outline-1 outline-green-300" placeholder="Enter your full name" />
              </label>
              <label htmlFor="contactEmail">
                <p className="mb-1 font-bold">Email</p>
                <input type="text" id="contactEmail" className="py-1 px-4 w-full rounded text-balance bg-transparent outline outline-1 outline-green-300" placeholder="xyz@mail.com" />
              </label>
              <label htmlFor="contactDescription">
                <p className="mb-1 font-bold">Description</p>
                <textarea name="" id="" cols="30" rows="10" className="py-1 px-4 w-full rounded text-balance bg-transparent outline outline-1 outline-green-300" placeholder="Hi there, I have some question about..."></textarea>
              </label>
              <button className="btn-p w-full">Submit</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
