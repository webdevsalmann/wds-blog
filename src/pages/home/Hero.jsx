import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className='section-padding'>
      <div className="container mx-auto flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-lora">Hi, Im Salman Mallick <br />
            Web Developer</h1>
          <p className="my-4">Crafting Digital Dreams, One Line of Code at a Time. Elevate Your Online Presence with Innovative Web Solutions. Where Vision Meets Execution, We Define the Future of Web Development. Unleash the Power of Your Ideas, Expertly Coded for Success.</p>
          <div className="flex-between gap-4">
            <Link to="/blog" className="btn-p text-neutral-900 dark:text-neutral-900 dark:hover:text-neutral-900"> See Whats new</Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-center object-contain rounded" alt="hero" src="./images/icons/hero.svg" />
        </div>
      </div>
    </section>
  )
}
