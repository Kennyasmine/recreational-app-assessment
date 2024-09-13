import { recommended } from "../constants"

const Recommendation = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-navy-blue">Recommended</h2>
      <div className="space-y-8">
        {recommended.map((recommend) => (
          <div key={recommend.image} className="flex flex-row justify-between items-start gap-[60px] mb-5 pt-4">
            <img src={recommend.image} alt="images" className="w-[220px] sm:w-[150px] md:w-[300px] 
              h-[450px] sm:h-[120px] md:h-auto object-cover flex-shrink-0" />
            {/* className="w-3/8 md:w-full h-48 object-cover mx-auto md:mx-0" */}
            <p className="flex-1 text-left leading-[24px] text-[14px] sm:text-[16px] font-Lato text-navy-blue">
              {recommend.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Recommendation
