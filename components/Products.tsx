import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <div>
      <div className="flex flex-col items-center py-8 gap-4">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
