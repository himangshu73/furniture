import Image from "next/image";

export default function Products() {
  return (
    <div>
      <div className="flex flex-col items-center py-8">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <div className="">
          <div className="relative w-[250px] h-[300px]">
            <Image
              src="/image1.jpg"
              fill
              alt="image"
              className="object-contain"
            />
          </div>
          <div className="bg-gray-200">
            <h2 className="text-2xl font-bold">Syltherine</h2>
            <p className="text-lg font-semibold text-gray-400">
              Stylish cafe chair
            </p>
            <div className="flex gap-2">
              <h3 className="text-xl font-semibold">Rp 2.500.000</h3>
              <h4 className="text-lg text-gray-400 font-semibold line-through">
                Rp 3.500.000
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
