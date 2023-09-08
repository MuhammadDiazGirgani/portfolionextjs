import Link from "next/link";
import React from "react";


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-blue-900 rounded-full" />
        <span className="text-sm font-semibold tracking-widest text-black">PORTFOLIO</span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        
        <Link href="#" className=" lg:text-black font-medium hover:text-blue-700 transition duration-500 text-sm  lg:text-lg   text-slate-300">
          Home
        </Link>
        <Link href="/#projects"className=" lg:text-black font-medium hover:text-blue-700 transition duration-500 text-sm  lg:text-lg  text-slate-300">Projects</Link>
        <Link href="/#contact"className=" lg:text-black font-medium hover:text-blue-700 transition duration-500 text-sm lg:text-lg  text-slate-300">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
