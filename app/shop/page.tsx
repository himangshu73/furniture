import Image from "next/image";

export default function Shop() {
  return (
    <div className="container mx-auto px-8 py-16 bg-red-100">
      <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
        <div>
          <div className="flex gap-2">
            <Image src="trophy.svg" width={40} height={40} alt="trophy" />
            <div>
              <h2 className="text-xl font-semibold">High Quality</h2>
              <p>Crafted from top materials</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-xl font-semibold">Warranty Protection</h2>
            <p>Over 2 years</p>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-xl font-semibold">Free Shipping</h2>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-xl font-semibold">24 / 7 Support</h2>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
