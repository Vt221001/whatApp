import React from "react";
import Flag from "./assets/flag.svg";
import Facebook from "./assets/facebook.png";
import Twitter from "./assets/twitter.png";
import Youtube from "./assets/youtube.png";

function Footer() {
    return (
        <footer className="z-[50] w-full bg-[#39591F] text-white py-6 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-center relative">
            {/* Copyright Section */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0 text-sm md:text-base">
                &copy; 2025 KV TechMedia
            </div>

            {/* Made in India Section */}
            <div className="w-full md:w-1/3 flex items-center justify-center gap-2 text-sm md:text-base mb-4 md:mb-0">
                <span>Proudly made in</span>
                <img src={Flag} alt="India Flag" className="w-5 h-5 md:w-6 md:h-6" />
                <span>India, with ❣️</span>
            </div>

            {/* Social Media Links */}
            <div className="w-full md:w-1/3 flex justify-center gap-3">
  <a href="https://www.instagram.com/kvtmedia/" target="_blank" className="bg-white rounded-full w-8 h-8 flex items-center justify-center hover:opacity-100 transition-transform transform hover:scale-105 shadow-sm">
    <i className="fa-brands fa-square-instagram text-[#16563A] text-lg"></i>
  </a>
  <a href="https://www.facebook.com/kvtechmedia/" target="_blank" className="bg-white rounded-full w-8 h-8 flex items-center justify-center hover:opacity-100 transition-transform transform hover:scale-105 shadow-sm">
    <i className="fa-brands fa-square-facebook text-[#16563A] text-lg"></i>
  </a>
  <a href="https://in.linkedin.com/company/kvtechmedia" target="_blank" className="bg-white rounded-full w-8 h-8 flex items-center justify-center hover:opacity-100 transition-transform transform hover:scale-105 shadow-sm">
    <i className="fa-brands fa-linkedin text-[#16563A] text-lg"></i>
  </a>
</div>



        </footer>
    );
}

export default Footer;
