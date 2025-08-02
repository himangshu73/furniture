"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  image: string;
  name: string;
  description: string;
  price: number;
  standardPrice: number;
}

export default function ProductCard(props: Props) {
  const [isActive, setIsActive] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleTouchStart = () => {
    clearTimeout(timeoutId);
    setIsActive(true);
  };

  const handleTouchEnd = () => {
    timeoutId = setTimeout(() => setIsActive(false), 500);
  };

  return (
    <div
      className="relative w-[250px] group overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseLeave={() => setIsActive(false)}
    >
      <div>
        <div className="relative w-[250px] h-[300px]">
          <Image
            src={props.image}
            fill
            alt={props.name}
            className="object-cover"
          />
        </div>
        <div className="bg-orange-100 flex flex-col px-2 py-4 gap-2">
          <h2 className="text-xl font-bold">{props.name}</h2>
          <p className="text-base text-gray-600 line-clamp-2">
            {props.description}
          </p>
          <div className="flex gap-4">
            <h3 className="text-lg font-semibold">
              Rp {props.price.toLocaleString()}
            </h3>
            <h4 className="text-base text-gray-400 line-through">
              Rp {props.standardPrice.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isActive ? "opacity-50" : "opacity-0 md:group-hover:opacity-50"
          }`}
        ></div>
        <button
          className={`relative bg-white px-6 py-3 text-orange-500 text-sm font-medium rounded-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${
            isActive
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 md:group-hover:opacity-100 md:group-hover:scale-100"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
