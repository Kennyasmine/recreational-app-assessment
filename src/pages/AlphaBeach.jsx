import { beach1 } from "../assets/images"

const AlphaBeach = () => {
  return (
    <section className="py-8 px-2 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-navy-blue">Alpha Beach</h2>
        <div className="flex flex-col lg:flex-row justify-between mb-5 gap-4">
            <img src={beach1} alt="zuma resturants" className="w-full lg:w-[430px] h-[260px] order-1 lg:order-none"  />
            <p className="flex-1 ml-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab at dignissimos? Velit asperiores totam, quod hic quam temporibus soluta!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
            </p>
        </div>
        <div className="flex gap-20 font-Lato text-sky-blue">
            <h4 className="ml-[80px] text-sky-blue underline">More pictures</h4>
            <h4 className="underline">Reviews</h4>
        </div>
        {/* <div className="flex">
            <button className="text-white bg-green-green px-4 py-2 border-2 font-[24px] 
            hover:bg-light-green font-Lato text-sm md:text-base lg:text-lg">
                make a reservation
            </button>
        </div> */}
    </section>
  )
}

export default AlphaBeach
