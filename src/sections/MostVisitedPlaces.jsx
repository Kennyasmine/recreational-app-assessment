import { places } from "../constants"

const MostVisitedPlaces = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-navy-blue">Most Visited Places</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place) => (
          <div key={place.title} className="relative bg-white shadow-lg rounded 
            overflow-hidden max-w-xs w-full sm:max-w-sm flex flex-col items-center mx-auto">
            <div className="relative">
              <div className="relative w-full">
                <img src={place.image} alt={place.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white">{place.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-navy-blue">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MostVisitedPlaces
