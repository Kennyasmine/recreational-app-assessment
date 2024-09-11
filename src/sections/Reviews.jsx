import { nextLeft, nextRight, star } from "../assets/icons"
import { ellipse } from "../assets/images"

const Reviews = () => {
  return (
    <section className="hidden md:flex items-center justify-center min-h-screen bg-gray-gray">
      <div className="w-full max-w-lg mx-4 sm:mx-8 lg:mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Reviews</h2>
        <div>
          <img src={ellipse} alt=" ellipse" className="w-50 h-50 rounded-full mx-auto mb-4" />
          <div className="relative">
            <img src={nextLeft} alt="next left" className="absolute bottom-[175px] left-[-100px]" />
            <p className="text-white text-center font-Roboto leading-[50px]">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
            <div className="flex justify-center">
              <img src={star} alt="reviews star" className="justify-center" />
            </div>
            <img src={nextRight} alt="next right" className="absolute top-[100px] right-[-80px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
