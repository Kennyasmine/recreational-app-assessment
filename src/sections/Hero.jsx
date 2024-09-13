import { bigImage2 } from "../assets/images"
import Buttons from "../components/Buttons"
import Select from "../components/Select"

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-[498px] t-[86px] overflow-hidden" 
    style={{ backgroundImage: `url(${bigImage2})` }}
  >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 font-Lato">Wanna have fun?</h1>
        <p className="text-base md:text-lg mb-8">Why not check out popular recreation centers near you</p>
        <div className="flex items-center justify-center gap-4 w-full max-w-xs sm:max-w-sm mx-auto">
          <Select />
          <Buttons label="Find" className="px-4 py-2 bg-white text-navy-blue rounded hover:bg-navy-blue hover:text-white" />
        </div>
      </div>
    </section>
  )
}

export default Hero
