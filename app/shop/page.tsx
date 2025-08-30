import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/products";
import ShopFeatures from "@/components/ShopFeatures";

export default function Shop() {
  return (
    <div className="container mx-auto px-8 py-16">
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
      <div className="bg-gray-100">
        <ShopFeatures />
      </div>
    </div>
  );
}
