import { MdOutlineArrowOutward } from "react-icons/md";

const companies = [
  "awwwards.",
  "facebook",
  "CSSWINNER",
  "/thoughtworks",
  "AUTODESK",
  "CSSDesignAwards",
];

export default function ExperienceSection() {
  return (
    <section className=" bg-gradient-to-tl from-[#c7fff5] via-[#B0FFB1] to-[#daff54]  relative overflow-hidden py-20 px-6 md:px-16 bg-white">

       
     
      <div className="relative z-10 flex justify-end">
        <button className="flex items-center gap-2 border border-black px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
          <span className="rotate-90">↘</span> About
        </button>
      </div>


      <div className="relative z-10 text-center mt-8">
        <p className="text-4xl sm:text-5xl font-bold leading-tight space-y-4">
         <h2> I’ve been <span className="bg-black text-white px-3 rounded-md">Developing</span></h2>
          <h2>Websites since <span className="bg-black text-white px-3 rounded-md">2013</span></h2>
        </p>

      
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm">
          We start every new client interaction with an in-depth discovery call where we get
          to know each other and recommend the best course of action.
        </p>
      </div>

    
      <div className="relative z-10 mt-14 flex justify-center items-center gap-4">
        <p className="text-left text-black font-semibold mb-4 text-xl">PREVIOUSLY <br /> WORKED ON</p>
        <div className="flex flex-wrap  gap-4 justify-center ">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-medium border border-black shadow-md ${
                index === 0 ? "bg-black text-white rotate-[-8deg]" : ""
              } ${index === 3 ? "rotate-[-4deg]" : ""} ${
                index === 5 ? "rotate-[6deg]" : ""
              }`}
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
