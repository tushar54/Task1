import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white px-6 py-10 md:px-10 md:py-14 rounded-[20px] border border-purple-500">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-around items-start gap-10">
        {/* Left: Logo */}
        <div className="lg:w-2/6 w-full text-lime-400 font-bold text-xl">
          DEV/LOP.ME
        </div>

        {/* Right: Content */}
        <div className="lg:w-4/6 w-full space-y-6">
          {/* Heading */}
          <div className="text-4xl md:text-5xl font-semibold">
            As you <span className="text-white">can</span>
          </div>

          {/* Grid: Say Hello, Menu, Social */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Say Hello + Call */}
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

            {/* Menu */}
            <div className="flex flex-col gap-2 text-sm">
              <div className="text-gray-400">Menu</div>
              <div>HOME</div>
              <div>ABOUT</div>
              <div>PORTFOLIO</div>
              <div className="font-semibold w-fit bg-green-500 text-black px-2 py-0.5">
                BLOG
              </div>
            </div>

            {/* Social */}
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

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-14 text-sm gap-4 text-center md:text-left">
        <div className="font-bold">BESNIK</div>
        <div className="text-gray-500">© develop.me 2022</div>
        <div className="text-gray-500">PRIVACY – TERMS</div>
      </div>
    </div>
  );
};

export default Footer;
