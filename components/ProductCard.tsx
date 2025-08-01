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

  return (
    <div
      className="relative w-[250px] group overflow-hidden"
      onTouchStart={() => {
        console.log("Touch Start");
        setIsActive(true);
      }}
      onTouchEnd={() => {
        console.log("Touch End");
        setTimeout(() => setIsActive(false), 300);
      }}
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
          <p className="text-base text-gray-600">{props.description}</p>
          <div className="flex gap-4">
            <h3 className="text-lg font-semibold">Rp {props.price}</h3>
            <h4 className="text-base text-gray-400 line-through">
              Rp {props.standardPrice}
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
          className={`relative bg-white px-8 py-2 text-orange-400 text-sm transition-all duration-300 hover:bg-orange-400 hover:text-white ${
            isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
          }`}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
