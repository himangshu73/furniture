"use client";

import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container mx-auto px-8 py-4">
      <nav className="flex justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-[40px] h-[22px]">
            <Image
              src="/logo.svg"
              fill
              alt="logo"
              className="object-contain cursor-pointer"
            />
          </div>
          <h1 className="hidden md:block text-2xl font-semibold hover:text-amber-800 cursor-pointer">
            Furniro
          </h1>
        </Link>

        <div className="md:flex gap-8 hidden">
          <Link
            href="/"
            className="text-lg cursor-pointer text-gray-900 hover:text-amber-700"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-lg cursor-pointer text-gray-900 hover:text-amber-700"
          >
            Shop
          </Link>
          <p className="text-lg cursor-pointer text-gray-900 hover:text-amber-700">
            About
          </p>
          <p className="text-lg cursor-pointer text-gray-900 hover:text-amber-700">
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
          {menuOpen ? <IoMdClose size={22} /> : <RxHamburgerMenu size={22} />}
        </button>
      </nav>
      {menuOpen && (
        <ul className="md:hidden absolute z-50 right-4 p-4 rounded-xl shadow-lg bg-orange-200 mt-2 w-40 space-y-2 text-center transition duration-300">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <li className="hover:bg-orange-300 rounded-lg cursor-pointer px-4 py-2">
              Home
            </li>
          </Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>
            <li className="hover:bg-orange-300 rounded-lg cursor-pointer px-4 py-2">
              Shop
            </li>
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            <li className="hover:bg-orange-300 rounded-lg cursor-pointer px-4 py-2">
              About
            </li>
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <li className="hover:bg-orange-300 rounded-lg cursor-pointer px-4 py-2">
              Contact
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
}
