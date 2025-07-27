import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="container mx-auto px-8 py-4">
      <nav className="flex justify-between">
        <Image src="/logo.png" width={50} height={33} alt="logo" />
        <div>
          <RxHamburgerMenu size={33} />
        </div>
      </nav>
    </div>
  );
}
