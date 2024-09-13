import { emailWhite } from "../assets/icons"
import Buttons from "../components/Buttons"

const Newsletters = () => {
  return (
    <section className="bg-navy-blue py-4 px-2">
      <div className="flex md:flex-row justify-center items-center max-w-3xl mx-auto gap-1 md:gap-6">
        <img src={emailWhite} alt="email icon white" className="hidden md:block w-5 h-5" />
        <p className="hidden md:block text-white font-Lato font-[24px] uppercase">Newletters</p>
        <input type="text" className="bg-transparent border-2 py-1 text-center text-white placeholder-white 
          focus:outline-none w-full md:w-auto" placeholder="Your email address" />
        {/* <button className="text-white bg-green-green px-4 py-2 border-2 font-[24px] 
        hover:bg-light-green font-Lato text-sm md:text-base lg:text-lg">SUBSCRIBE</button> */}
        <Buttons className="text-white bg-green-green px-4 py-1 border-2 font-[24px] 
          hover:bg-light-green font-Lato text-sm md:text-base lg:text-lg" label="SUBSCRIBE"/>
      </div>
    </section>
  )
}

export default Newsletters
