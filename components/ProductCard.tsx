import Image from "next/image";

export default function ProductCard(){
    return(
        <div className="relative w-[250px]">
          <div>
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
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 flex items-center justify-center transition-opacity duration-300">
            <button className="bg-white px-8 py-2 text-orange-400 text-sm">
              Add to cart
            </button>
          </div>
        </div>
    )
}