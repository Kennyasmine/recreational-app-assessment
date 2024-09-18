import { galleries } from "../constants"

const Gallery = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto mt-28">
      <h2 className="text-3xl font-bold text-center mb-10 text-navy-blue">Most Visited Places</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleries.map((gallery) => (
          <div key={gallery} className="overflow-hidden shadow-lg">
            <img src={gallery} alt="gallery image"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
