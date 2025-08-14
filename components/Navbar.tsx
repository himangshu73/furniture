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
        <div className="md:flex gap-8 hidden">
          <p className="text-lg cursor-pointer text-gray-900 hover:text-gray-700">
            Home
          </p>
          <p className="text-lg cursor-pointer text-gray-900 hover:text-gray-700">
            Shop
          </p>
          <p className="text-lg cursor-pointer text-gray-900 hover:text-gray-700">
            About
          </p>
          <p className="text-lg cursor-pointer text-gray-900 hover:text-gray-700">
            Contact
          </p>
        </div>
        <div className="md:flex gap-8 hidden">
          <Image
            className="cursor-pointer"
            src="/account.svg"
            width={22}
            height={22}
            alt="account"
          />
          <Image
            className="cursor-pointer"
            src="/search.svg"
            width={22}
            height={22}
            alt="cart"
          />
          <Image
            className="cursor-pointer"
            src="/love.svg"
            width={22}
            height={22}
            alt="cart"
          />
          <Image
            className="cursor-pointer"
            src="/cart.svg"
            width={22}
            height={22}
            alt="cart"
          />
        </div>
        <button
          title="menu"
          aria-label="Open Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <IoMdClose size={32} /> : <RxHamburgerMenu size={32} />}
        </button>
      </nav>
      {menuOpen && (
        <ul className="md:hidden absolute z-50 right-4 p-4 rounded-xl shadow-lg bg-orange-200 mt-2 w-40 space-y-2 text-center transition duration-300">
          <li className="hover:bg-orange-300 rounded-lg cursor-pointer px-4 py-2">
            Home
          </li>
          <li className="hover:bg-orange-300 rounded-lg cursor-pointer px-4 py-2">
            Shop
          </li>
          <li className="hover:bg-orange-300 rounded-lg cursor-pointer px-4 py-2">
            About
          </li>
          <li className="hover:bg-orange-300 rounded-lg cursor-pointer px-4 py-2">
            Contact
          </li>
        </ul>
      )}
    </div>
  );
}
