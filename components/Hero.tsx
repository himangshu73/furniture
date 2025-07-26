import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto relative">
      <Image
        src="/wallpaper.png"
        fill
        alt="wallpaper"
        className="object-contain"
      />
      <div>
        <p className="text-xs tracking-widest">New Arrival</p>
        <h1 className="text-xl font-bold">
          Discoer Our
          <br /> New Collection
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="px-3 py-2 text-white">BUY NOW</button>
      </div>
    </div>
  );
}
