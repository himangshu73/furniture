"use client";

import ProductCard from "@/components/ProductCard";
import ShopFeatures from "@/components/ShopFeatures";
import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  standardPrice: number;
}

export default function Shop() {
  const [items, getItems] = useState<Product[]>([]);
  async function getProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const products = response.data.products;
      console.log(products);
      getItems(products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container mx-auto px-8 py-16">
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            image={item.thumbnail}
            name={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      <div className="bg-gray-100">
        <ShopFeatures />
      </div>
    </div>
  );
}
