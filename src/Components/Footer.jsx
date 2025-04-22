import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-zinc-800 text-zinc-400 text-sm py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-wide">NEWSHUNT</h2>
          <p className="text-sm text-zinc-400">Stay Informed. Stay Ahead.</p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition">Terms of Use</a>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-4">
          <a href="https://github.com/mygithub" target="_blank" rel="noreferrer" className="hover:text-white">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/mylinkedin" target="_blank" rel="noreferrer" className="hover:text-white">
            <FaLinkedin size={18} />
          </a>
          <a href="https://imnikhil.netlify.app" target="_blank" rel="noreferrer" className="hover:text-white">
            <FaGlobe size={18} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 text-center text-xs text-zinc-500">
        © 2025 <span className="font-semibold">NEWSHUNT</span>. All rights reserved. | Designed & Developed with ❤️ by Nikhil Mishra
      </div>
    </footer>
  );
}
