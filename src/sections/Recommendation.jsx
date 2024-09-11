import { recommended } from "../constants"

const Recommendation = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-navy-blue">Recommended</h2>
      <div className="space-y-8">
        {recommended.map((recommend) => (
          <div key={recommend.image} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-0.5 p-4">
            <img src={recommend.image} alt="images" className="w-3/8 md:w-full h-48 object-cover mx-auto md:mx-0" />
            <p className="ml-20 text-left leading-[24px] font-[16px] font-Lato text-navy-blue text-m">
              {recommend.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Recommendation
