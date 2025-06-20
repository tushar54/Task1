import React from "react";

const WorkProcess = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-6xl mx-auto">
     
        <div className="mb-12 text-center">
          <button className="border border-white px-4 py-1 rounded-full text-xs mb-4">
            Work Process
          </button>
          <h2 className="text-4xl font-bold">My Work Process</h2>
        </div>

        
        <div className="grid md:grid-cols-2 gap-6">
         
          <div className="bg-[#0f0f0f] border border-white/20 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#affff8] text-black text-sm font-semibold px-4 py-1 rounded-full">
                Discovery
              </span>
              <a href="#" className="text-sm underline">
                → Read More
              </a>
            </div>
            <p className="text-sm text-white/80">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other, discuss your current and
              future objectives, and recommend the best course of action.
            </p>
          </div>

          
          <div className="bg-lime-300 text-black p-6 rounded-xl transform rotate-[-3deg]">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-black text-white text-sm font-semibold px-4 py-1 rounded-full">
                Strategy
              </span>
              <a href="#" className="text-sm underline">
                → Read More
              </a>
            </div>
            <p className="text-sm">
              Every end-to-end project of ours begins with a tEsopke pre-build
              strateu. From brand ID consultation to in-depth oexle reviews
              we're here to set the stage for success.
            </p>
          </div>

         
          <div className="bg-[#0f0f0f] p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#affff8] text-black text-sm font-semibold px-4 py-1 rounded-full">
                Design
              </span>
              <a href="#" className="text-sm underline">
                → Read More
              </a>
            </div>
            <p className="text-sm text-white/80">
              After we have a comprehensive understanding of your brand, we’ll
              be ready to move onto design. Each page or will be designed,
              reviewed, and given your stamp of approval.
            </p>
          </div>

        
          <div className="bg-[#0f0f0f] p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#affff8] text-black text-sm font-semibold px-4 py-1 rounded-full">
                Build
              </span>
              <a href="#" className="text-sm underline">
                → Read More
              </a>
            </div>
            <p className="text-sm text-white/80">
              Whether we’ve just finished designing your new site or you’re
              handing off finished designs for us to develop in Webflow, we’re
              here to apply our trusted development process to your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
