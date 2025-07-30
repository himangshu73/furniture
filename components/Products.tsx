import Image from "next/image";

export default function Products() {
  return (
    <div>
      <div className="flex flex-col items-center py-8 gap-4">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <div className="">
          <div className="relative w-[250px] h-[300px]">
            <Image
              src="/image1.jpg"
              fill
              alt="image"
              className="object-cover"
            />
          </div>
          <div className="bg-orange-100 flex flex-col px-2 py-4 gap-2">
            <h2 className="text-xl font-bold">Syltherine</h2>
            <p className="text-base text-gray-600">Stylish cafe chair</p>
            <div className="flex gap-4">
              <h3 className="text-lg font-semibold">Rp 2.500.000</h3>
              <h4 className="text-base text-gray-400 line-through">
                Rp 3.500.000
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
