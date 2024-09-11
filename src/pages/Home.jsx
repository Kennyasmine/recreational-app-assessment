import Ads from "../sections/Ads"
import Hero from "../sections/Hero"
import MostVisitedPlaces from "../sections/MostVisitedPlaces"
import Recommendation from "../sections/Recommendation"
import Reviews from "../sections/Reviews"

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="border-b border-b-slate-gray">
        <MostVisitedPlaces />
      </section> 
      <section>
        <Recommendation />
      </section> 
      <section className="border-b border-b-slate-gray">
        <Reviews />
      </section>
      <section>
        <Ads />
      </section>
    </div>
  )
}

export default Home
