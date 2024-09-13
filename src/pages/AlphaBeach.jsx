import { beach1, beach2 } from "../assets/images"
import Buttons from "../components/Buttons"
import { arrow2, vector } from "../assets/icons"

const AlphaBeach = () => {
  return (
    <section className="py-8 px-2 max-w-5xl mx-auto">
      <hr />
      <h2 className="text-3xl font-bold text-center mt-5 mb-10 text-navy-blue">Alpha Beach</h2>
        <div className="flex lg:flex-row justify-between mb-5 gap-2 lg:gap-4">
            <img src={beach1} alt="alpha beach" className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[430px] h-[300px]"  />
            <p className="flex-1 ml-10 text-sm lg:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse iusto deleniti unde, sapiente ullam eaque magnam numquam commodi distinctio a.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga numquam dicta velit veritatis provident, delectus consectetur? Aspernatur, optio? Animi!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta odit quae delectus molestiae atque autem.
            </p>
        </div>
        <div className="flex gap-20 font-Lato text-sky-blue">
            <h4 className="ml-[80px] text-sky-blue underline">More pictures</h4>
            <h4 className="underline">Reviews</h4>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-20 mt-10 mb-20">
            <Buttons className="text-white bg-light-green px-4 py-2 border-2 font-[24px]
            hover:bg-green-green font-Lato lg:text-lg" label="MAKE A RESERVATION" />
            <div className="relative flex items-center">
              <img src={arrow2} alt="direction arrow" className="absolute top-3 left-[80%] md:left-[160px]" />
              <Buttons className="flex items-center justify-center text-sky-blue bg-white py-2 w-[200px] rounded border-2 border-sky-blue font-[24px] 
              hover:bg-sky-blue hover:text-white font-Lato text-sm md:text-base lg:text-lg" label="DIRECTIONS"/>
            </div>
            <Buttons className="text-white bg-light-green px-4 py-2 border-2 font-[24px] 
            hover:bg-green-green font-Lato text-sm md:text-base lg:text-lg" label="BOOK A RIDE"/>
        </div>

        <hr />

        <h2 className="text-3xl font-bold text-center mt-5 mb-10 text-navy-blue">Barracuda Beach</h2>
        <div className="flex lg:flex-row justify-between mb-5 gap-4 flex-wrap lg:flex-nowrap">
          <img src={beach2} alt="barracuda beach" className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[430px] h-[300px]" />
          <p className="flex-1 ml-10 text-sm lg:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse iusto deleniti unde, sapiente ullam eaque magnam numquam commodi distinctio a.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga numquam dicta velit veritatis provident, delectus consectetur? Aspernatur, optio? Animi!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta odit quae delectus molestiae atque autem.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex justify-center items-center">
          <Buttons className="flex items-center justify-center gap-2 bg-white w-[140px] 
            hover:bg-[#D9B8B8] absolute left-[-5%] lg:left-[40%] bottom-[20%] px-4 py-2 border-2 rounded-md text-navy-blue ml-[300px]" label="See more">
          <img src={vector} alt="see more icon" className="absolute left-[78%] bottom-[35%]" />
          </Buttons>
        </div>

        <div className="flex gap-20 font-Lato text-sky-blue">
            <h4 className="ml-[80px] text-sky-blue underline">More pictures</h4>
            <h4 className="underline">Reviews</h4>
        </div>
        

    </section>
  )
}

export default AlphaBeach
