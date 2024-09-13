import { Link } from "react-router-dom"
import { BgImage } from "../assets/images"
import { goggleIcon } from "../assets/icons"
import Buttons from "../components/Buttons"

const LoginSignUp = () => {
  return (
    <section className="relative bg-cover bg-center h-[850px] t-[86px] overflow-hidden flex items-center justify-center" 
    style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="p-8 bg-white max-w-sm z-10">
        <h2 className="text-navy-blue text-center font-Lato leading-[31.2px] font-bold mb-9">Create your account</h2>
        <form action="">
          <p className="text-navy-blue leading-[20.4px] font-Lato">First Name</p>
          <input type="text" placeholder="First Name" className="w-full p-2 border border-gray-300 mt-2 mb-2" />
          <p className="text-navy-blue leading-[20.4px] font-Lato">Last Name</p>
          <input type="text" placeholder="Last Name" className="w-full p-2 border border-gray-300 mt-2 mb-2" />
          <p className="text-navy-blue leading-[20.4px] font-Lato">Phone Number</p>
          <input type="text" placeholder="Phone Number" className="w-full p-2 border border-gray-300 mt-2 mb-2" />
          <p className="text-navy-blue leading-[20.4px] font-Lato">Email Address</p>
          <input type="email" placeholder="paul@example.com" className="w-full p-2 border border-gray-300 mt-2 mb-2" />
          <p className="text-navy-blue leading-[20.4px] font-Lato">Password</p>
          <input type="password" placeholder="mininum of 6 characters" className="w-full p-2 border border-gray-300 mt-2 mb-2" />
          <p className="text-navy-blue leading-[20.4px] font-Lato">Confirm Password</p>
          <input type="password" placeholder="Confirm Password" className="w-full p-2 border border-gray-300 mt-2 mb-2" />
          <Link to="/alpha-beach">
            {/* <button className="text-white bg-navy-blue px-4 py-2 border-2 font-[24px] w-full 
            hover:bg-navy-blue font-Lato text-sm md:text-base lg:text-lg">
              Create account
            </button> */}
            <Buttons className="text-white bg-navy-blue px-4 py-2 border-2 font-[24px] w-full 
              hover:bg-navy-blue font-Lato text-sm md:text-base lg:text-lg" label="Create account" />
          </Link>
        </form>
        <div className="text-center my-4 font-Lato leading-[14.4px]">or</div>
        <Link to="/login">
          <div className="relative">
            <img src={goggleIcon} alt="Google Icon" className="absolute bottom-[9px] left-[40px]" />
            {/* <button className="text-navy-blue bg-white px-4 py-2 border-2 font-[24px] w-full 
              hover:border-blue-500 focus:ring focus:ring-blue-400 font-Lato text-sm md:text-base lg:text-lg">SignUp with Google
            </button> */}
            <Buttons className="text-navy-blue bg-white px-4 py-2 border-2 font-[24px] w-full 
              hover:border-blue-500 focus:ring focus:ring-blue-400 font-Lato text-sm md:text-base lg:text-lg" label="Sign Up with Google" />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default LoginSignUp
