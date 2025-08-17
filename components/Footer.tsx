import Link from "next/link";

export default function Footer() {
  return (
    <div className="container mx-auto px-8 py-4">
      <hr className="w-full border-gray-300 mt-8 mb-8" />
      <div className="flex flex-col gap-8 md:gap-2 md:flex-row justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-bold">Furniro</h1>
          <p className="text-gray-400">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-gray-400 font-semibold">Link</p>
          <div className="flex flex-col gap-4">
            <Link href="" className="font-semibold">
              Home
            </Link>
            <Link href="" className="font-semibold">
              Shop
            </Link>
            <Link href="" className="font-semibold">
              About
            </Link>
            <Link href="" className="font-semibold">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-gray-400 font-semibold">Help</p>
          <Link href="" className="font-semibold">
            Payment Options
          </Link>
          <Link href="" className="font-semibold">
            Returns
          </Link>
          <Link href="" className="font-semibold">
            Priacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-gray-400 font-semibold">Newsletter</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="px-2 py-3 underline"
            />
            <button className="underline cursor-pointer">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <hr className="w-full border-gray-300 mt-8 mb-8" />
      <div>{new Date().getFullYear()} Furniro. All rights reserved.</div>
    </div>
  );
}
