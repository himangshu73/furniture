import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/products";

export default function Shop() {
  return (
    <div className="container mx-auto px-8 py-16 bg-orange-100">
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            standardPrice={product.standardPrice}
          />
        ))}
      </div>
      <div className="flex md:flex-row flex-col gap-4 justify-between">
        <div className="flex gap-2">
          <Image src="trophy.svg" width={40} height={40} alt="trophy" />
          <div>
            <h2 className="text-lg font-semibold">High Quality</h2>
            <p className="text-gray-500">Crafted from top materials</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Image src="warranty.svg" width={40} height={40} alt="warranty" />
          <div>
            <h2 className="text-lg font-semibold">Warranty Protection</h2>
            <p className="text-gray-500">Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Image src="shipping.svg" width={40} height={40} alt="shipping" />
          <div>
            <h2 className="text-lg font-semibold">Free Shipping</h2>
            <p className="text-gray-500">Order over 150 $</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Image src="cc.svg" width={40} height={40} alt="customer" />
          <div>
            <h2 className="text-lg font-semibold">24 / 7 Support</h2>
            <p className="text-gray-500">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
