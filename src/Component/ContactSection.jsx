import React from "react";
import { FiSend, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      className="relative overflow-hidden font-sans"
      style={{
        background: "radial-gradient(ellipse at top left, #d9f99d, #ffffff 60%, #CCFF02)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24 py-20 items-start">
       
        <div>
          <button className="border border-black px-4 py-1 rounded-full text-xs mb-6">
            Contact
          </button>

          <h2 className="text-5xl font-bold leading-tight mb-4">
            Interested in{" "}
            <span className="inline-block bg-black text-white px-2 rounded">
              work
            </span>{" "}
            together?
          </h2>

          <p className="text-sm text-black/70 mb-6 max-w-md">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other
          </p>

          <button className="flex items-center gap-2 border border-black px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
            <FiPhone className="text-lg" />
            Schedule a Call
          </button>
        </div>

       
        <div className="bg-black text-white rounded-3xl p-8 space-y-6 w-full max-w-md shadow-lg">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-transparent border-b border-white/30 py-2 placeholder-white/60 outline-none"
          />
          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-transparent border-b border-white/30 py-2 placeholder-white/60 outline-none"
          />
          <textarea
            placeholder="Describe your project"
            className="w-full bg-transparent border-b border-white/30 py-2 placeholder-white/60 outline-none h-24 resize-none"
          />

          <div className="flex items-center gap-4 pt-2">
            <button className="border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition flex items-center gap-1">
              <FiSend />
              Send
            </button>
            <span className="text-white/50 text-sm">or</span>
            <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
              <FiPhone className="text-lg" />
              Contact me
            </button>
          </div>

          <div className="flex justify-between items-center pt-6 text-sm text-white/60">
            <span>@williamrey</span>
            <div className="flex gap-4 text-white">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
