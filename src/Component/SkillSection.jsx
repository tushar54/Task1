import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const skills = [
  {
    title: "HTML ȥ CSS",
    desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",

  },
  {
    title: "Javascript",
    desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  
  },
  {
    title: "Webflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-black text-white rounded-3xl px-6 py-12 md:px-20 md:py-20 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-lime-400 via-transparent to-cyan-400 blur-3xl opacity-50 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-10">
       
        <div className="flex-1 space-y-6">
          <button className="border border-white text-sm px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
            ⭑ Why Choose me
          </button>
          <h2 className="text-4xl font-bold">My Extensive<br />List of Skills</h2>
        </div>

     
        <div className="flex-1 gap-2 flex flex-col justify-between items-end h-full">
          <p className=" text-end text-sm text-gray-300 max-w-sm flex justify-end items-end">
            Building the world’s best marketing. <br /> Your trusted partner for strategy, design, and dev.
          </p>
         <div className="w-2/3"> <hr /></div>
          <div className="mt-4 flex gap-4">
            <button className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              <FaArrowLeft />
            </button>
            <button className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

    
      <div className="mt-14 flex flex-col md:flex-row gap-8 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-[#1a1a1a] rounded-2xl p-6 w-full md:w-80 relative shadow-md hover:scale-105 transition duration-300 ease-in-out ${
              skill.title === "Javascript" ? "rotate-[4deg]" : skill.title === "Webflow" ? "rotate-[2deg]" : ""
            }`}
          >
            
            <div className="mb-4 flex justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="icon" className="h-12 w-12" />
            </div>

     
            {skill.badge && (
              <div
                className={`absolute top-4 right-4 px-2 py-1 rounded text-xs font-semibold ${
                  skill.badge === "Webflow"
                    ? "bg-transparent border border-green-300 text-green-300"
                    : "bg-pink-500 text-white"
                }`}
              >
                {skill.badge}
              </div>
            )}

       
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-400 text-sm">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
