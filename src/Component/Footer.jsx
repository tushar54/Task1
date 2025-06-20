import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white px-10 py-14 rounded-[20px] border border-purple-500">
      <div className="flex justify-around items-start gap-10">
     
        <div className="w-2/6 text-lime-400 font-bold text-xl">DEV/LOP.ME</div>

     
        <div className="w-4/6 space-y-6">
          <div className="text-6xl font-semibold">
            As you <span className="text-white">can</span>
          </div>

         
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-4 text-sm">
            <div>
              <div className="text-gray-400">Say hello</div>
              <div>HELLO@DEVELOP.ME.COM</div>
              <div>MAHBUBUL@ME.COM</div>
            </div>
            <div>
              <div className="text-gray-400 mt-4">Call</div>
              <div>+784549 4981 00</div>
              <div>+8845 0100 911</div>
            </div>
          </div>

          
          <div className="flex flex-col gap-2 text-sm">
            <div className="text-gray-400">Menu</div>
            <div>HOME</div>
            <div>ABOUT</div>
            <div>PORTFOLIO</div>
            <div className="  font-semibold w-fit">BLOG</div>
          </div>

        
          <div className="flex flex-col gap-2 text-sm">
            <div className="text-gray-400">Social</div>
            <div>TWITTER</div>
            <div>INSTAGRAM</div>
            <div>FACEBOOK</div>
            <div>BEHANCE</div>
            <div>DRIBBBLE</div>
          </div>
          </div>
        </div>
      </div>

     
      <div className="flex justify-between items-center mt-14 text-sm flex-wrap gap-4">
        <div className="font-bold">BESNIK</div>
        <div className="text-gray-500">© develop.me 2022</div>
        <div className="text-gray-500">PRIVACY – TERMS</div>
      </div>
    </div>
  );
};

export default Footer;
