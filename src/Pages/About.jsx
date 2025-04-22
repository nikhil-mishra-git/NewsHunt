import React from "react";
import BackButton from "../Components/BackButton";

const About = () => {
  return (
    <>
      <BackButton />
      <div className="min-h-scree px-6 py-12 font-sans">

        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-red-500 mb-8 tracking-tight">
            Welcome to NEWSHUNT
          </h1>

          <p className="text-center text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            <span className="text-white font-semibold">NEWSHUNT</span> is your
            intelligent gateway to the world’s headlines. We bring you the latest
            news, handpicked from reliable sources — all in one sleek, modern
            interface designed for today's fast-paced readers.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="bg-zinc-800 p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-red-400 mb-3">🌐 Global Reach</h3>
              <p className="text-zinc-400">
                Get real-time updates from every corner of the world. NEWSHUNT ensures you're always ahead with authentic global insights.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-red-400 mb-3">⚡ Fast & Reliable</h3>
              <p className="text-zinc-400">
                Speed meets accuracy. Our curated feeds use modern APIs to deliver breaking news as it happens — without clutter.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-red-400 mb-3">🔐 User-Centric</h3>
              <p className="text-zinc-400">
                Your profile, your feed. Enjoy a personalized experience with secure login, tailored news, and an intuitive UI.
              </p>
            </div>
          </div>


          <div className="mt-14 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">Why Choose NEWSHUNT?</h2>
            <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Unlike cluttered traditional portals, we focus on speed, simplicity, and satisfaction.
              Our platform is lightweight, responsive, and designed with readers in mind. Whether you’re
              browsing on the go or deep-diving into headlines — NEWSHUNT is your perfect daily companion.
            </p>
          </div>

          <p className="mt-16 text-center text-sm text-zinc-500 italic">
            Built with 💻 React, Tailwind CSS, and 💡 NewsAPI — by passionate developers who love clean code and clean news.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
