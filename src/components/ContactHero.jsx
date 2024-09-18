import { contactImage } from "../assets/images"


const ContactHero = () => {
  return (
    <section className="relative bg-cover bg-center h-[450px] t-[86px] overflow-hidden" 
      style={{ backgroundImage: `url(${contactImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
    </section>
  )
}

export default ContactHero
