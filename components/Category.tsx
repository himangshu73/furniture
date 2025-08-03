import Image from "next/image";

export default function Category() {
  return (
    <div className="conatainer mx-auto px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Browse The Range
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-2 px-8 md:px-20">
        <div className="flex flex-col gap-2 items-center">
          <Image src="/image106.jpg" alt="image" width={300} height={400} />
          <h3 className="text-xl font-semibold">Dining</h3>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image src="/image100.jpg" alt="image" width={300} height={400} />
          <h3 className="text-xl font-semibold">Living</h3>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image src="/image101.jpg" alt="image" width={300} height={400} />
          <h3 className="text-xl font-semibold">Bed Room</h3>
        </div>
      </div>
    </div>
  );
}
