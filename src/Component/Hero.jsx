import { FaTwitter, FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import img from '../assets/tushar.png'

export default function Hero() {
  return (
    <div style={{ backgroundImage: `url(${img})`,backgroundRepeat:'none' }} className="min-h-screen relative overflow-hidden px-4 md:px-16 bg-white">
      <div className="flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold">DEVLOP.<span className="text-black">ME</span></h1>
        <nav className="hidden md:flex justify-center items-center space-x-8 text-sm text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Blog</a>
           <button className="flex items-center gap-1 border border-black px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
          Start Project <MdOutlineArrowOutward />
        </button>
        </nav>
       
      </div>

      <div className="relative z-10 mt-20 max-w-4xl mb-3
      ">
        <p className="text-5xl space-y-7 sm:text-6xl font-bold leading-tight">
          <h2> Trusted <span className="bg-black text-white px-2  rounded-md">Partner</span> for </h2>
          <h2> Your Website <span className="bg-black text-white px-3 py-1 rounded-md">Develop.</span>
          </h2>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[500px] flex flex-col justify-center items-start">
          <p className="mt-6 text-gray-600 max-w-lgs">
            Building the world’s best marketing websites for over a decade.
            <br />
            Your trusted partner for strategy, design, and dev.
          </p>

          <div className="mt-6  flex items-center gap-4">
            <button className="flex items-center gap-2 border border-black px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
            <span className="rounded-full relative right-6 border-2 p-2">  <FaPhoneAlt /></span> Schedule a Call
            </button>

          </div>
        </div>

      </div>
      <div className="hidden md:flex items-center absolute left-4 top-3/4 z-10 text-2xl">
        <span className=" text-xl rotate-90 relative top-5 text-gray-600 font-medium">@williamvoy</span>
        <div className="space-y-3">
        <FaTwitter className="text-black hover:text-blue-500" />
        <FaFacebook className="text-black hover:text-blue-700" />
        <FaInstagram className="text-black hover:text-pink-500" />
        </div>
      </div>


    </div>
  );
}
