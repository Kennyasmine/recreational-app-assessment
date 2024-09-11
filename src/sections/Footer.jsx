import { Link } from "react-router-dom"
import { appStore, googlePlay } from "../assets/icons"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div>
          <h3 className="text-2xl mb-2 font-semibold text-center">Download the app</h3>
          <p className="text-center mb-4">It`s even better on your phone</p>
          <div className="flex justify-center md:justify-center space-x-2">
            <img src={appStore} alt="app store" className="h-10" />
            <img src={googlePlay} alt="google play" className="h-10" />
          </div>
        </div>

        {/* footerLinks */}
        <div className='flex flex-1 justify-between lg:gap-5 gap-10 flex-wrap leading-[24px]'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='text-2xl leading-normal font-medium mb-6 mt-5'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="hover:text-slate-gray cursor-pointer text-base leading-[50px]">
                    <Link>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {socialMedia.map((icon) => (
                  <div key={icon.src} className="min-w-[150px]">
                    <h4 className='text-2xl leading-normal font-medium mb-10 mt-5'>{icon.title}</h4>
                    <ul>
                      {icon.links.map((img) => (
                        <Link key={img.src}>
                          <img src={img.src} alt={img.alt} className="h-6 mt-7 bg-light-purple rounded-full p-1 ml-10
                            cursor-pointer hover:bg-slate-gray"/>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
        </div>

        <div>
          <p className="text-center mt-5">Copyright © 2020</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
