import { Link } from "react-router-dom"
import { bigImageFrame } from "../assets/images"
import { goggleIcon } from "../assets/icons"
import Buttons from "../components/Buttons"


const Login = () => {
  return (
    <section className="relative bg-cover bg-center h-[520px] t-[86px] overflow-hidden flex items-center justify-center" 
    style={{ backgroundImage: `url(${bigImageFrame})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="p-8 bg-white max-w-sm w-[80%] z-10">
        <h2 className="text-navy-blue text-center font-Lato leading-[31.2px] font-bold mb-10">Welcome Back</h2>
        <form action="">
          <p className="text-navy-blue leading-[20.4px] font-Lato">Email Address</p>
          <input type="email" placeholder="paul@example.com" className="w-full p-2 border border-gray-300 mt-2 mb-2" />
          <p className="text-navy-blue leading-[20.4px] font-Lato">Password</p>
          <input type="password" placeholder="mininum of 6 characters" className="w-full p-2 border border-gray-300 mt-2 mb-2" />
          <div className="flex justify-between mb-5">
            <span className="text-navy-blue">Remember me</span>
            <span className="text-tomato-red cursor-pointer">Forget password?</span>
          </div>
          <Link to="/alpha-beach">
            {/* <button className="text-white bg-navy-blue px-4 py-2 border-2 font-[24px] w-full 
            hover:bg-navy-blue font-Lato text-sm md:text-base lg:text-lg">
              Log in
            </button>  */}
            <Buttons className="text-white bg-navy-blue px-4 py-2 border-2 font-[24px] w-full 
              hover:bg-navy-blue font-Lato text-sm md:text-base lg:text-lg" label="Log in"/>
          </Link>
        </form>
        <p className="text-center font-Lato leading-[14.4px] mt-3">
          Don`t have an account!
          <Link to="/signup">
            <span className="text-blue-400"> Sign Up?</span>
          </Link>
        </p>
        <div className="text-center my-4 font-Lato leading-[14.4px]">or</div>
        <Link to="/alpha-beach">
          <div className="relative">
            <img src={goggleIcon} alt="Goggle Icon" className="absolute bottom-[9px] left-[40px]" />
            {/* <button className="text-navy-blue bg-white px-4 py-2 border-2 font-[24px] w-full 
                hover:border-blue-500 focus:ring focus:ring-blue-400 font-Lato text-sm md:text-base lg:text-lg">Login with Google
            </button> */}
            <Buttons className="text-navy-blue bg-white px-4 py-2 border-2 font-[24px] w-full 
                hover:border-blue-500 focus:ring focus:ring-blue-400 font-Lato text-sm md:text-base lg:text-lg" label="Login with Google"/>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Login
