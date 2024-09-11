import { rectangle20 } from "../assets/images"

const Ads = () => {
  return (
    <section className="bg-white min-h-[330px]">
      <div className="relative mt-[30px] flex items-center justify-center min-h-[300px] bg-cover bg-center" 
        style={{ backgroundImage: `url(${rectangle20})` }}
      >
        <div className="absolute bg-black/50 flex px-18 py-16 items-center justify-center">
          <p className="text-white italic items-center font-Lato text-lg sm:text-2xl font-semibold text-center px-4 leading-[42px]">
            “Over 300 places of fun, why sit at home and get bored?”
          </p>
        </div> 
      </div>
    </section>
  )
}

export default Ads
