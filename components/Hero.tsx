import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto">
      <div className="relative w-full h-[300px] md:h-[720px]">
        <Image
          src="/wallpaper.png"
          fill
          alt="wallpaper"
          className="object-cover"
          priority
        />
        <div className="hidden absolute right-12 bottom-20 md:flex flex-col bg-amber-100 px-8 py-8 items-start gap-4">
          <p className="text-sm tracking-widest">New Arrival</p>
          <h1 className="text-2xl font-bold text-amber-800">
            Discover Our
            <br /> New Collection
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="px-8 py-2 text-white font-bold bg-amber-800 hover:bg-amber-700 cursor-pointer">
            BUY NOW
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-amber-100 px-8 py-4 items-center gap-4 md:hidden">
        <p className="text-sm tracking-widest">New Arrival</p>
        <h1 className="text-2xl font-extrabold text-amber-800">
          Discover Our
          <br /> New Collection
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="px-8 py-2 text-white font-bold bg-amber-800 hover:bg-amber-700">
          BUY NOW
        </button>
      </div>
    </div>
  );
}
