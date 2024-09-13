import { about } from "../assets/images"

const AboutHero = () => {
  return (
    <section className="relative bg-cover bg-center h-[450px] t-[86px] overflow-hidden" 
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <h1 className="text-white z-20 relative text-4xl font-bold flex items-center justify-center h-full">About Us</h1>
    </section>
  )
}

export default AboutHero
