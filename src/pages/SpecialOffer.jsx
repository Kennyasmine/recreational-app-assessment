import { omuResort, zumaResturant } from "../assets/images"

const SpecialOffer = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-navy-blue">Special Offer</h2>
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-navy-blue font-Lato leading-[28.8px] font-bold mb-5">Zuma Resort</h2>
        <div className="flex flex-col lg:flex-row justify-between mb-5 gap-4">
          <p className="flex-1 order-2 lg:order-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
          </p>
          <img src={zumaResturant} alt="zuma resturants" className="w-full lg:w-[200px] h-[150px] order-1 lg:order-none"  />
        </div>
      </div>

      <div className="p-6 bg-white shadow-lg rounded-lg mt-20">
        <h2 className="text-navy-blue font-Lato leading-[28.8px] font-bold mb-5">Omu Resort</h2>
        <div className="flex flex-col lg:flex-row justify-between mb-5 gap-4">
          <p className="flex-1 order-2 lg:order-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
          </p>
          <img src={omuResort} alt="omu resort" className="w-full lg:w-[200px] h-[150px] order-1 lg:order-none"  />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
