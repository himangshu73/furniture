"use client";

import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container mx-auto px-8 py-4">
      <nav className="flex justify-between">
        <div className="relative w-[50px] h-[32px]">
          <Image src="/logo.svg" fill alt="logo" className="object-contain" />
        </div>
        <button
          title="menu"
          aria-label="Open Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose size={32} /> : <RxHamburgerMenu size={32} />}
        </button>
      </nav>
      {menuOpen && (
        <ul className="absolute z-50 right-4 p-4 rounded-xl shadow-lg bg-orange-200 mt-2 w-40 space-y-2 text-center transition duration-300">
          <li className="hover:bg-orange-300 rounded-lg cursor-pointer px-4 py-2">
            Home
          </li>
          <li className="hover:bg-orange-300 rounded-lg cursor-pointer px-4 py-2">
            About
          </li>
          <li className="hover:bg-orange-300 rounded-lg cursor-pointer px-4 py-2">
            Contact
          </li>
          <li className="hover:bg-orange-300 rounded-lg cursor-pointer px-4 py-2">
            Privacy
          </li>
        </ul>
      )}
    </div>
  );
}
