import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="container mx-auto px-8 py-4">
      <nav className="flex justify-between">
        <div className="relative w-[50px] h-[32px]">
          <Image src="/logo.svg" fill alt="logo" className="object-contain" />
        </div>
        <div>
          <RxHamburgerMenu size={32} />
        </div>
      </nav>
    </div>
  );
}
