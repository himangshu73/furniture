import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <div>
      <div className="flex flex-col items-center py-8 gap-4">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <ProductCard
          image="/image1.jpg"
          name="Himangshu"
          description="Stylish cafe chair"
          price={2200.0}
          standardPrice={3200.0}
        />
        <ProductCard
          image="/image1.jpg"
          name="Suman Baba"
          description="Stylish cafe chair"
          price={5000.0}
          standardPrice={8000.0}
        />
        <ProductCard
          image="/image1.jpg"
          name="Barmon"
          description="Stylish cafe chair"
          price={4000.0}
          standardPrice={7000.0}
        />
      </div>
    </div>
  );
}
