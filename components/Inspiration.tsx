import Image from "next/image";

export default function Inspiration() {
  return (
    <div className="container mx-auto flex flex-col gap-4 md:flex-row items-center bg-gray-50">
      <div className="flex flex-col items-start w-full md:w-1/3 gap-4 px-8">
        <h1 className="text-4xl font-bold">50+ Beautiful Room Inspirations</h1>
        <p className="text-medium">
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </p>
        <button className="px-8 py-2 text-white font-bold bg-amber-800 hover:bg-amber-700 cursor-pointer">
          Explore More
        </button>
      </div>
      <div className="w-full md:w-1/3 items-center px-8">
        <div className="relative">
          <Image src="/inner.jpg" width={400} height={580} alt="inner" />
          <div className="absolute bottom-5 left-5 z-10 bg-white/70 backdrop-blur-sm px-8 py-8 shadow-lg">
            <h1 className="text-xl font-semibold">Inner Peace</h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 items-center px-8">
        <Image src="/inner1.jpg" width={400} height={580} alt="inner" />
      </div>
    </div>
  );
}
