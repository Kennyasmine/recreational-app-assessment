import { vector } from "../assets/icons"
import { omuResort, zumaResturant } from "../assets/images"
import Buttons from "../components/Buttons"

const SpecialOffer = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-navy-blue">Special Offer</h2>
      <div className="p-6 bg-white shadow-2xl rounded-lg">
        <h2 className="text-navy-blue font-Lato leading-[28.8px] font-bold mb-5">Zuma Resort</h2>
        <div className="flex flex-row justify-between items-start gap-4 mb-5">
          <p className="flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
          </p>
          <img src={zumaResturant} alt="zuma resturants" className="w-[130px] md:w-[150px] lg:w-[200px] h-[130px] md:h-[120px] lg:h-[150px] object-cover"  />
          {/* className="w-full lg:w-[200px] h-[150px] order-1 lg:order-none" */}
        </div>
      </div>

      <div className="p-6 bg-white shadow-2xl rounded-lg mt-20">
        <h2 className="text-navy-blue font-Lato leading-[28.8px] font-bold mb-5">Omu Resort</h2>
        <div className="flex flex-row justify-between items-start gap-4 mb-5">
          <p className="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
          </p>
          <img src={omuResort} alt="omu resort" className="w-[130px] md:w-[150px] lg:w-[200px] h-[130px] md:h-[120px] lg:h-[150px] object-cover"  />
        </div>
      </div>

      <div className="relative flex flex-col justify-center mt-10 items-center">
          <Buttons className="gap-2 bg-white w-[140px] 
            hover:bg-[#D9B8B8] px-4 py-2 border-2 rounded-md text-navy-blue" label="See more">
          <img src={vector} alt="see more icon" className="absolute left-[60%] lg:left-[55%] bottom-[35%]" />
          </Buttons>
      </div>

    </section>
  )
}

export default SpecialOffer
