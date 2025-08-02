import ProductCard from "./ProductCard";
import { products } from "@/products";

export default function Products() {
  return (
    <section className="py-12 bg-gay-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of stylish and comfortable furniture
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
}
